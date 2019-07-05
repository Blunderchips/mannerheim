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
                <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" />
            </svg>
        );
    }
}

export default Board;