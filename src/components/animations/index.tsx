import React, { useEffect, useRef, useState, useMemo } from "react";

const CircularPathAnimation: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const centerX = 600;
  const centerY = 800;

  // Memoized radii to prevent re-creation on every render
  const radii = useMemo(() => [300, 380, 460, 540, 620, 700], []);

  const speed = 0.002; // Speed of animation

  // Pre-calculate angle offsets
  const angleOffsets = useMemo(() => {
    const offsets = [];
    for (let i = 0; i < radii.length; i++) {
      for (let j = 0; j < 3; j++) {
        offsets.push({
          pathIndex: i,
          dotOffset: j * 2,
          angle: i * (Math.PI / 3) + j * 2 * (Math.PI / 3),
          isBorderedDot: j !== 0,
        });
      }
    }
    return offsets;
  }, [radii]);

  // Static circle paths
  const paths = useMemo(() => {
    return radii.map((radius, index) => (
      <circle
        key={`path-${index}`}
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke="rgb(249, 249, 249)"
        strokeWidth="1"
        strokeDasharray={index % 2 === 0 ? "none" : "5,8"}
      />
    ));
  }, [radii]);

  // Animate using requestAnimationFrame
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;

      if (deltaTime > 16) {
        setAngle((prevAngle) => (prevAngle + speed) % (2 * Math.PI));
        lastTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationRef, lastTimeRef]);

  // Compute dot positions dynamically
  const dots = useMemo(() => {
    return angleOffsets.map(
      ({ pathIndex, dotOffset, angle: offsetAngle, isBorderedDot }) => {
        const radius = radii[pathIndex];
        const currentAngle = angle + offsetAngle;
        const x = centerX + radius * Math.cos(currentAngle);
        const y = centerY + radius * Math.sin(currentAngle);
        const key = `dot-${pathIndex}-${dotOffset}`;

        return isBorderedDot ? (
          <g key={key}>
            <circle
              cx={x}
              cy={y}
              r="6"
              fill="none"
              stroke="#f2f3f5df"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r="3" fill="#f2f3f5df" />
          </g>
        ) : (
          <circle key={key} cx={x} cy={y} r="4" fill="#f2f3f5df" />
        );
      }
    );
  }, [angle, angleOffsets, radii]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 1600"
        preserveAspectRatio="xMidYMin slice"
        className="absolute top-0 left-0 w-full h-full opacity-30"
      >
        <defs>
          <radialGradient
            id="bg-gradient"
            cx="50%"
            cy="60%"
            r="70%"
            fx="50%"
            fy="60%"
          >
            <stop offset="0%" stopColor="rgba(123, 21, 248, 0)" />
            <stop offset="100%" stopColor="rgba(100, 149, 237, 0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-gradient)" />

        {/* Static paths */}
        {paths}

        {/* Animated dots */}
        {dots}
      </svg>
    </div>
  );
};

export default CircularPathAnimation;
