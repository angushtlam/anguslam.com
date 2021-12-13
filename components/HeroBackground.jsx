import glsl from "glslify";
import * as React from "react";
import * as Three from "three";

const clock = new Three.Clock();

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

    uv = uv * 1.5 - 1.0;

    float wave_primary_color_ceiling = 0.15;
    float wave_primary_speed = 0.5 * time;
    float wave_primary_position_y_val_sin = sin(
      uv.x + wave_primary_speed
    );

    float wave_secondary_color_ceiling = 0.2;
    float wave_secondary_speed = 0.15 * time;
    float wave_secondary_position_y_val_sin = sin(
      uv.x + wave_secondary_speed
    );

    vec3 color = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.05,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.25,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.15
    );
    
    vec3 color2 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.1,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.25,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.25
    );
    
    vec3 color3 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.2,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.45,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.35
    );
    
    vec3 color4 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.3,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.25,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.45
    );
    
    // Sine lines
    float amp = 0.025;
    float freq = 4.0;
    float y = amp * sin(uv.x * freq + time * 0.25);


    float amp2 = 0.05;
    float freq2 = 2.0;
    float y2 = amp2 * sin(uv.x * freq2 + time * 0.35);


    float amp3 = 0.075;
    float freq3 = 3.0;
    float y3 = amp3 * sin(uv.x * freq3 + time * 0.5);
    

    if (uv.y > y + 0.15) {
      color = color2;
    }
    
    if (uv.y > y2 + 0.3) {
      color = color3;
    }
    
    if (uv.y > y3 + 0.45) {
      color = color4;
    }
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroBackground({ backgroundHeight, backgroundWidth }) {
  const threeRef = React.useRef();

  React.useEffect(() => {
    var scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10);
    var renderer = new Three.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    threeRef.current.appendChild(renderer.domElement);

    const uniforms = {
      time: { value: 0.0 }
    }

    var geometry = new Three.PlaneGeometry(2, 2, 1, 1);
    var material = new Three.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,

    });
    var cube = new Three.Mesh(geometry, material);

    scene.add(cube);

    var animate = function () {
      requestAnimationFrame(animate);
      uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    }

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();

    return () => threeRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div style={{ position: 'absolute' }} ref={threeRef} />
  );
}
