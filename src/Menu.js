import React from 'react';

import Button from 'react-bootstrap/Button';
import ParticleEffectButton from 'react-particle-effect-button'

/**
 * 
 */
class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
        this._onToggle = this._onToggle.bind(this);
    }

    render() {
        return (
            <div>
                <ParticleEffectButton
                    hidden={this.state.hidden}
                    onComplete={this._onAnimationComplete}
                    color={'#44475a'}>
                    <Button onClick={this._onToggle}>asd</Button>
                </ParticleEffectButton>
            </div>
        );
    }

    _onToggle() {
        this.setState({
            hidden: !this.state.hidden
        });
    }
}

export default Menu;