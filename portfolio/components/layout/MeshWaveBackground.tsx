'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const ASPECT = {
  back:  560 / 1440,
  mid:   460 / 1440,
  front: 360 / 1440,
};

interface WaveLayerProps {
  scrollY?: MotionValue<number>;
  path: string;
  viewBoxHeight: number;
  heightVw: number;
  maxHeight: number;
  minVh?: number;
  travel?: number;
  darkColor: string;
  lightColor: string;
}

function WaveLayer({ scrollY, path, viewBoxHeight, heightVw, maxHeight, minVh, travel, darkColor, lightColor }: WaveLayerProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const y = scrollY && travel ? useTransform(scrollY, [0, 4500], [0, -travel]) : undefined;

  const height = minVh
    ? `min(max(${heightVw}vw, ${minVh}vh), ${maxHeight}px)`
    : `min(${heightVw}vw, ${maxHeight}px)`;

  const svg = (
    <svg
      viewBox={`0 0 1440 ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: '100%', height, display: 'block' }}
    >
      <path d={path} fill={darkColor} className="wave-dark" />
      <path d={path} fill={lightColor} className="wave-light" />
    </svg>
  );

  return y ? (
    <motion.div style={{ y, position: 'absolute', bottom: 0, left: 0, right: 0 }}>{svg}</motion.div>
  ) : (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>{svg}</div>
  );
}

export function MeshWaveBackground() {
  const { scrollY } = useScroll();

  return (
    <>
      <style>{`
        .wave-light { display: none; }
        .wave-dark  { display: block; }
        .light .wave-light { display: block; }
        .light .wave-dark  { display: none; }
      `}</style>

      <div
        className="fixed inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden"
        style={{ height: `min(max(${ASPECT.back * 100}vw, 58vh), 800px)` }}
        aria-hidden="true"
      >
        {/* Back layer — parallax, slowest */}
        <WaveLayer
          scrollY={scrollY}
          viewBoxHeight={800}
          heightVw={ASPECT.back * 100}
          maxHeight={800}
          minVh={58}
          travel={40}
          path="M0,400 C240,220 480,580 720,400 C960,220 1200,560 1440,400 L1440,800 L0,800 Z"
          darkColor="rgba(96,155,255,0.06)"
          lightColor="rgba(30,60,140,0.04)"
        />

        {/* Mid layer — parallax */}
        <WaveLayer
          scrollY={scrollY}
          viewBoxHeight={680}
          heightVw={ASPECT.mid * 100}
          maxHeight={680}
          minVh={48}
          travel={75}
          path="M0,420 C200,260 440,580 680,410 C900,250 1160,560 1440,410 L1440,680 L0,680 Z"
          darkColor="rgba(96,155,255,0.09)"
          lightColor="rgba(30,60,140,0.06)"
        />

        {/* Front layer — static */}
        <WaveLayer
          viewBoxHeight={540}
          heightVw={ASPECT.front * 100}
          maxHeight={540}
          minVh={38}
          path="M0,340 C180,190 360,490 560,320 C760,160 980,460 1200,300 C1320,220 1400,380 1440,320 L1440,540 L0,540 Z"
          darkColor="rgba(96,155,255,0.14)"
          lightColor="rgba(30,60,140,0.08)"
        />
      </div>
    </>
  );
}
