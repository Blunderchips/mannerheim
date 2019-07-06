import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Particles from 'react-particles-js';

import Game from './engine/Game.js';
import Menu from './engine/Menu.js';

function App() {
  return (
    <div style={{

    }}>
      {/* <ReactCursorPosition>
        <Stage></Stage>
      </ReactCursorPosition> */}

      <Router>
        {/* <Redirect from="/" exact to="/menu" /> */}
        <Route path="/game/" component={Game} />
        <Route path="/menu/" component={Menu} />
        {/* <Route path="/" exact component={NotFound} /> */}
      </Router>

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
