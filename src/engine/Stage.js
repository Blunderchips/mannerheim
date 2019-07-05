import React from 'react';
import Mob from './Mob';
import Board from './Board';

/**
 * 
 */
class Stage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobs: []
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
                    this.state.mobs.map((mob, i) => {
                        return <Mob key={i} position={mob} />
                    })
                }
                <Board />
            </div>
        );
    }

    add() {
        let _mobs = this.state.mobs;
        _mobs.push(this.props.position);

        this.setState({ mobs: _mobs });
    }
}

export default Stage;