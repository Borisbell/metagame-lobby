import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="widgets">
          <div className="widgets_leftside">
            <button className='button-style'>
              <img src="src/assets/arrow_back.svg"/>
            </button>
            <div className='button-style button-widget'>
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
              <button className='button-secondary'>
                <img src="src/assets/sound-on.svg"/>
              </button>
              <button className='button-secondary'>
                <img src="src/assets/fullscreen.svg"/>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
