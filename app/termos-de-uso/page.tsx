import type { Metadata } from "next";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site da Vieira Odontologia.",
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: false, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <section className="container-page max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Termos de Uso</h1>
      <p className="mt-2 text-sm text-ink-soft">Última atualização: [PREENCHER]</p>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">1. Objetivo do site</h2>
          <p className="mt-2">
            Este site tem finalidade informativa e institucional, apresentando
            os tratamentos oferecidos pela {clinic.name} e facilitando o
            agendamento de avaliações. Ele não substitui uma consulta
            odontológica presencial.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">2. Conteúdo clínico</h2>
          <p className="mt-2">
            As informações sobre tratamentos, incluindo etapas, benefícios e
            limitações, têm caráter educativo geral. Nenhum resultado
            específico é garantido, já que cada caso depende de avaliação
            clínica individual conduzida pelo Dr. Luis Rodrigues Vieira
            ({clinic.dentist.cro}).
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">3. Uso do formulário e do WhatsApp</h2>
          <p className="mt-2">
            Ao preencher o formulário de contato ou iniciar uma conversa pelo
            WhatsApp, você concorda em fornecer informações verdadeiras para
            viabilizar o retorno de contato da clínica.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">4. Propriedade intelectual</h2>
          <p className="mt-2">
            Textos, imagens e identidade visual deste site pertencem à{" "}
            {clinic.name} ou são utilizados com a devida autorização, sendo
            vedada a reprodução sem permissão prévia.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">5. Alterações</h2>
          <p className="mt-2">
            Estes termos podem ser atualizados periodicamente. Recomendamos a
            consulta desta página de tempos em tempos.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">6. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre estes termos podem ser encaminhadas pelo WhatsApp{" "}
            {clinic.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
