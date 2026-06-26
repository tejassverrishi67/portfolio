import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleUniverse: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Detect mobile for optimization
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Configurations from Section 6
    const CONFIG = {
      PARTICLE_COUNT: isMobile ? 60 : 180,
      PARTICLE_SIZE: isMobile ? 0.8 : 1.2,
      COLORS: [
        new THREE.Color(0x00d4ff), // Neon blue
        new THREE.Color(0x7c3aed), // Neon violet
        new THREE.Color(0xa855f7), // Neon purple
        new THREE.Color(0xf0abfc), // Neon pink
      ],
      CONNECTION_MAX_DISTANCE: isMobile ? 80 : 110,
      CONNECTION_OPACITY_FACTOR: 0.35,
      SPEED_FACTOR: 0.2,
      MOUSE_REPEL_RADIUS: 100,
      MOUSE_REPEL_FORCE: 0.45,
    };

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Setup Particles Data Structure
    const particlesData: Array<{
      position: THREE.Vector3;
      basePosition: THREE.Vector3;
      velocity: THREE.Vector3;
      color: THREE.Color;
      timeOffset: number;
      speed: number;
    }> = [];

    const positions = new Float32Array(CONFIG.PARTICLE_COUNT * 3);
    const colors = new Float32Array(CONFIG.PARTICLE_COUNT * 3);

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 500;
      const z = (Math.random() - 0.5) * 300;

      const position = new THREE.Vector3(x, y, z);
      const color = CONFIG.COLORS[Math.floor(Math.random() * CONFIG.COLORS.length)].clone();

      particlesData.push({
        position,
        basePosition: position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR,
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR,
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR
        ),
        color,
        timeOffset: Math.random() * 100,
        speed: 0.5 + Math.random() * 0.5
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    // Create Points Geometry
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create custom soft circular particle textures using HTML canvas
    const createCircleTexture = () => {
      const size = 32;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: CONFIG.PARTICLE_SIZE,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // 3. Setup Connection Lines
    // Maximum possible connections is N * (N-1) / 2, each has 2 points (X,Y,Z * 2 = 6 floats)
    const maxLineCount = CONFIG.PARTICLE_COUNT * 8; 
    const linePositions = new Float32Array(maxLineCount * 2 * 3);
    const lineColors = new Float32Array(maxLineCount * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // 4. Mouse Tracking & Raycasting
    const mouse = new THREE.Vector2(-9999, -9999);
    const targetMouse = new THREE.Vector2(-9999, -9999);
    const mouse3D = new THREE.Vector3();

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    const handleMouseLeave = () => {
      targetMouse.set(-9999, -9999);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Konami code interaction states (Section 19)
    let isKonamiActive = false;
    
    const handleKonamiTrigger = () => {
      isKonamiActive = true;
      particlesData.forEach((p) => {
        p.velocity.multiplyScalar(15);
      });
    };

    const handleKonamiReset = () => {
      isKonamiActive = false;
      particlesData.forEach((p) => {
        p.velocity.set(
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR,
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR,
          (Math.random() - 0.5) * CONFIG.SPEED_FACTOR
        );
        p.position.copy(p.basePosition);
      });
    };

    window.addEventListener('konami-trigger', handleKonamiTrigger as EventListener);
    window.addEventListener('konami-reset', handleKonamiReset as EventListener);

    // 5. Scroll Interaction variables
    let scrollY = window.scrollY;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    const handleScroll = () => {
      scrollY = window.scrollY;
      targetRotationX = scrollY * 0.0006;
      targetRotationY = scrollY * 0.0004;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Animation Loop
    let time = 0;
    let animFrameId: number;

    const animate = () => {
      time += 0.01;
      
      // Interpolate mouse coordinates
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      // Project mouse coordinates to 3D space at Z depth
      if (mouse.x > -100) {
        // Map normalized coordinates back to 3D world space
        const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        mouse3D.copy(camera.position).add(dir.multiplyScalar(distance));
      } else {
        mouse3D.set(-9999, -9999, -9999);
      }

      // Smooth scroll rotation
      particlePoints.rotation.x += (targetRotationX - particlePoints.rotation.x) * 0.05;
      particlePoints.rotation.y += (targetRotationY - particlePoints.rotation.y) * 0.05;
      connectionLines.rotation.copy(particlePoints.rotation);

      const positionsAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute;
      const colorsAttr = particleGeometry.getAttribute('color') as THREE.BufferAttribute;
      
      let lineIndex = 0;
      const linePosAttr = lineGeometry.getAttribute('position') as THREE.BufferAttribute;
      const lineColorAttr = lineGeometry.getAttribute('color') as THREE.BufferAttribute;

      // Update particle positions
      for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const data = particlesData[i];

        // 1. Lissajous drift animation + velocity
        const driftX = Math.sin(time * data.speed + data.timeOffset) * 0.1;
        const driftY = Math.cos(time * data.speed * 0.8 + data.timeOffset) * 0.1;
        
        data.position.x += data.velocity.x + driftX;
        data.position.y += data.velocity.y + driftY;
        data.position.z += data.velocity.z;

        // Boundary checks (warp around bounding box)
        const boxSize = 250;
        if (Math.abs(data.position.x) > boxSize) data.position.x = -Math.sign(data.position.x) * boxSize;
        if (Math.abs(data.position.y) > boxSize) data.position.y = -Math.sign(data.position.y) * boxSize;
        if (Math.abs(data.position.z) > 150) data.position.z = -Math.sign(data.position.z) * 150;

        // 2. Mouse Repel Logic
        if (mouse3D.x > -9000) {
          // Adjust for particle container rotation to align mouse repel correctly
          const pLocal = data.position.clone().applyEuler(particlePoints.rotation);
          const dist = pLocal.distanceTo(mouse3D);

          if (dist < CONFIG.MOUSE_REPEL_RADIUS) {
            const forceDir = pLocal.clone().sub(mouse3D).normalize();
            // Calculate force scaling with distance
            const force = (1.0 - dist / CONFIG.MOUSE_REPEL_RADIUS) * CONFIG.MOUSE_REPEL_FORCE;
            const forceLocal = forceDir.multiplyScalar(force).applyQuaternion(particlePoints.quaternion.clone().invert());
            
            data.position.add(forceLocal);
          }
        }


        // Color shifting subtly (HSL rotation) or override with red for Konami
        let shiftingColor = data.color.clone();
        if (isKonamiActive) {
          shiftingColor.setRGB(1.0, 0.1, 0.1); // Bright red particles
        } else {
          const hueShift = (time * 0.05 + data.timeOffset * 0.01) % 1;
          const hsl = { h: 0, s: 0, l: 0 };
          shiftingColor.getHSL(hsl);
          shiftingColor.setHSL((hsl.h + hueShift * 0.1) % 1, hsl.s, hsl.l);
        }

        // Update buffers
        positionsAttr.setXYZ(i, data.position.x, data.position.y, data.position.z);
        colorsAttr.setXYZ(i, shiftingColor.r, shiftingColor.g, shiftingColor.b);
      }

      // Generate Connection Lines
      for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        const p1 = particlesData[i];

        for (let j = i + 1; j < CONFIG.PARTICLE_COUNT; j++) {
          const p2 = particlesData[j];
          const dist = p1.position.distanceTo(p2.position);
          const maxDist = isKonamiActive ? CONFIG.CONNECTION_MAX_DISTANCE * 1.5 : CONFIG.CONNECTION_MAX_DISTANCE;

          if (dist < maxDist && lineIndex < maxLineCount) {
            const alpha = (1.0 - dist / maxDist) * CONFIG.CONNECTION_OPACITY_FACTOR;
            
            // Pulse connection opacity gently
            const pulsingAlpha = alpha * (0.7 + Math.sin(time * 2 + p1.timeOffset) * 0.3);

            // Line endpoints positions
            linePosAttr.setXYZ(lineIndex * 2, p1.position.x, p1.position.y, p1.position.z);
            linePosAttr.setXYZ(lineIndex * 2 + 1, p2.position.x, p2.position.y, p2.position.z);

            // Easing line color (red for Konami)
            const c1 = p1.color.clone();
            const c2 = p2.color.clone();
            if (isKonamiActive) {
              c1.setRGB(1.0, 0.0, 0.0).multiplyScalar(pulsingAlpha);
              c2.setRGB(1.0, 0.0, 0.0).multiplyScalar(pulsingAlpha);
            } else {
              c1.multiplyScalar(pulsingAlpha);
              c2.multiplyScalar(pulsingAlpha);
            }

            lineColorAttr.setXYZ(lineIndex * 2, c1.r, c1.g, c1.b);
            lineColorAttr.setXYZ(lineIndex * 2 + 1, c2.r, c2.g, c2.b);

            lineIndex++;
          }
        }
      }


      // Set index attributes count and mark updates
      lineGeometry.setDrawRange(0, lineIndex * 2);
      
      positionsAttr.needsUpdate = true;
      colorsAttr.needsUpdate = true;
      linePosAttr.needsUpdate = true;
      lineColorAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    // 7. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 8. Tab visibility throttle (Performance Trick #1)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrameId);
      } else {
        cancelAnimationFrame(animFrameId);
        animFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('konami-trigger', handleKonamiTrigger as EventListener);
      window.removeEventListener('konami-reset', handleKonamiReset as EventListener);

      
      // Dispose materials/geometry to prevent leaks
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 'var(--z-background)', background: 'transparent' }}
    />
  );
};
