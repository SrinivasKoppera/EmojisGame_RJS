// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, countClickableEmojis} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickOnEmoji = () => {
    countClickableEmojis(id)
  }
  return (
    <li className="emoji-list" onClick={onClickOnEmoji}>
      <button type="button" className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
