// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], result: false, score: 0, topScore: 0}

  countClickableEmojis = id => {
    const {emojisList} = this.props
    const lengthOfList = emojisList.length
    this.setState(prevState => {
      const isIncludesInList = prevState.clickedEmojisList.includes(id)
      if (isIncludesInList === false && prevState.score < lengthOfList) {
        return {
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          score: prevState.score + 1,
        }
      }
      const highestScore =
        prevState.topScore > prevState.score
          ? prevState.topScore
          : prevState.score
      //   console.log(highestScore)
      return {topScore: highestScore, result: true}
    })
  }

  playAgain = () => {
    this.setState({clickedEmojisList: [], score: 0, result: false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()

    const {score, topScore} = this.state
    const emojis = (
      <ul className="emoji-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            countClickableEmojis={this.countClickableEmojis}
          />
        ))}
      </ul>
    )
    const {result} = this.state
    let showingResult = emojis

    if (result === true || score === shuffledEmojisList.length) {
      showingResult = <WinOrLossCard score={score} playAgain={this.playAgain} />
    }
    return (
      <div className="bg-container">
        <NavBar result={result} score={score} topScore={topScore} />
        <div>{showingResult}</div>
      </div>
    )
  }
}

export default EmojiGame
