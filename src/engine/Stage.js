import React from 'react';

import Vector2 from './Vector2';

/**
 * 
 */
class Stage extends React.Component {

    position;

    constructor(props) {
        super(props);
        this.position = new Vector2(200, 100);
    }

    render() {
        return (
            <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle transform={`translate(${this.position.x}, ${this.position.y})`} r="40" stroke="green" strokeWidth="4" fill="yellow" />
                </g>
            </svg>
        );
    }
}

export default Stage;