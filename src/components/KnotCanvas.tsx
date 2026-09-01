import { useEffect, useRef } from 'react';

/**
 * Ambient hero graphic: a slowly rotating 3-D torus-knot curve, drawn on a
 * canvas. Nods to the 3D-graphics / sine-wave sketches in the portfolio.
 * Honours prefers-reduced-motion (renders a single static frame).
 */
export default function KnotCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const N = 420;
    const P = 2;
    const Q = 3;
    const curve: [number, number, number][] = [];
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * Math.PI * 2;
      const r = Math.cos(Q * t) + 2.4;
      curve.push([r * Math.cos(P * t), r * Math.sin(P * t), -Math.sin(Q * t) * 1.15]);
    }

    const readColors = () => {
      const cs = getComputedStyle(document.body);
      return {
        accent: cs.getPropertyValue('--accent').trim() || '#ff4d84',
        line: cs.getPropertyValue('--line-strong').trim() || '#354056',
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (angle: number) => {
      const c = readColors();
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) / 7.4;
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const tilt = -0.5;
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      const proj: [number, number, number][] = curve.map(([x, y, z]) => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        return [cx + x1 * scale, cy + y2 * scale, z2];
      });

      for (let j = 1; j < proj.length; j++) {
        const a = proj[j - 1];
        const b = proj[j];
        let depth = (b[2] + 3.6) / 7.2;
        depth = Math.max(0, Math.min(1, depth));
        ctx.strokeStyle = depth > 0.5 ? c.accent : c.line;
        ctx.globalAlpha = 0.28 + depth * 0.62;
        ctx.lineWidth = 0.7 + depth * 2.1;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    resize();

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let start = performance.now();
    let running = true;

    const loop = (now: number) => {
      if (!running) return;
      draw(0.35 + (now - start) * 0.00019);
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (reduce) draw(0.6);
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduce) {
        start = performance.now() - 3000;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduce) {
      draw(0.6);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="block h-full w-full max-h-[540px]" />;
}
