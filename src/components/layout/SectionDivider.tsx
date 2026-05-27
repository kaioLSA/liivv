"use client";

interface SectionDividerProps {
  variant: "dark-to-light" | "light-to-dark";
}

export function SectionDivider({ variant }: SectionDividerProps) {
  const from = variant === "dark-to-light" ? "#080705" : "#FFFFFF";
  const to   = variant === "dark-to-light" ? "#FFFFFF" : "#080705";

  return (
    <div
      className="section-divider-wrap"
      style={{
        position: "relative",
        height: 64,
        backgroundColor: from,
        overflow: "hidden",
        lineHeight: 0,
        marginTop: -1,
        marginBottom: -1,
      }}
    >
      <svg
        viewBox="0 0 2880 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "200%",
          height: "100%",
          fill: to,
          animation: "section-wave 14s linear infinite",
        }}
      >
        {/* Two slightly offset paths layered for depth */}
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28
             C1680,56 1920,0 2160,28 C2400,56 2640,0 2880,28
             L2880,64 L0,64 Z"
          style={{
            fill: to,
            opacity: variant === "dark-to-light" ? 0.35 : 0.25,
          }}
        />
        <path
          d="M0,40 C360,8 720,56 1080,32 C1320,16 1560,52 1800,36
             C2040,20 2400,60 2880,40 L2880,64 L0,64 Z"
          style={{ fill: to }}
        />
      </svg>
      <style>{`
        @keyframes section-wave {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
