import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  scene.traverse((child) => {
    if (child.isMesh) {
      const geometry = child.geometry;
      if (geometry) {
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();

        // Check for NaN values and handle them
        if (geometry.boundingSphere.radius !== geometry.boundingSphere.radius) { // NaN check
          console.warn('Bounding sphere has NaN radius, setting to default value.');
          geometry.boundingSphere.radius = 1;
        }
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <directionalLight 
        castShadow
        position={[0, 10, 0]} 
        intensity={10} 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={scene} 
        scale={isMobile ? 0.38 : 0.65} 
        position={isMobile ? [0, -2, -1] : [0, -3.25, -1.5]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);  
      console.log('Media query change detected:', event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };

  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
