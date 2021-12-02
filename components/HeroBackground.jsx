import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import glsl from "glslify";
import * as React from "react";
import * as Three from "three";

const vertexShader = glsl`
  varying vec2 v_uv;

  void main() {
    v_uv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = glsl`
  varying vec2 v_uv;

  uniform vec2 windowSize;
  uniform float time;

  void main() {
    // vec2 uv = gl_FragCoord.xy / windowSize;
    vec2 uv = v_uv;
    // uv = uv * 2.0 - 1.0;

    float wave_primary_color_ceiling = 0.15;
    float wave_primary_speed = 1.0 * time;
    float wave_primary_position_y_val_sin = sin(
      uv.x + wave_primary_speed
    );

    float wave_secondary_color_ceiling = 0.2;
    float wave_secondary_speed = 0.3 * time;
    float wave_secondary_position_y_val_sin = sin(
      uv.x + wave_secondary_speed
    );

    vec3 color = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.05,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.25,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.15
    );

    gl_FragColor = vec4(color, 1.0);
  }
`;

const HeroGradientMaterial = shaderMaterial(
  { time: Math.random() * 1337.0 },
  vertexShader,
  fragmentShader
);

extend({ HeroGradientMaterial });

function HeroGradient({ backgroundHeight, backgroundWidth, ...props }) {
  const ref = React.useRef();

  useFrame((state) => {
    ref.current.time = state.clock.elapsedTime;
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <heroGradientMaterial
        ref={ref}
        windowSize={new Three.Vector2(backgroundWidth, backgroundHeight)}
      />
    </mesh>
  );
}

export default function HeroBackground({ backgroundHeight, backgroundWidth }) {
  return (
    <Canvas
      camera={{ fov: 90, position: [0, 0, 1] }}
      linear
      style={{ height: backgroundHeight, position: "absolute" }}
    >
      <ambientLight />
      <HeroGradient
        backgroundHeight={backgroundHeight}
        backgroundWidth={backgroundWidth}
      />
    </Canvas>
  );
}
