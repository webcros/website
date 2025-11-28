import { useEffect, useRef, useState } from 'react';

const BUBBLE_CONFIG = {
  baseDimension: 4,
  baseLifeSpan: 60,
  velocityX: 0.1,
  velocityY: 0.4,
  fillColor: '#f58e18',
  strokeColor: '#f58e18'
};

class Particle {
  constructor(x, y) {
    this.lifeSpan = Math.floor(Math.random() * (BUBBLE_CONFIG.baseLifeSpan / 2) + (BUBBLE_CONFIG.baseLifeSpan / 2));
    this.initialLifeSpan = this.lifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * BUBBLE_CONFIG.velocityX,
      y: -BUBBLE_CONFIG.velocityY + Math.random() * -1
    };
    this.position = { x, y };
  }

  update(context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
    
    context.fillStyle = BUBBLE_CONFIG.fillColor;
    context.strokeStyle = BUBBLE_CONFIG.strokeColor;
    context.beginPath();
    context.arc(
      this.position.x - (BUBBLE_CONFIG.baseDimension / 2) * scale,
      this.position.y - BUBBLE_CONFIG.baseDimension / 2,
      BUBBLE_CONFIG.baseDimension * scale,
      0,
      2 * Math.PI
    );
    context.stroke();
    context.fill();
    context.closePath();
  }
}

export default function BubbleCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addParticle = (x, y) => {
      particlesRef.current.push(new Particle(x, y));
    };

    const updateParticles = () => {
      if (particlesRef.current.length === 0) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particlesRef.current.forEach(particle => particle.update(context));

      // Remove dead particles
      particlesRef.current = particlesRef.current.filter(particle => particle.lifeSpan >= 0);
    };

    const animate = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    let lastSpawnTime = 0;
    const spawnInterval = 50; // Minimum time (ms) between particle spawns
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastSpawnTime > spawnInterval) {
        cursorRef.current = { x: e.clientX, y: e.clientY };
        addParticle(e.clientX, e.clientY);
        lastSpawnTime = now;
      }
    };
    
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        Array.from(e.touches).forEach(touch => {
          addParticle(touch.clientX, touch.clientY);
        });
      }
    };

    // Only initialize if reduced motion is not preferred
    if (!prefersReducedMotion) {
      updateCanvasSize();
      animate();

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchstart', handleTouchMove, { passive: true });
      window.addEventListener('resize', updateCanvasSize);
    }

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [prefersReducedMotion]);

  // Listen for changes in reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreferenceChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
}