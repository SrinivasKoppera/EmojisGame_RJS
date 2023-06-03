// Write your code here.
import './index.css'

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinOrLossCard = props => {
  const {score, playAgain} = props
  const resultImage = score < 12 ? lossImage : wonImage
  const resultText = score < 12 ? 'Lose' : 'Won'
  const scoreText = score < 12 ? null : 'Best'

  return (
    <div className="result-container">
      <div className="win-and-loss-container">
        <div className="win-or-loss-img-container">
          <img src={resultImage} alt="win or lose" className="result-img" />
        </div>
        <div className="text-container">
          <h1 className="result-status">You {resultText}</h1>
          <p className="score-status">{scoreText} Score</p>
          <p className="got-score">{score}/12</p>
          <button type="button" className="play-again-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}
export default WinOrLossCard
