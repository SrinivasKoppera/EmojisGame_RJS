// Write your code here.
import './index.css'

const NavBar = props => {
  const {result, score, topScore} = props

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h3 className="game-name">Emoji Game</h3>
      </div>
      {!result && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
