import React from 'react';
import Tower from './Tower';
import Board from './Board';

/**
 * 
 */
class Stage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            towers: []
        };

        this.add = this.add.bind(this);
    }

    render() {
        return (
            <div onClick={this.add}
                style={{
                    background: 'red',
                    width: 800,
                    height: 450
                }}>
                {
                    this.state.towers.map((position, i) => {
                        return <Tower key={i} position={position} />
                    })
                }
                <Board />
            </div>
        );
    }

    add() {
        let _towers = this.state.towers;
        _towers.push(this.props.position);

        this.setState({ towers: _towers });
    }
}

export default Stage;