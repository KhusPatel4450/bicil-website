"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DigitalPetalsShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform float iScrollProgress;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;

        // Speed and petal count morph as user scrolls
        float speed = 0.28 + iScrollProgress * 0.18;
        float t = iTime * speed;
        float r = length(uv);
        float a = atan(uv.y, uv.x);

        float mouseDist = length(uv - mouse);
        float bloom     = smoothstep(0.4, 0.0, mouseDist);

        float petals     = 5.0 + iScrollProgress * 3.5 + sin(t * 0.7) * 2.0;
        float petalShape = sin(a * petals + r * 2.0);
        petalShape = pow(abs(petalShape), 0.5);

        float flow    = sin(r * 10.0 - t * 2.0);
        float flowMix = 0.5 - iScrollProgress * 0.15;
        float pattern = mix(petalShape, flow, flowMix) + bloom * 0.5;

        // Clamp pattern to positive — prevents undefined pow() with negative base
        float posPattern = max(pattern, 0.0);
        float smoothPat  = smoothstep(0.0, 0.9, posPattern);

        // Pastel BICIL palette for light theme
        vec3 skyBlue  = vec3(0.52, 0.73, 0.92);
        vec3 softTeal = vec3(0.46, 0.80, 0.76);
        vec3 softCyan = vec3(0.58, 0.87, 0.92);

        vec3 color1 = mix(skyBlue,  softTeal, iScrollProgress * 0.55);
        vec3 color2 = mix(softTeal, softCyan, iScrollProgress * 0.40);

        // Petal tint — all values are pastel, never dark
        vec3 petalTint = mix(color1, color2,
          smoothstep(0.3, 0.7, r + random(vec2(t, t)) * 0.08)
        );

        // Near-white base
        vec3 base = vec3(0.97, 0.98, 0.99);

        // Soft tinting of petals on the white background
        float tintAmt = smoothPat * (0.30 + iScrollProgress * 0.10) + bloom * 0.14;
        vec3 finalColor = mix(base, petalTint, clamp(tintAmt, 0.0, 1.0));

        // Subtle cyan shimmer at petal peaks — pow is safe because posPattern >= 0
        finalColor = mix(finalColor, softCyan, pow(posPattern, 8.0) * (0.18 + bloom * 0.12));

        gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
      }
    `;

    const uniforms = {
      iTime:           { value: 0 },
      iResolution:     { value: new THREE.Vector2() },
      iMouse:          { value: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2) },
      iScrollProgress: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      uniforms.iScrollProgress.value = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      uniforms.iMouse.value.set(e.clientX, window.innerHeight - e.clientY);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.setAnimationLoop(null);
      const canvas = renderer.domElement;
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
