import React from 'react';
import Game from "./components/game/Game";
import mods from "./assets/images/mods.png"
import subs from "./assets/images/subs.png"
import trolls from "./assets/images/trolls.png"
import follow from "./assets/images/followers.png"
import './App.css';

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: mods
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: subs
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: trolls
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: follow
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
