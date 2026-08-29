import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { ScheduleCTA } from "@/components/CTAButton";
import { blogPosts } from "@/lib/blog-data";
import { treatments } from "@/lib/clinic-data";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedTreatment = treatments.find((t) => t.slug === post.relatedTreatmentSlug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article className="container-page max-w-2xl py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{post.cluster}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          Publicado em{" "}
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-soft">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {relatedTreatment && (
          <div className="mt-12 rounded-2xl border border-line bg-cream-dark/50 p-6">
            <p className="text-[15px] text-ink-soft">
              Quer entender melhor as opções para o seu caso?
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/tratamentos/${relatedTreatment.slug}`}
                className="text-sm font-semibold text-primary"
              >
                Conhecer {relatedTreatment.shortName.toLowerCase()} →
              </Link>
              <ScheduleCTA location={`blog_${post.slug}`} className="!py-2.5 !px-5 text-sm">
                Agendar avaliação
              </ScheduleCTA>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
