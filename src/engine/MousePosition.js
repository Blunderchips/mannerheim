import React from 'react';

/**
 * idmypos.
 */
class MousePosition extends React.Component {

    render() {
        const { position } = this.props;

        return (
            <div style={{
                position: 'absolute',
                left: '0px',
                top: '0px'
            }} className="debug">
                x={position.x},&nbsp;y={position.y}
            </div>
        );
    }
}

export default MousePosition;