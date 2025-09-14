"use client";

import React, { useState } from "react";

// Long‑scroll, single‑page site.
// Styling assumes Tailwind CSS is configured.

export default function MoonlightLanding() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Point this to your backend (Flask or Next.js API)
    const endpoint = "/api/contact";

    try {
      const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
      });
      if (res.ok) {
        setMessageSent(true);
        form.reset();
      } else {
        alert("Nepodařilo se odeslat formulář. Zkuste to prosím znovu.");
      }
    } catch (err) {
      alert("Chyba připojení. Zkuste to prosím později.");
    }
  };

  const gallery = [
    "/images/portfolio1.jpg",
    "/images/portfolio2.jpg",
    "/images/portfolio3.jpg",
    "/images/portfolio4.jpg",
    "/images/portfolio5.jpg",
    "/images/portfolio6.jpg",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Sticky nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">Tattoo by <span className="italic">[Her Name]</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">O mně</a>
            <a href="#styles" className="hover:opacity-70">Styly</a>
            <a href="#gallery" className="hover:opacity-70">Portfolio</a>
            <a href="#articles" className="hover:opacity-70">Články</a>
            <a href="#studio" className="hover:opacity-70">Studio & mapa</a>
            <a href="#contact" className="hover:opacity-70">Kontakt</a>
          </nav>
          <a href="#contact" className="md:inline-flex hidden px-4 py-2 rounded-xl bg-black text-white text-sm shadow">Rezervace</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-[90vh] flex items-end pt-20">
        <img
          src="/images/hero.jpg"
          alt="Tattoo artist working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Jemné linie, čistý styl,<br/> tetování na míru</h1>
          <p className="mt-4 max-w-xl text-white/90">Specializuji se na minimalistické a linework motivy. Každý návrh je originál vytvořený společně s Vámi.</p>
          <div className="mt-6 flex gap-4">
            <a href="#gallery" className="px-5 py-3 rounded-xl bg-white text-black shadow">Prohlédnout portfolio</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/60">Nezávazná poptávka</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src="/images/about.jpg" alt="Artist portrait" className="w-full rounded-2xl shadow"/>
          <div>
            <h2 className="text-3xl font-semibold">O mně</h2>
            <p className="mt-4 text-zinc-600">Jsem [Her Name], tatérka z [Město]. Mám ráda detail, jemnost a čisté linie. Pracuji s ohledem na hygienu a pohodlí klienta. Společně najdeme motiv, který Vám bude dělat radost celý život.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="bg-white rounded-xl p-4 shadow border">Linework</li>
              <li className="bg-white rounded-xl p-4 shadow border">Minimalismus</li>
              <li className="bg-white rounded-xl p-4 shadow border">Fineline</li>
              <li className="bg-white rounded-xl p-4 shadow border">Botanika</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Styles / Services */}
      <section id="styles" className="py-20 bg-white border-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">Styly & proces</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title: "Konzultace", text: "Krátká zpráva s nápadem, velikostí a umístěním – ozvu se s možnostmi a cenou."},
              {title: "Návrh", text: "Společně doladíme motiv. K finální podobě obvykle stačí 1–2 iterace."},
              {title: "Tetování", text: "Bezpečně, šetrně, s jasnými instrukcemi pro následnou péči."},
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border p-6 shadow bg-zinc-50">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-zinc-600 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">Portfolio</h2>
          <p className="mt-2 text-zinc-600">Výběr posledních prací. Více na Instagramu: <a className="underline" href="https://instagram.com/yourhandle" target="_blank">@yourhandle</a></p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt={`Tattoo ${i+1}`} className="w-full aspect-[4/5] object-cover rounded-2xl border shadow"/>
            ))}
          </div>
        </div>
      </section>

      {/* Articles teaser */}
      <section id="articles" className="py-20 bg-white border-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">Články & péče</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n) => (
              <a key={n} href={`/clanky/jak-pecovat-o-tetovani-${n}`} className="block rounded-2xl border p-6 bg-zinc-50 hover:shadow">
                <p className="text-sm text-zinc-500">Článek</p>
                <h3 className="mt-2 font-semibold">Jak pečovat o tetování (část {n})</h3>
                <p className="mt-2 text-zinc-600 text-sm">Tipy k hojení, co dělat první dny a jak si motiv udržet krásný dlouhodobě.</p>
                <span className="mt-3 inline-block text-sm underline">Číst dál</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & map */}
      <section id="studio" className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold">Studio</h2>
            <p className="mt-4 text-zinc-600">Najdete mě v <strong>[Adresa, Město]</strong>. Studio je po domluvě, prosím napište předem.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li><strong>Otevírací doba:</strong> dle objednávek</li>
              <li><strong>E‑mail:</strong> hello@yourdomain.cz</li>
              <li><strong>Telefon:</strong> +420 123 456 789 (SMS/WhatsApp)</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border shadow">
            <iframe
              title="Mapa studia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.642!2d14.4378!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1scs!2scz!4v0000000000"
              width="100%"
              height="360"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-semibold">Kontakt & rezervace</h2>
          <p className="mt-2 text-zinc-600">Napište mi o svůj motiv – ideálně velikost, umístění, rozpočet a termín.</p>

          {messageSent && (
            <div className="mt-4 rounded-xl border bg-green-50 text-green-700 p-4">
              Děkuji! Vaše zpráva byla odeslána.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="text-sm">Jméno</label>
              <input name="name" required className="mt-1 w-full rounded-xl border p-3" placeholder="Vaše jméno" />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm">E‑mail</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border p-3" placeholder="vas@email.cz" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm">Zpráva</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border p-3" placeholder="Popište motiv, velikost a umístění" />
            </div>
            {/* hCaptcha / reCAPTCHA placeholder */}
            <input type="hidden" name="captcha_token" value="" />
            <button type="submit" className="md:col-span-2 px-5 py-3 rounded-xl bg-black text-white shadow">Odeslat</button>
            <p className="md:col-span-2 text-xs text-zinc-500">Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení poptávky.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Tattoo by [Her Name]</p>
          <div className="flex gap-6">
            <a href="/obchodni-podminky" className="underline">Obchodní podmínky</a>
            <a href="/gdpr" className="underline">Zásady zpracování osobních údajů</a>
            <a href="https://instagram.com/yourhandle" target="_blank" className="underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
