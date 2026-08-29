import type { Metadata } from "next";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Vieira Odontologia, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="container-page max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Última atualização: [PREENCHER]</p>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">1. Quem somos</h2>
          <p className="mt-2">
            Esta política se aplica ao site da {clinic.name}, responsável técnico{" "}
            {clinic.dentist.fullName} ({clinic.dentist.cro}), localizada em{" "}
            {clinic.addressFull}. [PREENCHER — CNPJ/razão social, se aplicável].
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">2. Dados que coletamos</h2>
          <p className="mt-2">
            Ao preencher o formulário de contato, coletamos nome, número de
            WhatsApp e o tratamento de interesse informado voluntariamente.
            Não solicitamos dados de saúde sensíveis por meio do formulário do
            site — informações clínicas são tratadas apenas durante a consulta
            presencial, sob sigilo profissional.
          </p>
          <p className="mt-2">
            Também podemos coletar dados de navegação de forma automatizada
            (como páginas visitadas e origem do acesso) por meio de
            ferramentas de análise, quando configuradas.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">3. Finalidade do uso dos dados</h2>
          <p className="mt-2">
            Os dados informados no formulário são utilizados exclusivamente
            para retorno de contato via WhatsApp ou telefone, com o objetivo
            de agendar avaliações e esclarecer dúvidas sobre os tratamentos
            oferecidos.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">4. Compartilhamento de dados</h2>
          <p className="mt-2">
            Não vendemos nem compartilhamos seus dados pessoais com terceiros
            para fins de marketing. Dados podem ser processados por
            ferramentas de análise (como Google Analytics) e de agendamento,
            quando utilizadas, seguindo as respectivas políticas de
            privacidade dessas ferramentas.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">5. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados),
            você pode solicitar a qualquer momento a confirmação, o acesso, a
            correção ou a exclusão dos seus dados pessoais, entrando em
            contato pelo WhatsApp {clinic.phoneDisplay} ou pelo e-mail
            [PREENCHER].
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">6. Cookies</h2>
          <p className="mt-2">
            Este site pode utilizar cookies para melhorar a experiência de
            navegação e para fins de análise estatística. Você pode
            desativá-los nas configurações do seu navegador a qualquer
            momento.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink">7. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política podem ser encaminhadas pelo WhatsApp{" "}
            {clinic.phoneDisplay} ou pelo e-mail [PREENCHER].
          </p>
        </div>
      </div>
    </section>
  );
}
