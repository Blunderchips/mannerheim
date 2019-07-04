import React from 'react';

import ReactCursorPosition from 'react-cursor-position';

import Stage from './Stage';
import MousePosition from './MousePosition'

/**
 * 
 */
class Game extends React.Component {

    constructor(props) {
        super(props);
        this.position = {

        };
    }

    render() {
        return (
            <div>
                <ReactCursorPosition>
                    <Stage />
                    <MousePosition />
                </ReactCursorPosition>
            </div>
        );
    }
}

export default Game;