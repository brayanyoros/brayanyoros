import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { blogClusters, blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo sobre clareamento dental, restaurações estéticas e prótese dentária, produzido pela Vieira Odontologia em Teresópolis.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Blog"
          title="Conteúdo para quem quer entender antes de decidir"
          description="Artigos organizados por tema, sempre revisados antes da publicação, sem promessas de resultado."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-2xl border border-line bg-white/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {post.cluster}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Ler artigo →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
            Próximos temas em produção
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {blogClusters.map((cluster) => (
              <div key={cluster.name} className="rounded-2xl border border-dashed border-line p-5">
                <p className="text-[15px] font-semibold text-ink">{cluster.name}</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                  {cluster.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
