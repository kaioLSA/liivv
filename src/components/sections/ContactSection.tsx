"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Phone, AtSign } from "lucide-react";
import { contact } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header > *", { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".contact-header", start: "top 85%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo([".contact-form", ".contact-info"], { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.15,
        scrollTrigger: { trigger: ".contact-form", start: "top 82%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Me chamo ${form.name}.\n${form.message}\n\nContato: ${form.phone}`);
    window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`, "_blank");
  };

  const infos = [
    { icon: MapPin, label: "Endereço", value: contact.address, sub: contact.addressDetail },
    { icon: Clock, label: "Horários", value: contact.hours },
    { icon: Phone, label: "WhatsApp", value: contact.phone },
    { icon: AtSign, label: "Instagram", value: contact.instagram },
  ];

  return (
    <section id="contato" ref={ref} className="section" style={{ backgroundColor: "#080705" }}>
      <div className="wrap">
        {/* Header */}
        <div className="contact-header" style={{ textAlign: "center", maxWidth: 560, marginInline: "auto", marginBottom: 72 }}>
          <div className="badge" style={{ marginBottom: 20 }}>Fale conosco</div>
          <h2 className="t-heading" style={{ color: "#FAF7F5" }}>
            Agende sua visita.{" "}
            <span className="text-shine">Estamos esperando.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(2rem,4vw,4rem)", alignItems: "start" }}>

          {/* Form */}
          <form className="contact-form" onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label className="t-label" style={{ color: "rgba(250,247,245,0.4)", display: "block", marginBottom: 8 }}>Nome *</label>
              <input required type="text" placeholder="Seu nome completo" className="input-field"
                value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div>
              <label className="t-label" style={{ color: "rgba(250,247,245,0.4)", display: "block", marginBottom: 8 }}>WhatsApp</label>
              <input type="tel" placeholder="(11) 9 9999-9999" className="input-field"
                value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
            </div>
            <div>
              <label className="t-label" style={{ color: "rgba(250,247,245,0.4)", display: "block", marginBottom: 8 }}>Mensagem</label>
              <textarea rows={5} placeholder="Qual serviço você deseja? Qual horário prefere?" className="input-field"
                value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 4, justifyContent: "center" }}>
              Enviar via WhatsApp
            </button>
            <p style={{ fontSize: "0.75rem", color: "rgba(250,247,245,0.3)", textAlign: "center", fontFamily: "var(--font-body)" }}>
              Você será redirecionada para o WhatsApp.
            </p>
          </form>

          {/* Info */}
          <div className="contact-info" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {infos.map((item) => (
              <div key={item.label} className="card" style={{ padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "rgba(254,189,171,0.07)", border: "1px solid rgba(254,189,171,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#FEBDAB",
                }}>
                  <item.icon size={17} />
                </div>
                <div>
                  <div className="t-label" style={{ color: "rgba(250,247,245,0.35)", marginBottom: 4 }}>{item.label}</div>
                  <div className="t-small" style={{ color: "#FAF7F5", fontWeight: 500 }}>{item.value}</div>
                  {item.sub && <div style={{ fontSize: "0.78rem", color: "rgba(250,247,245,0.45)", marginTop: 2 }}>{item.sub}</div>}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="card" style={{ height: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <MapPin size={24} style={{ color: "rgba(254,189,171,0.4)" }} />
              <p style={{ fontSize: "0.82rem", color: "rgba(250,247,245,0.4)", textAlign: "center", fontFamily: "var(--font-body)" }}>
                Complexo Rochavera — São Paulo, SP
              </p>
              <a
                href="https://maps.google.com/?q=Complexo+Rochavera+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.78rem", color: "#FEBDAB", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
