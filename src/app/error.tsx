"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      backgroundColor: "#080705", padding: "0 24px", gap: 20,
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 300, color: "rgba(254,189,171,0.2)", lineHeight: 1 }}>!</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#FAF7F5" }}>
        Algo deu errado.
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(250,247,245,0.5)", maxWidth: 400 }}>
        Ocorreu um erro inesperado. Por favor, tente novamente.
      </p>
      <button onClick={reset} className="btn btn-primary" style={{ marginTop: 8 }}>
        Tentar novamente
      </button>
    </div>
  );
}
