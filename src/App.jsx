import { useState, useEffect } from 'react'
import useSound from 'use-sound';
import sound from './assets/bg-music.mp3';
// images import
import backbutton_icon from './assets/arrow_back.svg';
import wardrobe_icon from './assets/wardrobe.svg';
import sound_on_icon from './assets/sound-on.svg';
import sound_off_icon from './assets/sound-off.svg';
import fullscreen_on_icon from './assets/fullscreen.svg';
import fullscreen_off_icon from './assets/fullscreen-off.svg';
// components import
import Button from './button/Button'
import LevelWidget from './LevelWidget/LevelWidget'
import EnergyWidget from './EnergyWidget/EnergyWidget'
import SecondaryButton from './secondary-button/SecondaryButton'
import LeaderboardTable from './leaderboard/leaderboard-table/LeaderboardTable'
import LeaderboardRow from './leaderboard/leaderboard-row/LeaderboardRow'
import './App.css'

function App() {
  const [play, { stop }] = useSound(sound);
  const [LBIsShown, setLBIsShown] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [isFullscreenOn, setFullscreenOn] = useState(true)

  function toggleLeaderBoard(){
    setLBIsShown(LBIsShown => !LBIsShown)
  }

  function toggleSound(){
    setIsSoundOn(isSoundOn => !isSoundOn)
  }

  function toggleFullScreen(){
    setFullscreenOn(isFullscreenOn => !isFullscreenOn)
    if (isFullscreenOn) {
      document.documentElement.requestFullscreen();
    } else if (!isFullscreenOn) {
      document.exitFullscreen();
    }
  }
  
  useEffect(() => {
    isSoundOn ? play() : stop();
  }, [isSoundOn]);

  return (
    <>
      <div className="widgets">
        <div className="widgets_leftside">
          <Button img_url={backbutton_icon}/>
          <LevelWidget toggleLeaderBoard={toggleLeaderBoard}/>
          <Button img_url={wardrobe_icon}/>
        </div>
        <div className="widgets_rightside">
          <EnergyWidget/>
          <div className='widget_controlls'>
            <SecondaryButton toggle={isSoundOn}
                             img_url={sound_on_icon}
                             img_url2={sound_off_icon}
                             toggleFunction={toggleSound}
            />
            <SecondaryButton toggle={isFullscreenOn}
                             img_url={fullscreen_on_icon}
                             img_url2={fullscreen_off_icon}
                             toggleFunction={toggleFullScreen}
            />
          </div>
        </div>
      </div>
      { LBIsShown &&
        <div className='widget-leaderboard'>
          <h2>Лидеры</h2>
          <LeaderboardTable>
            <LeaderboardRow position='1' name='Вильгельмина'/>
            <LeaderboardRow position='2' name='Аристотель'/>
            <LeaderboardRow position='2' name='Аристотель'/>
            <LeaderboardRow position='2' name='Аристотель'/>
          </LeaderboardTable>
        </div>
      }
    </>
  )
}

export default App
