import React from 'react';
import Mob from './Mob';

/**
 * 
 */
class Stage extends React.Component {

    position; // Vector2

    constructor(props) {
        super(props);
        this.position = { x: 100, y: 200 };
    }

    render() {
        return (
            <div>
                <Mob />
            </div>
        );
    }
}

export default Stage;