import React from 'react';
import Mob from './Mob';

/**
 * 
 */
class Stage extends React.Component {

    mobs = [
        // { x: 100, y: 100 }
    ];

    constructor(props) {
        super(props);
        this.state = {

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
                    this.mobs.map((mob, i) => {
                        return <Mob key={i} position={mob} />
                    })
                }
            </div>
        );
    }

    add() {
        this.mobs.push(this.props.position);
    }
}

export default Stage;