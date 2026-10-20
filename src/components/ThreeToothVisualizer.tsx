import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

type VisualizerMode = 'crown' | 'implant' | 'veneer';

export const ThreeToothVisualizer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<VisualizerMode>('crown');
  const [isRotating, setIsRotating] = useState(true);
  const [activeLayer, setActiveLayer] = useState<'all' | 'crown' | 'core' | 'root'>('all');
  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 360;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 5.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Clear previous canvas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7ed, 2.2);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x93c5fd, 1.2);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0xdbeafe, 1.5, 10);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Main Group for Tooth & Implant models
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    groupRef.current = mainGroup;

    // Materials
    // Porcelain / Ceramic high sheen
    const ceramicMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfdfdfd,
      roughness: 0.12,
      metalness: 0.05,
      transmission: 0.25,
      ior: 1.52,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.8,
    });

    // Titanium / Surgical grade material
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      roughness: 0.25,
      metalness: 0.85,
    });

    // Gold / Warm abutment
    const goldAbutment = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.7,
    });

    // Root dentin material
    const dentinMaterial = new THREE.MeshStandardMaterial({
      color: 0xfef3c7,
      roughness: 0.45,
      metalness: 0.02,
    });

    // Veneer shell material (ultra translucent)
    const veneerGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.05,
      transmission: 0.45,
      ior: 1.54,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
    });

    // Function to build models based on mode
    const rebuildModel = () => {
      // Clear children
      while (mainGroup.children.length > 0) {
        mainGroup.remove(mainGroup.children[0]);
      }

      if (mode === 'crown') {
        // Natural Anatomic Molar Tooth
        // Crown (Upper portion)
        const crownGeo = new THREE.CylinderGeometry(0.9, 0.8, 1.1, 32, 8);
        const crownMesh = new THREE.Mesh(crownGeo, ceramicMaterial);
        crownMesh.position.y = 0.55;
        crownMesh.name = 'crown';
        mainGroup.add(crownMesh);

        // Cusps / Grooves top dome
        const cuspGeo = new THREE.SphereGeometry(0.88, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
        const cuspMesh = new THREE.Mesh(cuspGeo, ceramicMaterial);
        cuspMesh.position.y = 0.95;
        cuspMesh.name = 'crown';
        mainGroup.add(cuspMesh);

        // Natural Roots (Dual tapered roots)
        const root1Geo = new THREE.ConeGeometry(0.35, 1.6, 24);
        const root1Mesh = new THREE.Mesh(root1Geo, dentinMaterial);
        root1Mesh.rotation.z = Math.PI;
        root1Mesh.position.set(-0.35, -0.75, 0);
        root1Mesh.name = 'root';
        mainGroup.add(root1Mesh);

        const root2Geo = new THREE.ConeGeometry(0.33, 1.55, 24);
        const root2Mesh = new THREE.Mesh(root2Geo, dentinMaterial);
        root2Mesh.rotation.z = Math.PI;
        root2Mesh.position.set(0.35, -0.72, 0);
        root2Mesh.name = 'root';
        mainGroup.add(root2Mesh);

        // Cervical collar ring
        const collarGeo = new THREE.TorusGeometry(0.82, 0.06, 16, 32);
        const collarMesh = new THREE.Mesh(collarGeo, dentinMaterial);
        collarMesh.rotation.x = Math.PI / 2;
        collarMesh.name = 'core';
        mainGroup.add(collarMesh);
      } else if (mode === 'implant') {
        // High-Tech Guided Dental Implant
        // 1. Zirconia Crown
        const crownGeo = new THREE.CylinderGeometry(0.9, 0.78, 1.1, 32, 8);
        const crownMesh = new THREE.Mesh(crownGeo, ceramicMaterial);
        crownMesh.position.y = 0.85;
        crownMesh.name = 'crown';
        mainGroup.add(crownMesh);

        // Crown top cusp
        const cuspGeo = new THREE.SphereGeometry(0.88, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
        const cuspMesh = new THREE.Mesh(cuspGeo, ceramicMaterial);
        cuspMesh.position.y = 1.25;
        cuspMesh.name = 'crown';
        mainGroup.add(cuspMesh);

        // 2. Titanium / Gold Abutment Collar
        const abutmentGeo = new THREE.CylinderGeometry(0.65, 0.48, 0.45, 24);
        const abutmentMesh = new THREE.Mesh(abutmentGeo, goldAbutment);
        abutmentMesh.position.y = 0.18;
        abutmentMesh.name = 'core';
        mainGroup.add(abutmentMesh);

        // 3. Threaded Titanium Implant Post (Root replacement)
        const implantShaftGeo = new THREE.CylinderGeometry(0.42, 0.28, 1.6, 24);
        const implantShaft = new THREE.Mesh(implantShaftGeo, titaniumMaterial);
        implantShaft.position.y = -0.8;
        implantShaft.name = 'root';
        mainGroup.add(implantShaft);

        // Screw threads
        for (let i = 0; i < 7; i++) {
          const threadGeo = new THREE.TorusGeometry(0.44 - i * 0.015, 0.035, 12, 24);
          const threadMesh = new THREE.Mesh(threadGeo, titaniumMaterial);
          threadMesh.rotation.x = Math.PI / 2;
          threadMesh.position.y = -0.3 - i * 0.18;
          threadMesh.name = 'root';
          mainGroup.add(threadMesh);
        }

        // Tapered apical apex
        const apexGeo = new THREE.SphereGeometry(0.26, 16, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
        const apexMesh = new THREE.Mesh(apexGeo, titaniumMaterial);
        apexMesh.position.y = -1.6;
        apexMesh.name = 'root';
        mainGroup.add(apexMesh);
      } else {
        // Porcelain Veneer Shell over Natural Enamel Substrate
        // Substrate Tooth
        const toothSubstrateGeo = new THREE.CylinderGeometry(0.78, 0.65, 1.4, 32);
        const toothSubstrate = new THREE.Mesh(toothSubstrateGeo, dentinMaterial);
        toothSubstrate.position.y = 0.2;
        toothSubstrate.name = 'core';
        mainGroup.add(toothSubstrate);

        // Translucent Custom Porcelain Veneer Facing
        const veneerFacingGeo = new THREE.CylinderGeometry(0.85, 0.72, 1.5, 32, 1, false, 0, Math.PI * 1.05);
        const veneerFacing = new THREE.Mesh(veneerFacingGeo, veneerGlassMaterial);
        veneerFacing.position.set(0, 0.25, 0.05);
        veneerFacing.rotation.y = -Math.PI * 0.52;
        veneerFacing.name = 'crown';
        mainGroup.add(veneerFacing);

        // Root
        const rootGeo = new THREE.ConeGeometry(0.4, 1.5, 24);
        const rootMesh = new THREE.Mesh(rootGeo, dentinMaterial);
        rootMesh.rotation.z = Math.PI;
        rootMesh.position.y = -1.1;
        rootMesh.name = 'root';
        mainGroup.add(rootMesh);
      }
    };

    rebuildModel();

    // Mouse drag interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMousePos = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMousePos.x;
      const deltaY = clientY - prevMousePos.y;

      if (mainGroup) {
        mainGroup.rotation.y += deltaX * 0.01;
        mainGroup.rotation.x += deltaY * 0.01;
        // Limit x rotation to avoid extreme flips
        mainGroup.rotation.x = Math.max(-0.6, Math.min(0.6, mainGroup.rotation.x));
      }

      prevMousePos = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onPointerDown);
    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating && !isDragging && mainGroup) {
        mainGroup.rotation.y += 0.008;
      }

      // Gentle vertical floating motion
      if (mainGroup) {
        const elapsedTime = clock.getElapsedTime();
        mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 360;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onPointerDown);
      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, isRotating]);

  // Effect to handle layer visibility highlights
  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        if (activeLayer === 'all') {
          child.visible = true;
          if (child.material) {
            child.material.opacity = 1.0;
            child.material.transparent = mode === 'veneer' && child.name === 'crown';
          }
        } else if (child.name === activeLayer) {
          child.visible = true;
          if (child.material) child.material.opacity = 1.0;
        } else {
          // Dim other layers
          child.visible = true;
          if (child.material) {
            child.material.transparent = true;
            child.material.opacity = 0.25;
          }
        }
      }
    });
  }, [activeLayer, mode]);

  return (
    <div className="relative w-full bg-[#F3EFE6] border border-[#E4DEC9] rounded-2xl overflow-hidden shadow-sm">
      {/* Header bar within the visualizer */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[#E4DEC9] bg-[#FAF8F2]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#0C3836]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0C3836]">
            Interactive 3D Dental Architecture
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              isRotating
                ? 'bg-[#0C3836] text-white'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Auto-Rotate ON' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Mode Selector Tabs (Permitted interactive segmented control) */}
      <div className="p-3 bg-[#FAF8F2]/60 border-b border-[#E4DEC9] flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setMode('crown');
            setActiveLayer('all');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            mode === 'crown'
              ? 'bg-[#0C3836] text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
          }`}
        >
          Anatomic Porcelain Crown
        </button>
        <button
          type="button"
          onClick={() => {
            setMode('implant');
            setActiveLayer('all');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            mode === 'implant'
              ? 'bg-[#0C3836] text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
          }`}
        >
          Permanent 3D Guided Implant
        </button>
        <button
          type="button"
          onClick={() => {
            setMode('veneer');
            setActiveLayer('all');
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            mode === 'veneer'
              ? 'bg-[#0C3836] text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
          }`}
        >
          Ceramic Veneer Facing
        </button>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-[340px] md:h-[400px] cursor-grab active:cursor-grabbing select-none">
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating anatomical callouts */}
        <div className="absolute top-4 left-4 max-w-[240px] bg-white/90 backdrop-blur-md p-3 rounded-xl border border-stone-200/80 shadow-xs pointer-events-none">
          <p className="text-[11px] font-semibold text-[#0C3836] uppercase tracking-wide">
            {mode === 'crown' && 'Monolithic e.max Ceramic'}
            {mode === 'implant' && 'Computer-Guided Titanium Post'}
            {mode === 'veneer' && 'Bespoke Facially-Driven Veneer'}
          </p>
          <p className="text-xs text-stone-600 mt-1 leading-snug">
            {mode === 'crown' && 'Translucent micro-layering replicates natural dental enamel light diffusion.'}
            {mode === 'implant' && 'Direct biocompatible osseointegration restores 100% natural chewing force.'}
            {mode === 'veneer' && '0.3mm ultra-thin porcelain preserving healthy natural tooth structure.'}
          </p>
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-4 right-4 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200 text-[11px] text-stone-500 flex items-center gap-1.5 pointer-events-none">
          <Eye className="w-3.5 h-3.5 text-[#0C3836]" />
          <span>Click & drag to rotate 360°</span>
        </div>
      </div>

      {/* Layer inspection filter controls */}
      <div className="px-5 py-3.5 bg-white border-t border-[#E4DEC9] flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-stone-500 font-medium">Anatomical Layer Focus:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveLayer('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeLayer === 'all'
                ? 'bg-stone-900 text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            Complete Anatomy
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('crown')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeLayer === 'crown'
                ? 'bg-[#0C3836] text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {mode === 'implant' ? 'Zirconia Crown' : 'Enamel Layer'}
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('core')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeLayer === 'core'
                ? 'bg-[#0C3836] text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {mode === 'implant' ? 'Gold Abutment' : 'Dentin Core'}
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('root')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeLayer === 'root'
                ? 'bg-[#0C3836] text-white'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {mode === 'implant' ? 'Titanium Fixture' : 'Root System'}
          </button>
        </div>
      </div>
    </div>
  );
};
