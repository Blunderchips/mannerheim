import React from 'react';

import Particles from 'react-particles-js';
import ReactCursorPosition from 'react-cursor-position';
import Stage from './engine/Stage.js';

function App() {
  return (
    <div>
      <ReactCursorPosition>
        <Stage></Stage>
      </ReactCursorPosition>

      <Particles
        className="background"
        params={{
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 2000
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.07
            },
            "move": {
              "direction": "right",
              "speed": 0.05
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
    </div>
  );
}

export default App;
