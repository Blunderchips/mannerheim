import React from 'react';
import Tower from './Tower';
import Board from './Board';
import Mob from './Mob';

const STEP = 1 / 60;

/**
 * 
 */
class Stage extends React.Component {

    lastUpdate = 0;

    constructor(props) {
        super(props);
        this.state = {
            towers: [],
            mobs: [{ x: 200, y: 200 }]
        };

        this.add = this.add.bind(this);
        this.updadte = this.update.bind(this);
    }

    render() {
        return (
            <div onClick={this.add}
                style={{
                    width: 800,
                    height: 450
                }}>
                <div>
                    {
                        this.state.towers.map((position, i) => {
                            return <Tower key={i} position={position} />
                        })
                    }
                </div> 
                <div>
                    {
                        this.state.mobs.map((position, i) => {
                            return <Mob key={i} position={position} />
                        })
                    }
                </div>
                <Board />
            </div>
        );
    }

    add() {
        let _towers = this.state.towers;
        _towers.push(this.props.position);

        this.setState({ towers: _towers });
    }

    update() {
        let current = window.performance.now();
        let diff = current - this.lastUpdate;

        if (diff >= STEP) {
            this.lastUpdate = current;

            let _mobs = this.state.mobs;
            _mobs[0].x = (_mobs[0].x + 1) % 800;
            // _mobs[0].y = (_mobs[0].y + 1) % 300;

            this.setState({ mobs: _mobs });
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updadte(), 1000 / 60);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Stage;