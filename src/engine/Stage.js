import React from 'react';
import Tower, { TOWER_SIZE } from './Tower';
import Board from './Board';
import Mob, { MOB_SIZE } from './Mob';
import Bullet, { BULLET_SIZE } from './Bullet';

import Util, { KEY_SPACE } from '../Util';

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
        { x: 150, y: 200 },
        { x: 300, y: 200 },
        { x: 300, y: 50 },
    ];

    constructor(props) {
        super(props);
        this.state = {
            towers: [],
            mobs: [],
            bullets: []
        };

        this.addTower = this.addTower.bind(this);
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
            <div onClick={this.addTower}
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
                <div>
                    {
                        this.state.bullets.map((mob, i) => {
                            const { x, y } = mob;
                            return <Bullet key={i} position={{ x, y }} />
                        })
                    }
                </div>
                <Board points={this.points} />
            </div>
        );
    }

    /**
     * Add new tower to the board.
     */
    addTower() {
        const TOWER_SIZE2 = TOWER_SIZE * TOWER_SIZE;
        const position = this.props.position;

        let tooSmall = false;
        this.state.towers.forEach(i => {
            if (Util.dist2(position, i) <= TOWER_SIZE2) {
                console.error('Too small'); // TODO: better message
                tooSmall = true;
                return;
            }
        });

        if (tooSmall) {
            return;
        }

        const range = 200;
        position.range2 = range * range;

        position.rateOfFire = 0.25 * 1000;
        position.lastFire = 0;

        let _towers = this.state.towers;
        _towers.push(position);

        this.setState({ towers: _towers });
    }

    update() {
        let current = window.performance.now();
        let diff = current - this.lastUpdate;

        if (diff >= STEP) {
            const mobs = this.state.mobs
            mobs.forEach(mob => {
                let i = mobs.indexOf(mob);

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
                } else {
                    this.state.towers.forEach(tower => {
                        if (current >= tower.lastFire + tower.rateOfFire &&
                            Util.dist2(mob, tower) <= tower.range2) {
                            // console.log('bang', tower);
                            tower.lastFire = current;

                            let _bullets = this.state.bullets;
                            const bullet = {
                                x: tower.x,
                                y: tower.y,
                                angle: Util.angle(tower, mob)
                            };
                            _bullets.push(bullet);

                            console.log(bullet);

                            this.setState({ bullets: _bullets });
                        }
                    });
                }
            });

            const bullets = this.state.bullets;
            bullets.forEach(bullet => {
                Util.movePointAtAngle(bullet, bullet.angle * 0.0174533, 5);

                let hit = false;
                const i = bullets.indexOf(bullet);

                this.state.mobs.forEach(mob => {
                    if (hit) {
                        return;
                    }

                    const dx = bullet.x - mob.x;
                    const dy = bullet.y - mob.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < (BULLET_SIZE + MOB_SIZE) / 2) {
                        console.log('hit');
                        hit = true;
                    }
                });

                if (hit) {
                    bullets.splice(i, 1);
                }
            });

            this.lastUpdate = current;  // timing
            this.forceUpdate();         // Refresh screen
        }
    }

    spawn(evt) {
        switch (evt.keyCode) {
            case KEY_SPACE:
                let mob = {
                    target: 1,
                    x: this.points[0].x,
                    y: this.points[0].y,
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