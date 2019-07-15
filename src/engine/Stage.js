import React from 'react';
import Tower from './Tower';
import Board from './Board';
import Mob from './Mob';

import { KEY_SPACE } from '../Util';

const STEP = 1 / 60;

/**
 * 
 */
class Stage extends React.Component {

    lastUpdate = 0; // For game loop.

    points = [
        { x: 50, y: 50 },
        { x: 50, y: 100 },
        { x: 100, y: 100 },
        { x: 100, y: 50 },
        { x: 150, y: 50 },
        { x: 150, y: 200 }
    ];

    constructor(props) {
        super(props);
        this.state = {
            towers: [],
            mobs: []
        };

        this.add = this.add.bind(this);
        this.updadte = this.update.bind(this);
        this.spawn = this.spawn.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updadte(), 1000 / 60);
        document.addEventListener("keydown", this.spawn, false);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        document.removeEventListener("keydown", this.spawn, false);
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
                        this.state.mobs.map((mob, i) => {
                            const { x, y } = mob;
                            return <Mob key={i} position={{ x, y }} />
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
            const mobs = this.state.mobs
            mobs.forEach(mob => {
                var i = mobs.indexOf(mob);
                // https://stackoverflow.com/a/18732777/3833743
                const target = this.points[mob.target];

                const dx = target.x - mob.x;
                const dy = target.y - mob.y;

                const direction = Math.atan(dy / dx);

                const speed = 1;
                const x = mob.x + (speed * Math.cos(direction));
                const y = mob.y + (speed * Math.sin(direction));

                if (isNaN(x) && isNaN(y)) {
                    mob.target++;
                } else {
                    mob.x = isNaN(x) ? mob.x : x;
                    mob.y = isNaN(y) ? mob.y : y;
                }

                // console.log(mob);

                if (mob.target === this.points.length) {
                    mobs.splice(i, 1);
                }
            });

            this.lastUpdate = current; // timing
            this.forceUpdate();
        }
    }

    spawn(evt) {
        switch (evt.keyCode) {
            case KEY_SPACE:
                let mob = {
                    target: 1,
                    x: this.points[0].x,
                    y: this.points[0].y
                }

                let _mobs = this.state.mobs;
                _mobs.push(mob);

                this.setState({
                    mobs: _mobs
                });

                break;
            default:
                // Do nothing.
                break
        }
    }
}

export default Stage;