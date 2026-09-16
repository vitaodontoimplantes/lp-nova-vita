import { ArrowUpRight, Check, ChevronDown, MapPin, MessageCircle, ShieldCheck, Star } from "lucide-react";

const whatsappUrl = "https://wa.me/554196592624?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vita%20Sorriso%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implantes%20dent%C3%A1rios%20em%20Curitiba.";
const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Jos%C3%A9+Loureiro%2C+268+-+Centro%2C+Curitiba+-+PR";

function Logo() {
  return <a href="#inicio" aria-label="Vita Sorriso - início"><img src="/manus-storage/vita-logo-enviada_f945e36b.png" alt="Vita Sorriso Implantes" className="brand-logo" /></a>;
}

function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`whatsapp-button ${compact ? "px-4 py-2.5 text-xs" : "px-6 py-4"}`} onClick={() => window.dispatchEvent(new Event("whatsapp_click"))}><MessageCircle size={compact ? 16 : 19} fill="currentColor" /><span>{compact ? "Agendar avaliação" : "Quero agendar minha avaliação"}</span>{!compact && <ArrowUpRight size={16} />}</a>;
}

const faqs = [
  ["Posso colocar dentes fixos rapidamente?", "Em alguns casos, pode ser indicada uma prótese fixa provisória em curto prazo. Isso depende da avaliação clínica e da estabilidade dos implantes."],
  ["Como saber o valor do tratamento?", "O valor depende do seu caso, do número de implantes e do tipo de prótese. Você recebe um plano explicado após a avaliação."],
  ["O tratamento dói?", "O procedimento é realizado com anestesia e os recursos de conforto indicados para cada paciente. Nossa equipe acompanha o pós-operatório."],
];

export default function Home() {
  return <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
    <div className="topline"><span className="topline-dot" /> Implantes dentários em Curitiba <span className="hidden sm:inline">· Segunda a sexta, 8h às 18h</span></div>
    <header className="simple-header"><div className="container flex h-[74px] items-center justify-between gap-5"><Logo /><WhatsAppButton compact /></div></header>

    <main>
      <section id="inicio" className="ppc-hero hero-section"><div className="hero-orb hero-orb-one" /><div className="container relative grid items-center gap-9 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-16"><div className="relative z-10 max-w-[590px] animate-fade-up"><div className="eyebrow"><span className="eyebrow-line" /> Clínica de implantes em Curitiba</div><h1 className="mt-6 font-display text-[3.25rem] leading-[0.97] tracking-[-0.05em] sm:text-[4.55rem]">Volte a sorrir com <em className="text-gold">segurança.</em></h1><p className="mt-5 max-w-[500px] text-[1rem] leading-7 text-ink/65">Avaliação individual, planejamento digital e atendimento especializado para o seu caso.</p><div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><WhatsAppButton /><span className="flex items-center gap-2 text-xs text-ink/50"><ShieldCheck size={15} className="text-gold" /> Sem compromisso</span></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.69rem] font-bold uppercase tracking-[0.1em] text-ink/55"><span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Clínica física</span><span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Equipe especializada</span><span className="flex items-center gap-2"><Check size={14} className="text-gold" /> Planejamento digital</span></div></div><div className="hero-visual ppc-hero-visual animate-fade-in"><div className="hero-image-wrap"><img src="/manus-storage/clinica-fachada-1_83ebbb19.jpg" alt="Fachada da clínica Vita Sorriso Implantes em Curitiba" className="hero-image hero-image-facade" /><div className="hero-image-shade" /></div><div className="hero-note hero-note-top"><span className="note-icon"><Star size={14} fill="currentColor" /></span><span><strong>4,9</strong><small>no Google</small></span></div><div className="hero-note hero-note-bottom"><span className="note-icon note-icon-dark"><Check size={15} /></span><span><strong>+2.000</strong><small>sorrisos atendidos</small></span></div></div></div></section>

      <section className="ppc-proof"><div className="container grid gap-5 py-6 sm:grid-cols-3"><div><strong>Atendimento individual</strong><span>Seu caso é avaliado com cuidado.</span></div><div><strong>Localização central</strong><span>Rua José Loureiro, 268 — Curitiba.</span></div><div><strong>Nota 4,9 no Google</strong><span>Mais de 120 avaliações.</span></div></div></section>

      <section className="ppc-process" id="como-funciona"><div className="container"><div className="ppc-section-heading"><div className="eyebrow"><span className="eyebrow-line" /> Próximo passo</div><h2 className="section-title mt-4">Comece pela avaliação.</h2><p className="mt-4 max-w-[500px] leading-7 text-ink/60">Você entende as opções para o seu caso antes de decidir.</p></div><div className="ppc-steps mt-10 grid gap-7 md:grid-cols-3"><div><span>01</span><h3>Avaliação</h3><p>Conhecemos suas necessidades e examinamos seu caso.</p></div><div><span>02</span><h3>Planejamento</h3><p>Explicamos o tratamento, os prazos e o investimento.</p></div><div><span>03</span><h3>Acompanhamento</h3><p>Nossa equipe está com você em cada etapa.</p></div></div><div className="mt-9"><WhatsAppButton /></div></div></section>

      <section className="ppc-faq" id="duvidas"><div className="container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16"><div><div className="eyebrow"><span className="eyebrow-line" /> Dúvidas frequentes</div><h2 className="section-title mt-4">Informação clara para decidir.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="ppc-final" id="localizacao"><div className="container flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Vita Sorriso Implantes</div><h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">Seu novo sorriso começa com uma conversa.</h2><p className="mt-3 text-sm text-paper/60">Centro de Curitiba · Rua José Loureiro, 268</p></div><div className="flex flex-col items-start gap-3"><WhatsAppButton /><a href={mapsUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-paper/65 underline underline-offset-4"><MapPin size={13} className="mr-1 inline" /> Como chegar</a></div></div></section>
    </main>

    <footer className="border-t border-ink/10 bg-paper"><div className="container flex items-center justify-between gap-5 py-6"><Logo /><p className="text-right text-[0.68rem] leading-5 text-ink/45">Vita Sorriso Implantes · Curitiba/PR<br />Resultados e indicação variam conforme cada caso.</p></div></footer>
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp floating-whatsapp-labeled" aria-label="Falar com a Vita Sorriso pelo WhatsApp"><MessageCircle size={21} fill="currentColor" /><span>WhatsApp</span></a>
  </div>;
}
