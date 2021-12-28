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
    float wave_primary_speed = 0.25 * time;
    float wave_primary_position_y_val_sin = sin(
      uv.x + wave_primary_speed
    );

    float wave_secondary_color_ceiling = 0.2;
    float wave_secondary_speed = 0.05 * time;
    float wave_secondary_position_y_val_sin = sin(
      uv.x + wave_secondary_speed
    );

    vec3 color = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.05,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.1,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.15
    );
    
    vec3 color2 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.075,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.075,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.23
    );
    
    vec3 color3 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.05,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.08,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.2
    );
    
    vec3 color4 = vec3(
      abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling + 0.08,
      (abs(uv.y - wave_primary_position_y_val_sin) * wave_primary_color_ceiling) * 0.2,
      abs(uv.y - wave_secondary_position_y_val_sin) * wave_secondary_color_ceiling + 0.28
    );
    
    // Sine lines
    // Background
    float amp = 0.15;
    float freq = 3.0;
    float y = amp * sin(uv.x * freq + time * 0.0025);

    // Middle
    float amp2 = 0.08;
    float freq2 = 3.0;
    float y2 = amp2 * sin(uv.x * freq2 + time * 0.005);


    // Front
    float amp3 = 0.05;
    float freq3 = 4.0;
    float y3 = amp3 * sin(uv.x * freq3 + time * 0.1);
    
    
    if (uv.y < y + 0.85) {
      color = color2;
    }
    
    if (uv.y < y2 + 0.75) {
      color = color3;
    }
    
    if (uv.y < y3 + 0.8) {
      color = color4;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function HeroBackground({ heroRef }) {
  const [threeInitialized, setThreeInitialized] = React.useState(false);
  const [threeRenderer, setThreeRenderer] = React.useState(null);
  const threeRef = React.useRef();

  React.useEffect(() => {
    const initialHeight = heroRef.current.offsetHeight;
    const initialWidth = heroRef.current.offsetWidth;
    const threeRefCurrentElement = threeRef && threeRef.current;
    const threeRendererDomElement = threeRenderer && threeRenderer.domElement;

    if (!threeInitialized) {
      let scene = new Three.Scene();
      let camera = new Three.PerspectiveCamera(
        90,
        initialWidth / initialHeight,
        1,
        10
      );
      let renderer = new Three.WebGLRenderer();

      renderer.setSize(initialWidth, initialHeight);
      threeRef.current.appendChild(renderer.domElement);

      const uniforms = {
        time: { value: 0.0 },
      };

      var geometry = new Three.PlaneGeometry(2, 2, 1, 1);
      var material = new Three.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
      });

      var mesh = new Three.Mesh(geometry, material);
      scene.add(mesh);

      var animate = function () {
        requestAnimationFrame(animate);
        uniforms.time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      };

      let onWindowResize = function () {
        if (heroRef && heroRef.current) {
          const height = heroRef.current.offsetHeight;
          const width = heroRef.current.offsetWidth;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      };

      window.addEventListener("resize", onWindowResize, false);

      animate();
      setThreeInitialized(true);
      setThreeRenderer(renderer);
    }

    return function cleanup() {
      // Sometimes the ref could've already been destroyed.
      if (threeInitialized && threeRefCurrentElement) {
        threeRefCurrentElement.removeChild(threeRendererDomElement);
      }
    };
  }, [heroRef, threeInitialized, threeRenderer]);

  return <div className="absolute" ref={threeRef}></div>;
}
