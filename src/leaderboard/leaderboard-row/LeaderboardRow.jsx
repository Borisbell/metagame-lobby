export default function LeaderboardRow({id, position, name, level, points}) {
    return (
      <li className='lb_table-row'>
        <h3>{position}</h3>
        <h3>{name}</h3>
        <div className='button-widget'>
          <img className="widget-icon" src="src/assets/crown_big.svg"/>
          <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
            <div className='progress-bar_bg'></div>
            <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
          </div>
        </div>
      </li>
    );
  }