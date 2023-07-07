export default function LevelWidget({toggleLeaderBoard}) {
    return (
        <div className='button-style button-widget' onClick={toggleLeaderBoard}>
            <img className="widget-icon" src="src/assets/crown_big.svg"/>
            <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
            <div className='progress-bar_bg'></div>
            <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
            </div>
            <img className="widget-icon " src="src/assets/chest.svg"/>
        </div>
    );
  }