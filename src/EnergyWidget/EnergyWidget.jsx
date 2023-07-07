export default function EnergyWidget() {
    return (
        <div className='button-style button-widget'>
            <img className="widget-icon" src="src/assets/energy.svg"/>
            <div className='progress-bar_wrapper'>
                <div className='progress-bar_bg'></div>
                <div className='progress-bar_indicator'></div>
            </div>
            <button className='button_energy'>
                <img src="src/assets/plus-sign.svg"/>
            </button>
        </div>
    );
  }