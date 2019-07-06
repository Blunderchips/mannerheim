import React from 'react';

/**
 * 
 */
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

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
        return "50,50 50,100 100,100 100,50 150,50 150,200";
    }
}

export default Board;