import energy_icon from '../assets/energy.svg';
import plus_icon from '../assets/plus-sign.svg';

export default function EnergyWidget() {
    return (
        <div className='button-style button-widget'>
            <img className="widget-icon" src={energy_icon}/>
            <div className='progress-bar_wrapper'>
                <div className='progress-bar_bg'></div>
                <div className='progress-bar_indicator'></div>
            </div>
            <button className='button_energy'>
                <img src={plus_icon}/>
            </button>
        </div>
    );
  }