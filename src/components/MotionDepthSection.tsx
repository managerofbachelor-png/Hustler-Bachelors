import { useRef, ReactNode, useState, useEffect, MouseEvent, TouchEvent } from 'react';

interface MotionDepthSectionProps {
  children: ReactNode;
  className?: string;
  depthIntensity?: 'normal' | 'deep' | 'subtle';
}

/**
 * 3D Scroll Depth Component (Pure Native React 19 + RAF)
 * As the user scrolls down, sections emerge forward in 3D ("getting inside the website").
 * As they scroll upward, sections smoothly recede ("coming back from behind to the top").
 */
export function MotionDepthSection({
  children,
  className = '',
  depthIntensity = 'normal',
}: MotionDepthSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState({
    scale: 0.94,
    translateZ: -40,
    rotateX: 3,
    opacity: 0.7,
  });

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress from 0 (just entering bottom) to 1 (passed center / top)
      const visibleRange = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1.2, currentPos / visibleRange));

      const intensityMult = depthIntensity === 'deep' ? 1.4 : depthIntensity === 'subtle' ? 0.6 : 1.0;

      // 3D parameters:
      // When entering: scale 0.93 -> 1.0 -> 1.03 (zoom forward into screen)
      // translateZ: -60px -> 0px -> 25px
      // rotateX: 3deg -> 0deg -> -2deg
      const scale = 0.94 + Math.min(progress, 1) * 0.06 * intensityMult + Math.max(0, progress - 0.7) * 0.02;
      const translateZ = (-50 + Math.min(progress, 1) * 50 + Math.max(0, progress - 0.7) * 20) * intensityMult;
      const rotateX = ((1 - Math.min(progress * 1.5, 1)) * 3.5 - Math.max(0, progress - 0.7) * 2.5) * intensityMult;
      const opacity = Math.min(1, 0.65 + progress * 0.45);

      setTransformStyle({
        scale,
        translateZ,
        rotateX,
        opacity,
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial measure

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [depthIntensity]);

  return (
    <div
      ref={containerRef}
      className="perspective-container w-full overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <div
        className={`preserve-3d transition-transform duration-150 ease-out will-change-transform ${className}`}
        style={{
          transform: `scale(${transformStyle.scale}) translateZ(${transformStyle.translateZ}px) rotateX(${transformStyle.rotateX}deg)`,
          opacity: transformStyle.opacity,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  glare?: boolean;
}

/**
 * 3D Interactive Tilt Card (Mouse & Touch Responsive)
 * Tilts dynamically toward the pointer with spotlight reflection.
 */
export function TiltCard({
  children,
  className = '',
  onClick,
  glare = true,
}: TiltCardProps) {
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handlePointerMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setTilt({ rotX, rotY });
    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.22,
      });
    }
  };

  const handlePointerLeave = () => {
    setTilt({ rotX: 0, rotY: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) translateZ(0px)`,
        transformStyle: 'preserve-3d',
        transition: tilt.rotX === 0 ? 'transform 0.4s ease-out' : 'transform 0.08s ease-out',
      }}
      className={`relative preserve-3d will-change-transform ${className}`}
    >
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 220px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.18), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
