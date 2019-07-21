import React from 'react';

/**
 * 
 */
class Board extends React.Component {

    start = { x: 0, y: 0 };
    end = { x: 0, y: 0 };

    constructor(props) {
        super(props);
        this.state = {
            points: props.points
        }

        const points = props.points;
        this.start = points[0];
        this.end = points[points.length - 1];
    }

    componentDidMount() {
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

                <circle cx={this.start.x} cy={this.start.y} r="7.5" stroke="black" fill="lime" />
                <circle cx={this.end.x} cy={this.end.y} r="7.5" stroke="black" fill="red" />
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