import { memo } from 'react';

function AnimatedMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050205]" aria-hidden="true">
      {/* Mesh/blobs container with strong blur to blend everything */}
      <div className="absolute inset-0 blur-[90px] opacity-50">
        
        {/* Blob 1: Burgundy (Top Left) */}
        <div 
          className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle, rgba(82, 28, 62, 1) 0%, rgba(82, 28, 62, 0) 75%)',
            animation: 'blob-move-1 20s infinite alternate ease-in-out'
          }} 
        />
        
        {/* Blob 2: Plum (Bottom Right) */}
        <div 
          className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle, rgba(58, 15, 37, 1) 0%, rgba(58, 15, 37, 0) 75%)',
            animation: 'blob-move-2 25s infinite alternate ease-in-out'
          }} 
        />
        
        {/* Blob 3: Deep Purple/Near-black (Center Right - Depth) */}
        <div 
          className="absolute top-[25%] right-[15%] w-[55%] h-[55%] mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle, rgba(26, 8, 21, 1) 0%, rgba(26, 8, 21, 0) 75%)',
            animation: 'blob-move-3 28s infinite alternate ease-in-out'
          }} 
        />
      </div>

      {/* Cinematic Grain / Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Soft Vignette (Foreground Framing) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 130% 110% at 50% 50%, transparent 45%, #030002 100%)'
        }}
      />
    </div>
  );
}

export default memo(AnimatedMeshBackground);
