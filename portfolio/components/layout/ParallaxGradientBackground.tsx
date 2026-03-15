export function ParallaxGradientBackground() {
  return (
    <>
      <style>{`
        .grad-dark  { display: block; }
        .grad-light { display: none; }
        .light .grad-light { display: block; }
        .light .grad-dark  { display: none; }
      `}</style>

      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* ── Dark mode layers ─────────────────────────────────────── */}
        <div className="grad-dark absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 120% 75% at 50% 110%, rgba(96,155,255,0.55) 0%, rgba(96,155,255,0.15) 45%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 85% 90%, rgba(251,191,36,0.28) 0%, rgba(251,191,36,0.08) 45%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 65% at 10% 80%, rgba(96,155,255,0.35) 0%, rgba(96,155,255,0.10) 45%, transparent 65%)',
            }}
          />
        </div>

        {/* ── Light mode layers ────────────────────────────────────── */}
        <div className="grad-light absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 120% 75% at 50% 110%, rgba(30,60,140,0.30) 0%, rgba(30,60,140,0.08) 45%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 85% 90%, rgba(217,119,6,0.20) 0%, rgba(217,119,6,0.06) 45%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 65% at 10% 80%, rgba(30,60,140,0.22) 0%, rgba(30,60,140,0.06) 45%, transparent 65%)',
            }}
          />
        </div>
      </div>
    </>
  );
}
