import Team from "./components/team/Team"
import ScoreBoard from "./components/scoreboard/Scoreboard"
import React from "react"
import mods from "./assets/imges/mods.png"
import subs from "./assets/imges/subs.png"
import trolls from "./assets/imges/trolls.png"
import follow from "./assets/imges/followers.png"

class Game extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        resetCount: 0,
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }
  
      this.shotSound = new Audio('./assets/sounds/1.wav')
      this.scoreSound = new Audio('./assets/sounds/2.wav')
    }
  
    shoot = (team) => {
      const teamStatsKey = `${team}TeamStats`
      let score = this.state[teamStatsKey].score
      this.shotSound.play()
  
      if (Math.random() > 0.5) {
        score += 1
  
        setTimeout(() => {
          this.scoreSound.play()
        }, 100)
      }
  
      this.setState((state, props) => ({
        [teamStatsKey] : {
          shots: state[teamStatsKey].shots + 1,
          score
        }
      }))
    }
  
    resetGame = () => {
      this.setState((state, props) => ({
        resetCount: state.resetCount + 1,
        homeTeamStats: {
          shots: 0,
          score: 0
        },
        visitingTeamStats: {
          shots: 0,
          score: 0
        }
      }))
    }
  
    render() {
      return (
        <div className="Game">
          <ScoreBoard
            visitingTeamStats={this.state.visitingTeamStats}
            homeTeamStats={this.state.homeTeamStats}
          />
  
          <h1>Welcome to {this.props.venue}</h1>
          <div className="stats">
            <Team
              name={this.props.visitingTeam.name}
              logo={this.props.visitingTeam.logoSrc}
              stats={this.state.visitingTeamStats}
              shotHandler={() => this.shoot('visiting')}
            />
  
            <div className="versus">
              <h1>VS</h1>
              <div>
                <strong>Resets:</strong> {this.state.resetCount}
                <button onClick={this.resetGame}>Reset Game</button>
              </div>
            </div>
  
            <Team
              name={this.props.homeTeam.name}
              logo={this.props.homeTeam.logoSrc}
              stats={this.state.homeTeamStats}
              shotHandler={() => this.shoot('home')}
            />
          </div>
        </div>
      )
    }
  }
  
  function App(props) {
    const raccoons = {
      name: 'Russiaville Raccoons',
      logoSrc: follow
    }
  
    const squirrels = {
      name: 'Sheridan Squirrels',
      logoSrc: mods
    }
  
    const bunnies = {
      name: 'Burlington Bunnies',
      logoSrc: subs
    }
  
    const hounds = {
      name: 'Hammond Hounds',
      logoSrc: trolls
  
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

  export default Game