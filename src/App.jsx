import { useState } from 'react'
import SecondaryButton from './secondary-button/SecondaryButton'
import './App.css'

function App() {
  const [LBIsShown, setLBIsShown] = useState(true)

  function toggleLeaderBoard(){
    setLBIsShown(LBIsShown => !LBIsShown)
  }

  return (
    <>
      <div className="widgets">
        <div className="widgets_leftside">
          <button className='button-style'>
            <img src="src/assets/arrow_back.svg"/>
          </button>
          <div className='button-style button-widget' onClick={toggleLeaderBoard}>
            <img className="widget-icon" src="src/assets/crown_big.svg"/>
            <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
              <div className='progress-bar_bg'></div>
              <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
            </div>
            <img className="widget-icon " src="src/assets/chest.svg"/>
          </div>
          <button className='button-style'>
            <img src="src/assets/wardrobe.svg"/>
          </button>
        </div>
        <div className="widgets_rightside">
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
          <div className='widget_controlls'>
            <SecondaryButton img_url={"src/assets/sound-on.svg"}/>
            <SecondaryButton img_url={"src/assets/fullscreen.svg"}/>
          </div>
        </div>
      </div>
      { LBIsShown &&
        <div className='widget-leaderboard'>
          <h2>Лидеры</h2>
          <ul className='lb_table'>
            <li className='lb_table-row'>
              <h3>1</h3>
              <h3>Вильгельмина</h3>
              <div className='button-widget'>
                <img className="widget-icon" src="src/assets/crown_big.svg"/>
                <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
                  <div className='progress-bar_bg'></div>
                  <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
                </div>
              </div>
            </li>
            <li className='lb_table-row'>
              <h3>1</h3>
              <h3>Вильгельмина</h3>
              <div className='button-widget'>
                <img className="widget-icon" src="src/assets/crown_big.svg"/>
                <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
                  <div className='progress-bar_bg'></div>
                  <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
                </div>
              </div>
            </li>
            <li className='lb_table-row'>
              <h3>1</h3>
              <h3>Вильгельмина</h3>
              <div className='button-widget'>
                <img className="widget-icon" src="src/assets/crown_big.svg"/>
                <div className='progress-bar_wrapper progress-bar_wrapper-lvl'>
                  <div className='progress-bar_bg'></div>
                  <div className='progress-bar_indicator progress-bar_indicator-pink'></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

export default App
