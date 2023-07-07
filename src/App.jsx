import { useState } from 'react'
import Button from './button/Button'
import LevelWidget from './LevelWidget/LevelWidget'
import EnergyWidget from './EnergyWidget/EnergyWidget'
import SecondaryButton from './secondary-button/SecondaryButton'
import LeaderboardTable from './leaderboard/leaderboard-table/LeaderboardTable'
import LeaderboardRow from './leaderboard/leaderboard-row/LeaderboardRow'
import './App.css'

function App() {
  const [LBIsShown, setLBIsShown] = useState(true)
  const [isSoundOn, setIsSoundOn] = useState(true)
  const [isFullscreenOn, setFullscreenOn] = useState(false)

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

  return (
    <>
      <div className="widgets">
        <div className="widgets_leftside">
          <Button img_url={'src/assets/arrow_back.svg'}/>
          <LevelWidget toggleLeaderBoard={toggleLeaderBoard}/>
          <Button img_url={'src/assets/wardrobe.svg'}/>
        </div>
        <div className="widgets_rightside">
          <EnergyWidget/>
          <div className='widget_controlls'>
            <SecondaryButton toggle={isSoundOn}
                             img_url={"src/assets/sound-on.svg"}
                             img_url2={"src/assets/sound-off.svg"}
                             toggleFunction={toggleSound}
            />
            <SecondaryButton toggle={isFullscreenOn}
                             img_url={"src/assets/fullscreen.svg"}
                             img_url2={"src/assets/fullscreen-off.svg"}
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
