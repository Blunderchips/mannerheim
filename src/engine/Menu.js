import React from 'react';

import ParticleEffectButton from 'react-particle-effect-button'

import Menus from '../data/menus.json';

/**
 * 
 */
class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            buttons: {}
        };

        this.onToggle = this.onClick.bind(this);
        this.onAnimationComplete = this.onAnimationComplete.bind(this);
    }

    render() {
        return (
            <div style={{
                // centre centre, almost
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -60%)'
            }}>
                {
                    Menus['main'].buttons.map((btn, i) => {
                        return (
                            <div key={i}>
                                <ParticleEffectButton
                                    hidden={!this.isBtnHidden(i)}
                                    onComplete={() => { this.onAnimationComplete(btn) }}
                                    color={'#ffb86c'}>
                                    <button onClick={() => { this.onClick(i) }}>{btn.title}</button>
                                </ParticleEffectButton>
                                <br />
                            </div>
                        );
                    })
                }
            </ div>
        );
    }

    onClick(btn) {
        let _buttons = this.state.buttons;
        _buttons[btn] = true;

        this.setState({
            buttons: _buttons
        });
    }

    isBtnHidden(btnID) {
        return !this.state.buttons[btnID];
    }

    onAnimationComplete(btn) {
        this.props.history.push(`/${btn.route}`)
    }
}

export default Menu;