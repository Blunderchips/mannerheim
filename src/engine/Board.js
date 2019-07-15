import React from 'react';

/**
 * 
 */
class Board extends React.Component {

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
        this.props.points.forEach(point => {
            rtn += `${point.x},${point.y} `;
        });
        return rtn;
    }
}

export default Board;