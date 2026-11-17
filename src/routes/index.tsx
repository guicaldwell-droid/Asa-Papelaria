import { createFileRoute } from "@tanstack/react-router";

const WA = "https://wa.me/5561982511849";
const WA_QUOTE = `${WA}?text=${encodeURIComponent(
  "Olá! Gostaria de um orçamento.\nServiço:\nQuantidade de páginas/unidades:\nColorido ou preto e branco:\nFrente e verso? \nPrecisa de encadernação?",
)}`;
const MAPS =
  "https://www.google.com/maps/place/Papelaria+e+Copiadora+Asa/data=!4m2!3m1!1s0x935a3bb4effb7d8d:0x9139ee3ae999d1d2?hl=pt-BR";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Papelaria e Copiadora Asa — Cópias e impressão na Asa Norte" },
      { name: "description", content: "Papelaria, cópias, impressão e encadernação na CLN 207, Asa Norte, Brasília. Desde 1998. Peça orçamento pelo WhatsApp." },
      { property: "og:title", content: "Papelaria e Copiadora Asa — Asa Norte, Brasília" },
      { property: "og:description", content: "Materiais de papelaria, cópias, impressão e encadernação. Desde 1998." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cloud() {
  return (
    <svg viewBox="0 0 1600 260" aria-hidden="true">
      <ellipse cx="160" cy="170" rx="150" ry="50" /><ellipse cx="230" cy="130" rx="90" ry="70" /><ellipse cx="120" cy="140" rx="70" ry="50" />
      <ellipse cx="720" cy="120" rx="190" ry="45" /><ellipse cx="780" cy="85" rx="100" ry="60" /><ellipse cx="660" cy="95" rx="70" ry="45" />
      <ellipse cx="1300" cy="190" rx="170" ry="48" /><ellipse cx="1360" cy="150" rx="95" ry="65" /><ellipse cx="1250" cy="160" rx="60" ry="42" />
    </svg>
  );
}

function Sky() {
  return (
    <div className="sky-bg" aria-hidden="true">
      {["cloud-far", "cloud-mid", "cloud-near"].map((c) => (
        <div key={c} className={`cloud-layer ${c}`}><Cloud /><Cloud /></div>
      ))}
    </div>
  );
}

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-primary" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const I = {
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  pencil: "M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3",
  copy: "M8 8h11v13H8zM5 16V3h11",
  print: "M7 9V3h10v6M7 18H4v-7h16v7h-3M7 14h10v7H7z",
  book: "M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11M9 4v10",
};

const services = [
  { t: "Material de papelaria", d: "Itens para estudos, escritório e o dia a dia.", i: I.pencil },
  { t: "Cópias e xerox", d: "Cópias de documentos, apostilas e trabalhos.", i: I.copy },
  { t: "Impressão", d: "Em preto e branco ou colorida.", i: I.print },
  { t: "Encadernação", d: "Para trabalhos, apostilas e documentos.", i: I.book },
];
const reviews = [
  "Preço ótimo em relação às outras do Plano Piloto.",
  "As cópias são de excelente qualidade e um dos melhores preços da Asa Norte.",
  "Kleison foi super atencioso e eficiente!",
];

const btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg`;
const btnGhost = `${btn} border border-border bg-card text-primary hover:bg-secondary`;

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Sky />
      <main className="relative z-10 px-3 py-6 sm:px-6 sm:py-14">
        <div className="panel panel-enter mx-auto max-w-[1160px] rounded-[20px] px-5 py-5 sm:rounded-[28px] sm:px-12 sm:py-8">
          <header className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <a href="#topo" className="leading-tight">
              <span className="block font-display text-lg font-semibold text-primary sm:text-xl">Papelaria e Copiadora Asa</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Desde 1998</span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium" aria-label="Principal">
              <a className="hidden hover:text-primary md:inline" href="#servicos">Serviços</a>
              <a className="hidden hover:text-primary md:inline" href="#avaliacoes">Avaliações</a>
              <a className="hidden hover:text-primary md:inline" href="#como-chegar">Como chegar</a>
              <a className={`${btnPrimary} min-h-11 px-5`} href={WA} {...ext}>WhatsApp</a>
            </nav>
          </header>

          <section id="topo" className="grid gap-10 py-14 sm:py-20 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-7xl">
              Papelaria, cópias e impressão na <span className="highlight">Asa Norte</span>
            </h1>
            <div>
              <p className="text-lg text-muted-foreground">Materiais para seus estudos e trabalho, além de serviços de cópia e impressão.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <a className={btnPrimary} href={WA_QUOTE} {...ext}>Pedir orçamento no WhatsApp</a>
                <a className={btnGhost} href={MAPS} {...ext}>Como chegar</a>
              </div>
            </div>
          </section>

          <section aria-label="Informações" className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            <a href={MAPS} {...ext} className="flex gap-3 bg-muted p-5 hover:bg-secondary">
              <Icon d={I.pin} /><span className="text-sm"><b className="block text-primary">Endereço</b>CLN 207, Bloco D — Asa Norte, Brasília–DF</span>
            </a>
            <div className="flex gap-3 bg-muted p-5">
              <Icon d={I.clock} /><span className="text-sm"><b className="block text-primary">Horário</b>Seg–Sex 08:00–18:00 · Sáb 08:00–13:00</span>
            </div>
            <div className="flex gap-3 bg-muted p-5">
              <Icon d={I.phone} /><span className="text-sm"><b className="block text-primary">Contato</b>
                Fixo: <a className="underline" href="tel:+556133492919">(61) 3349-2919</a><br />
                WhatsApp: <a className="underline" href={WA} {...ext}>(61) 98251-1849</a></span>
            </div>
          </section>

          <section id="servicos" className="scroll-mt-6 py-16 sm:py-24">
            <h2 className="font-display text-3xl text-primary sm:text-4xl">O que você encontra por aqui</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, n) => (
                <article key={s.t} className="group rounded-2xl border border-border p-6 transition hover:-translate-y-1 hover:border-sky-deep">
                  <div className="flex items-center justify-between"><Icon d={s.i} /><span className="font-display text-sm text-muted-foreground">0{n + 1}</span></div>
                  <h3 className="mt-8 font-semibold text-primary">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl bg-secondary p-7 sm:p-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-primary sm:text-4xl">Preços e orçamento</h2>
              <p className="mt-4 text-muted-foreground">O valor depende do serviço, da quantidade e das especificações. Mande sua cotação pelo WhatsApp e confirme o valor antes de autorizar o serviço.</p>
              <a className={`${btnPrimary} mt-7`} href={WA_QUOTE} {...ext}>Pedir orçamento no WhatsApp</a>
            </div>
            <div className="rounded-2xl bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Na mensagem, informe</p>
              <ul className="mt-4 space-y-3 text-sm">
                {["Qual serviço você precisa", "Quantidade de páginas ou unidades", "Colorido ou preto e branco", "Frente e verso ou só frente", "Se precisa de encadernação"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun" />{x}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="avaliacoes" className="scroll-mt-6 py-16 sm:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl text-primary sm:text-4xl">Avaliações</h2>
                <p className="mt-2 text-muted-foreground">
                  <span className="font-display text-2xl text-primary">4,5</span>/5 · 766 avaliações no Google Maps
                  <span className="block text-xs">Dados observados em 17/11/2026.</span>
                </p>
              </div>
              <a className={btnGhost} href={MAPS} {...ext}>Ver avaliações no Google Maps</a>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r} className="flex flex-col justify-between rounded-2xl border border-border p-6">
                  <blockquote className="font-display text-lg leading-snug">“{r}”</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Avaliação no Google Maps</span><span className="text-sun" aria-label="5 estrelas">★★★★★</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="como-chegar" className="scroll-mt-6 grid gap-8 border-t border-border pt-16 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-primary sm:text-4xl">Como chegar</h2>
              <address className="mt-4 not-italic text-muted-foreground">Asa Norte Comércio Local Norte 207, Bloco D<br />Asa Norte, Brasília–DF · CEP 70852-540</address>
              <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
                <dt className="font-semibold text-primary">Seg a Sex</dt><dd>08:00–18:00</dd>
                <dt className="font-semibold text-primary">Sábado</dt><dd>08:00–13:00</dd>
                <dt className="font-semibold text-primary">Domingo</dt><dd>Fechado</dd>
              </dl>
              <a className={`${btnPrimary} mt-7`} href={MAPS} {...ext}>Abrir rota no Google Maps</a>
            </div>
            <iframe title="Mapa: Papelaria e Copiadora Asa" loading="lazy" className="h-72 w-full rounded-2xl border border-border md:h-full"
              src="https://www.google.com/maps?q=Papelaria+e+Copiadora+Asa+CLN+207+Bloco+D+Brasilia&output=embed" />
          </section>

          <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <span>© Papelaria e Copiadora Asa · Desde 1998</span>
            <span>CLN 207, Bloco D — Asa Norte, Brasília–DF</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
