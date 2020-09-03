import React from 'react';
import Game from "./components/game/Game";
import mods from "./assets/imges/mods.png"
import subs from "./assets/imges/subs.png"
import trolls from "./assets/imges/trolls.png"
import follow from "./assets/imges/followers.png"
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
