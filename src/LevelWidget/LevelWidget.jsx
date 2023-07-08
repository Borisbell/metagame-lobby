import crow_big from '../assets/crown_big.svg';
import chest from '../assets/chest.svg';

export default function LevelWidget({toggleLeaderBoard}) {
    return (
        <div className='button-style button-widget' onClick={toggleLeaderBoard}>
            <img className="widget-icon" src={crow_big}/>
            <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
            <div className='progress-bar_bg'></div>
            <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
            </div>
            <img className="widget-icon " src={chest}/>
        </div>
    );
  }