import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import PaperSection from '@/components/ui/PaperSection';

const Interactive3DPainting = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f8f9fa');
    gradient.addColorStop(0.5, '#f5ede0');
    gradient.addColorStop(1, '#e8dfd0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const bgTexture = new THREE.CanvasTexture(canvas);
    scene.background = bgTexture;

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(5, 5, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xb8d4ff, 0.4);
    fillLight.position.set(-3, 3, 2);
    scene.add(fillLight);

    const rimLight = new THREE.SpotLight(0xffe0f0, 0.8);
    rimLight.position.set(-2, 2, -2);
    rimLight.angle = Math.PI / 4;
    scene.add(rimLight);

    const accentLight1 = new THREE.PointLight(0xe95793, 0.8, 10);
    accentLight1.position.set(-4, 2, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6d28d9, 0.6, 10);
    accentLight2.position.set(4, 2, 3);
    scene.add(accentLight2);

    const artworkTexture = createArtworkTexture();

    const canvasGroup = new THREE.Group();

    const frameThickness = 0.15;
    const frameDepth = 0.08;
    const canvasWidth = 3.5;
    const canvasHeight = 4.5;

    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x3d2817,
      roughness: 0.7,
      metalness: 0.1
    });

    const topFrame = new THREE.Mesh(
      new THREE.BoxGeometry(canvasWidth + frameThickness * 2, frameThickness, frameDepth),
      frameMaterial
    );
    topFrame.position.set(0, canvasHeight / 2 + frameThickness / 2, 0);
    topFrame.castShadow = true;
    canvasGroup.add(topFrame);

    const bottomFrame = new THREE.Mesh(
      new THREE.BoxGeometry(canvasWidth + frameThickness * 2, frameThickness, frameDepth),
      frameMaterial
    );
    bottomFrame.position.set(0, -canvasHeight / 2 - frameThickness / 2, 0);
    bottomFrame.castShadow = true;
    canvasGroup.add(bottomFrame);

    const leftFrame = new THREE.Mesh(
      new THREE.BoxGeometry(frameThickness, canvasHeight, frameDepth),
      frameMaterial
    );
    leftFrame.position.set(-canvasWidth / 2 - frameThickness / 2, 0, 0);
    leftFrame.castShadow = true;
    canvasGroup.add(leftFrame);

    const rightFrame = new THREE.Mesh(
      new THREE.BoxGeometry(frameThickness, canvasHeight, frameDepth),
      frameMaterial
    );
    rightFrame.position.set(canvasWidth / 2 + frameThickness / 2, 0, 0);
    rightFrame.castShadow = true;
    canvasGroup.add(rightFrame);

    const backingGeometry = new THREE.PlaneGeometry(canvasWidth, canvasHeight);
    const backingMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5ede0,
      roughness: 0.9
    });
    const backing = new THREE.Mesh(backingGeometry, backingMaterial);
    backing.position.z = -frameDepth / 2;
    backing.receiveShadow = true;
    canvasGroup.add(backing);

    const artworkGeometry = new THREE.PlaneGeometry(canvasWidth * 0.98, canvasHeight * 0.98);
    const artworkMaterial = new THREE.MeshStandardMaterial({
      map: artworkTexture,
      roughness: 0.8,
      metalness: 0.1
    });
    const artwork = new THREE.Mesh(artworkGeometry, artworkMaterial);
    artwork.position.z = 0.01;
    artwork.castShadow = true;
    canvasGroup.add(artwork);

    addPaintLayers(canvasGroup, canvasWidth, canvasHeight);

    scene.add(canvasGroup);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 4;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i] = 0.43; colors[i + 1] = 0.16; colors[i + 2] = 0.85;
      } else if (colorChoice < 0.66) {
        colors[i] = 0.91; colors[i + 1] = 0.34; colors[i + 2] = 0.58;
      } else {
        colors[i] = 0.06; colors[i + 1] = 0.73; colors[i + 2] = 0.51;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || !e.touches[0]) return;
      
      mouseX = ((e.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      camera.position.x = mouseX * 0.5;
      camera.position.y = mouseY * 0.3;
      camera.lookAt(0, 0, 0);

      canvasGroup.rotation.y = Math.sin(time * 0.2) * 0.05 + mouseX * 0.1;
      canvasGroup.rotation.x = Math.cos(time * 0.15) * 0.03 + mouseY * 0.05;

      canvasGroup.position.y = Math.sin(time * 0.5) * 0.1;

      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] += Math.sin(time + positions[i + 1]) * 0.0005;
        positions[i + 1] += Math.cos(time + positions[i]) * 0.0005;
        
        if (Math.abs(positions[i]) > 5) positions[i] *= -0.9;
        if (Math.abs(positions[i + 1]) > 4) positions[i + 1] *= -0.9;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      particles.rotation.y = time * 0.05;

      accentLight1.intensity = 0.8 + Math.sin(time * 0.7) * 0.2;
      accentLight2.intensity = 0.6 + Math.cos(time * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('touchmove', handleTouchMove);
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      artworkTexture.dispose();
    };
  }, []);

  function createArtworkTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2560;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#f5ede0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = `rgba(139, 119, 101, ${Math.random() * 0.03})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 3 + 1,
        Math.random() * 3 + 1
      );
    }

    ctx.globalCompositeOperation = 'multiply';
    
    const gradient1 = ctx.createRadialGradient(400, 600, 100, 400, 600, 800);
    gradient1.addColorStop(0, 'rgba(109, 40, 217, 0.8)');
    gradient1.addColorStop(0.5, 'rgba(109, 40, 217, 0.4)');
    gradient1.addColorStop(1, 'rgba(109, 40, 217, 0)');
    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient2.addColorStop(0, 'rgba(233, 87, 147, 0)');
    gradient2.addColorStop(0.3, 'rgba(233, 87, 147, 0.7)');
    gradient2.addColorStop(0.7, 'rgba(233, 87, 147, 0.5)');
    gradient2.addColorStop(1, 'rgba(233, 87, 147, 0)');
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient3 = ctx.createRadialGradient(1600, 1800, 200, 1600, 1800, 900);
    gradient3.addColorStop(0, 'rgba(16, 185, 129, 0.6)');
    gradient3.addColorStop(0.5, 'rgba(16, 185, 129, 0.3)');
    gradient3.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = gradient3;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = 'source-over';

    const brushStrokes = [
      { x: 300, y: 400, w: 600, h: 80, color: '#6d28d9', rotation: 0.3 },
      { x: 800, y: 700, w: 800, h: 100, color: '#e95793', rotation: -0.4 },
      { x: 500, y: 1200, w: 700, h: 90, color: '#10b981', rotation: 0.2 },
      { x: 1200, y: 1600, w: 600, h: 70, color: '#8b5cf6', rotation: -0.3 },
      { x: 400, y: 1900, w: 900, h: 110, color: '#ec4899', rotation: 0.5 }
    ];

    brushStrokes.forEach(stroke => {
      ctx.save();
      ctx.translate(stroke.x, stroke.y);
      ctx.rotate(stroke.rotation);
      
      const strokeGradient = ctx.createLinearGradient(-stroke.w/2, 0, stroke.w/2, 0);
      strokeGradient.addColorStop(0, `${stroke.color}00`);
      strokeGradient.addColorStop(0.2, `${stroke.color}cc`);
      strokeGradient.addColorStop(0.8, `${stroke.color}cc`);
      strokeGradient.addColorStop(1, `${stroke.color}00`);
      
      ctx.fillStyle = strokeGradient;
      ctx.fillRect(-stroke.w/2, -stroke.h/2, stroke.w, stroke.h);
      ctx.restore();
    });

    for (let i = 0; i < 200; i++) {
      const colors = ['#6d28d9', '#e95793', '#10b981', '#ffc857'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 30 + 5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      ctx.fillStyle = color + Math.floor(Math.random() * 100 + 50).toString(16);
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2 + 1,
        Math.random() * 2 + 1
      );
    }

    return new THREE.CanvasTexture(canvas);
  }

  function addPaintLayers(group: THREE.Group, width: number, height: number) {
    const paintDetails = [
      { x: -0.8, y: 0.5, size: 0.3, color: 0x6d28d9, height: 0.04 },
      { x: 0.5, y: 0.2, size: 0.4, color: 0xe95793, height: 0.05 },
      { x: -0.3, y: -0.6, size: 0.35, color: 0x10b981, height: 0.04 },
      { x: 0.7, y: -0.3, size: 0.25, color: 0x8b5cf6, height: 0.03 },
      { x: -0.5, y: -1.2, size: 0.45, color: 0xec4899, height: 0.06 }
    ];

    paintDetails.forEach(detail => {
      const geometry = new THREE.SphereGeometry(detail.size, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
      const material = new THREE.MeshStandardMaterial({
        color: detail.color,
        emissive: detail.color,
        emissiveIntensity: 0.1,
        roughness: 0.6,
        metalness: 0.3,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3
      });
      const blob = new THREE.Mesh(geometry, material);
      blob.position.set(detail.x, detail.y, detail.height);
      blob.rotation.x = -Math.PI / 2;
      blob.castShadow = true;
      group.add(blob);
    });
  }

  return (
    <PaperSection
      hasTornTop
      hasTornBottom
      bgColor="#F8FAFC"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            See It Come To Life
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-800 mb-4 sm:mb-6 tracking-tight px-4">
            Your Masterpiece In 3D
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed px-4">
            This is the kind of vibrant, expressive artwork you'll create at our sessions. Move your mouse to explore the painting from different angles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-paper-warm/30 to-lavender-100/30 shadow-card border-2 sm:border-4 border-text-main/10 overflow-hidden"
        >
          <div ref={containerRef} className="w-full h-full" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-800/90 backdrop-blur-sm text-paper-white px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wide pointer-events-none"
          >
            ✨ <span className="hidden sm:inline">Move your mouse to explore the artwork</span>
            <span className="sm:hidden">Touch to explore</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12 max-w-2xl mx-auto px-4"
        >
          <p className="text-base sm:text-lg text-text-main leading-relaxed mb-3 sm:mb-4">
            Every painting session is guided by professional artists who help you unlock your creativity. No experience needed—just bring your imagination and willingness to explore.
          </p>
          <p className="text-lg sm:text-xl text-purple-600 font-medium italic">
            This could be hanging on your wall by the end of the evening.
          </p>
        </motion.div>
      </div>
    </PaperSection>
  );
};

export default Interactive3DPainting;