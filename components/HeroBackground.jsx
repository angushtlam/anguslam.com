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
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.2,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.15
    );
    
    vec3 color2 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.075,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.175,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.25
    );
    
    vec3 color3 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.1,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.15,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.35
    );
    
    vec3 color4 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.15,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.1,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.45
    );
    
    // Sine lines
    // Background
    float amp = 0.15;
    float freq = 3.0;
    float y = amp * sin(uv.x * freq + time * 0.15);

    // Middle
    float amp2 = 0.08;
    float freq2 = 3.0;
    float y2 = amp2 * sin(uv.x * freq2 + time * 0.55);


    // Front
    float amp3 = 0.05;
    float freq3 = 4.0;
    float y3 = amp3 * sin(uv.x * freq3 + time * 0.75);
    

    if (uv.y < y2 + 0.85) {
      color = color2;
    }
    
    if (uv.y < y + 0.75) {
      color = color3;
    }
    
    if (uv.y < y3 + 0.8) {
      color = color4;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroBackground() {
  const threeRef = React.useRef();

  React.useEffect(() => {
    var scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(90, document.body.clientWidth / window.innerHeight, 1, 10);
    var renderer = new Three.WebGLRenderer();

    renderer.setSize(document.body.clientWidth, window.innerHeight);
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
      camera.aspect = document.body.clientWidth / document.body.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();

    return () => threeRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <div style={{ position: 'absolute' }} ref={threeRef} />
  );
}
