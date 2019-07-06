import React from 'react';

/**
 * 
 */
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: [
                { x: 50, y: 50 },
                { x: 50, y: 100 },
                { x: 100, y: 100 },
                { x: 100, y: 50 },
                { x: 150, y: 50 },
                { x: 150, y: 200 }
            ]
        };
    }

    render() {
        return (
            <svg style={{ width: '800', height: '450' }}>
                <polyline style={{
                    fill: 'none',
                    stroke: '282a36',
                    strokeWidth: '15',
                    strokeOpacity: '0.6'
                }} points={this.getPoints()} />
            </svg>
        );
    }

    getPoints() {
        let rtn = '';
        this.state.points.forEach(point => {
            rtn += `${point.x},${point.y} `;
        });
        return rtn;
    }
}

export default Board;