'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export function CityscapeBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -100]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-0 right-0"
      >
        {/* Light mode: black buildings on white — multiply blends white away */}
        <div
          className="cityscape-light"
          style={{
            backgroundImage: 'url(/cityscape.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '70vh',
            mixBlendMode: 'multiply',
            opacity: 0.15,
          }}
        />

        {/* Dark mode: inverted (white buildings) — screen blends black away */}
        <div
          className="cityscape-dark"
          style={{
            backgroundImage: 'url(/cityscape.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '70vh',
            filter: 'invert(1)',
            mixBlendMode: 'screen',
            opacity: 0.12,
          }}
        />
      </motion.div>

      {/* Fades */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
