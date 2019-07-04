import React from 'react';

import ParticleEffectButton from 'react-particle-effect-button'

import Menus from './menus.json';

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
        this._onToggle = this.onClick.bind(this);
    }

    componentDidMount() {
        console.log(Menus['main']);
    }

    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -60%)'
            }}>
                {
                    Menus['main'].buttons.map((btn, i) => {
                        return (
                            <div key={i}>
                                <ParticleEffectButton
                                    hidden={!this.isBtnHidden(i)}
                                    onComplete={this._onAnimationComplete}
                                    color={'#44475a'}>
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

    isBtnHidden(btn) {
        return !this.state.buttons[btn];
    }
}

export default Menu;