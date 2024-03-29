import React from "react";
import ReactTooltip from 'react-tooltip'

export const TOWER_SIZE = 32;

/**
 * Tower.
 */
class Tower extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidUpdate() {
        ReactTooltip.rebuild()
    }

    render() {
        const towerStyle = {
            width: `${TOWER_SIZE}`,
            height: 'auto',
            position: 'absolute',
            left: this.props.position.x,
            top: this.props.position.y,
            margin: `-${TOWER_SIZE / 2}` // Centre mob on position
        };

        return (
            <div>
                <svg data-tip='=( •̀д•́)' data-for='svgTooltip' className="tower spin" viewBox="0 0 512 512" style={towerStyle}>
                    <path fill="#000000" fillOpacity="1"
                        d="m256,21.0001c-129.787,0-235,105.2131-235,235s105.2131,234.9997 235,234.9997 235-105.2128 235-234.9997-105.2131-235-235-235zm0,38.6281c44.6717,0 85.8324,14.9876 118.8219,40.0969l-33.6344,33.6344c-24.1492-16.8102-53.5224-26.5844-85.1875-26.5844s-61.0383,9.7742-85.1876,26.5844l-33.6344-33.6344c32.9894-25.1093 74.1502-40.0969 118.8219-40.0969zm-156.2751,77.55 33.6344,33.6344c-16.8102,24.1492-26.5844,53.5224-26.5844,85.1876s9.7742,61.0383 26.5844,85.1872l-33.6344,33.6347c-25.1093-33.0189-40.0969-74.1503-40.0969-118.8219s14.9876-85.8325 40.0969-118.8219zm312.5501,0c25.1093,32.9895 40.0969,74.1502 40.0969,118.8219s-14.9876,85.8029-40.0969,118.8219l-33.6344-33.6347c16.8102-24.1489 26.5844-53.522 26.5844-85.1872s-9.7742-61.0383-26.5844-85.1876l33.6344-33.6344zm-156.275,13.2188c58.3488,0 105.6031,47.2543 105.6031,105.6032s-47.2542,105.7498-105.6031,105.7498-105.6032-47.401-105.6032-105.7498 47.2542-105.6032 105.6032-105.6032zm0,51.2594c-29.9886,0-54.3438,24.3552-54.3438,54.3438s24.3551,54.3438 54.3438,54.3438 54.3437-24.3552 54.3437-54.3438-24.3552-54.3438-54.3437-54.3438zm-85.1876,176.9844c24.1492,16.81 53.5224,26.5841 85.1876,26.5841s61.0382-9.7741 85.1875-26.5841l33.7812,33.7812c-33.0026,25.175-74.2615,40.0971-118.9687,40.0971s-85.9662-14.9221-118.9688-40.0971l33.7812-33.7812z" />
                </svg>

                <ReactTooltip id='svgTooltip' place='right' type='dark' effect='solid' aria-haspopup='true' >
                    <p>You can put every thing here</p>
                    <ul>
                        <li>Word</li>
                        <li>Chart</li>
                        <li>Else</li>
                    </ul>
                </ReactTooltip>
            </div>
        );
    }
}

export default Tower;