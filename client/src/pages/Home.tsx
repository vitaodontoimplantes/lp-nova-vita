import { ArrowUpRight, Check, ChevronDown, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star, Stethoscope } from "lucide-react";

const whatsappUrl = "https://wa.me/554196592624?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vita%20Sorriso%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implantes%20dent%C3%A1rios%20em%20Curitiba.";
const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Jos%C3%A9+Loureiro%2C+268+-+Centro%2C+Curitiba+-+PR";

function Logo() {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Vita Sorriso - início">
      <img src="/manus-storage/vita-logo-enviada_f945e36b.png" alt="Vita Sorriso Implantes" className="brand-logo" />
    </a>
  );
}

function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`whatsapp-button ${compact ? "px-4 py-2.5 text-xs" : "px-5 py-3.5"}`} onClick={() => window.dispatchEvent(new Event("whatsapp_click"))}>
      <MessageCircle size={compact ? 16 : 18} fill="currentColor" />
      <span>{compact ? "Agendar avaliação" : "Agendar avaliação pelo WhatsApp"}</span>
      {!compact && <ArrowUpRight size={16} />}
    </a>
  );
}

const steps = [
  { number: "01", title: "Avaliação", text: "Entendemos o que você busca, avaliamos sua saúde bucal e solicitamos os exames necessários.", icon: Stethoscope },
  { number: "02", title: "Planejamento", text: "Analisamos o seu caso e explicamos as opções, os prazos, os cuidados e o investimento.", icon: Sparkles },
  { number: "03", title: "Tratamento", text: "Com o plano definido, cuidamos de cada etapa e acompanhamos sua adaptação à nova prótese.", icon: ShieldCheck },
];

const testimonials = [
  { quote: "Fui acolhida desde a primeira avaliação. Explicaram cada etapa com calma e hoje consigo sorrir com muito mais segurança.", name: "Ana Paula S.", detail: "Paciente Vita Sorriso" },
  { quote: "O atendimento foi impecável do início ao fim. A equipe é humana, cuidadosa e muito competente.", name: "Carlos Eduardo M.", detail: "Paciente Vita Sorriso" },
  { quote: "Eu tinha medo de dentista, mas me senti seguro em todo o processo. Voltou a vontade de sorrir nas fotos.", name: "Roberto A.", detail: "Paciente Vita Sorriso" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <div className="topline"><span className="topline-dot" /> Implantes dentários em Curitiba <span className="hidden sm:inline">· Atendimento de segunda a sexta, das 8h às 18h</span></div>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/65 lg:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="nav-link">Como funciona</a>
            <a href="#confianca" className="nav-link">Por que a Vita</a>
            <a href="#duvidas" className="nav-link">Dúvidas</a>
            <a href="#localizacao" className="nav-link">Onde estamos</a>
          </nav>
          <WhatsAppButton compact />
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-24">
            <div className="relative z-10 max-w-[610px] animate-fade-up">
              <div className="eyebrow"><span className="eyebrow-line" /> Implantes dentários em Curitiba</div>
              <h1 className="mt-7 max-w-[620px] font-display text-[3.35rem] leading-[0.97] tracking-[-0.045em] text-ink sm:text-[4.5rem] lg:text-[5.3rem]">
                Recupere a segurança para <em className="text-gold">sorrir</em> e mastigar.
              </h1>
              <p className="mt-7 max-w-[530px] text-[1.05rem] leading-8 text-ink/65 sm:text-lg">
                Na Vita Sorriso, você recebe uma avaliação completa e um plano de tratamento individualizado. Em casos indicados, pode ser possível instalar uma prótese fixa provisória em curto prazo.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <span className="flex items-center gap-2 text-xs font-medium text-ink/45"><ShieldCheck size={15} className="text-gold" /> Atendimento sem compromisso</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink/10 pt-6 text-xs font-semibold uppercase tracking-[0.11em] text-ink/50">
                <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Planejamento digital</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Equipe especializada</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Clínica física</span>
              </div>
            </div>

            <div className="hero-visual animate-fade-in">
              <div className="hero-image-wrap">
                <img src="/manus-storage/clinica-hero_7757a1f7.jpg" alt="Profissional da Vita Sorriso na clínica de implantes em Curitiba" className="hero-image" />
                <div className="hero-image-shade" />
              </div>
              <div className="hero-note hero-note-top"><span className="note-icon"><Star size={14} fill="currentColor" /></span><span><strong>4,9</strong><small>no Google</small></span></div>
              <div className="hero-note hero-note-bottom"><span className="note-icon note-icon-dark"><Check size={15} /></span><span><strong>+2.000</strong><small>sorrisos atendidos</small></span></div>
              <div className="hero-caption"><span className="caption-rule" /> Cuidado que começa na escuta</div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container grid gap-5 py-7 sm:grid-cols-3 lg:grid-cols-3">
            <div className="trust-item"><span className="trust-icon"><MapPin size={17} /></span><span><strong>Centro de Curitiba</strong><small>Clínica física e acessível</small></span></div>
            <div className="trust-item"><span className="trust-icon"><Clock3 size={17} /></span><span><strong>Acompanhamento próximo</strong><small>Do planejamento ao pós-tratamento</small></span></div>
            <div className="trust-item"><span className="trust-icon"><ShieldCheck size={17} /></span><span><strong>Plano individualizado</strong><small>Seu caso no centro das decisões</small></span></div>
          </div>
        </section>

        <section className="section-space bg-paper" id="confianca">
          <div className="container grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Para voltar a viver com liberdade</div>
              <h2 className="section-title mt-6">Sorrir sem esconder.<br /><em className="text-gold">Mastigar com segurança.</em></h2>
              <p className="mt-6 max-w-[450px] leading-7 text-ink/60">Dentes ausentes ou próteses instáveis podem afetar a alimentação, a fala e a confiança. A reabilitação com implantes pode ser uma alternativa para recuperar função e estabilidade.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link mt-7 inline-flex">Entender meu caso <ArrowUpRight size={16} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="feature-card feature-card-dark sm:translate-y-8"><span className="feature-number">01</span><h3>Mais estabilidade</h3><p>Uma solução planejada para trazer mais segurança ao falar, sorrir e mastigar.</p></div>
              <div className="feature-card"><span className="feature-number">02</span><h3>Mais naturalidade</h3><p>Próteses planejadas para respeitar o seu rosto, sua mordida e o seu momento.</p></div>
              <div className="feature-card sm:col-span-2"><span className="feature-number">03</span><div><h3>Mais tranquilidade</h3><p>Você entende o caminho antes de começar e conta com uma equipe por perto em cada fase.</p></div><div className="feature-mark"><Sparkles size={23} /></div></div>
            </div>
          </div>
        </section>

        <section className="section-space section-tint" id="como-funciona">
          <div className="container">
            <div className="mx-auto max-w-[680px] text-center"><div className="eyebrow justify-center"><span className="eyebrow-line" /> Um caminho claro <span className="eyebrow-line" /></div><h2 className="section-title mt-6">Cuidado que começa antes do tratamento.</h2><p className="mx-auto mt-5 max-w-[570px] leading-7 text-ink/60">Cada caso tem um tempo e uma indicação. Por isso, o primeiro passo é entender você — não vender uma promessa pronta.</p></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {steps.map(({ number, title, text, icon: Icon }) => <div key={number} className="step-card"><div className="flex items-center justify-between"><span className="step-number">{number}</span><Icon size={23} strokeWidth={1.5} className="text-gold" /></div><h3 className="mt-10 font-display text-3xl tracking-[-0.02em]">{title}</h3><p className="mt-3 leading-7 text-ink/60">{text}</p></div>)}
            </div>
            <p className="mx-auto mt-8 max-w-[780px] text-center text-xs leading-5 text-ink/45">A possibilidade de carga imediata e o prazo para instalação de dentes fixos provisórios variam conforme as condições clínicas e a estabilidade dos implantes.</p>
          </div>
        </section>

        <section className="dark-section" id="depoimentos">
          <div className="container grid items-end gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Histórias reais</div><h2 className="section-title mt-6 text-paper">O que muda quando você volta a confiar no seu sorriso.</h2><div className="mt-8 flex items-center gap-4"><div className="flex -space-x-2"><span className="avatar avatar-a">A</span><span className="avatar avatar-c">C</span><span className="avatar avatar-r">R</span></div><div><div className="flex gap-1 text-gold"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><p className="mt-1 text-xs text-paper/55">4,9 baseado em 120+ avaliações</p></div></div></div>
            <div className="grid gap-4 md:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="testimonial-card"><div className="flex gap-1 text-gold"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><blockquote className="mt-5 text-[0.98rem] leading-7 text-paper/85">“{item.quote}”</blockquote><figcaption className="mt-7 border-t border-paper/10 pt-4"><strong className="block text-sm text-paper">{item.name}</strong><span className="mt-1 block text-xs text-paper/45">{item.detail}</span></figcaption></figure>)}</div>
          </div>
        </section>

        <section className="section-space bg-paper" id="duvidas">
          <div className="container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><div><div className="eyebrow"><span className="eyebrow-line" /> Antes de começar</div><h2 className="section-title mt-6">Dúvidas honestas merecem respostas claras.</h2><p className="mt-5 leading-7 text-ink/60">Reunimos as perguntas mais comuns. Na avaliação, você pode falar abertamente sobre suas expectativas e receios.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link mt-7 inline-flex">Falar com a equipe <ArrowUpRight size={16} /></a></div><div className="faq-list">{[
            ["É possível sair com dentes fixos no mesmo dia?", "Em alguns casos, pode ser indicada uma prótese fixa provisória em curto prazo. Isso depende da avaliação clínica, da qualidade óssea e da estabilidade dos implantes."],
            ["O procedimento dói?", "O tratamento é realizado com anestesia e os recursos de conforto indicados para cada paciente. Nossa equipe explica os cuidados e acompanha o pós-operatório."],
            ["Vou ficar sem dentes durante o tratamento?", "O planejamento considera uma solução provisória quando ela for indicada para o caso. Essa possibilidade é explicada durante a avaliação."],
            ["Quanto custa fazer implantes?", "O investimento depende do número de implantes, do tipo de prótese e de outras necessidades identificadas na avaliação. Depois, a equipe apresenta o plano e as condições disponíveis."],
          ].map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="location-section" id="localizacao"><div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Estamos em Curitiba</div><h2 className="section-title mt-6 text-paper">Uma clínica feita para você se sentir à vontade.</h2><p className="mt-5 max-w-[520px] leading-7 text-paper/65">Rua José Loureiro, 268 — Centro, Curitiba — PR. Atendimento de segunda a sexta, das 8h às 18h.</p><div className="mt-8 flex flex-col items-start gap-3 sm:flex-row"><WhatsAppButton /><a href={mapsUrl} target="_blank" rel="noreferrer" className="outline-button"><MapPin size={16} /> Como chegar</a></div></div><div className="clinic-gallery"><img src="/manus-storage/clinica-recepcao_dc727bef.jpg" alt="Recepção da clínica Vita Sorriso" className="clinic-gallery-main" /><img src="/manus-storage/clinica-fachada-1_83ebbb19.jpg" alt="Fachada da clínica Vita Sorriso" className="clinic-gallery-small" /><div className="location-label"><strong>Vita Sorriso Implantes</strong><span>Centro · Curitiba/PR</span></div></div></div></section>
      </main>

      <footer className="border-t border-ink/10 bg-paper"><div className="container flex flex-col gap-6 py-8 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between"><Logo /><div className="flex flex-col gap-2 text-left sm:items-end"><a href="tel:+554196592624" className="flex items-center gap-2 hover:text-ink"><Phone size={14} /> (41) 9659-2624</a><span>Vita Sorriso Implantes · Curitiba/PR</span></div></div><div className="container border-t border-ink/10 py-5 text-[0.68rem] leading-5 text-ink/40">As informações desta página são gerais. Indicação, prazos, resultados e condições de tratamento variam conforme cada caso e devem ser definidos em avaliação clínica. Fotos e depoimentos devem ser publicados somente com autorização.</div></footer>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Falar com a Vita Sorriso pelo WhatsApp"><MessageCircle size={23} fill="currentColor" /></a>
      <div className="mobile-cta"><WhatsAppButton compact /></div>
    </div>
  );
}
