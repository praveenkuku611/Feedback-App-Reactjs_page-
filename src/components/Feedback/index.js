import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack: false}

  onChangeClick = () => {
    this.setState(prevState => ({isFeedBack: !prevState.isFeedBack}))
  }

  emojiPage = () => {
    const {resources, key} = this.props
    const {emojis} = resources
    return (
      <div>
        <div className="text-container">
          <h1 className="mainPara">
            How satisfied are you with our customer support performance?
          </h1>
        </div>

        <ul className="emoji-container">
          {emojis.map(eachItem => (
            <li className="emojiItem" key={eachItem.id}>
              <img
                src={eachItem.imageUrl}
                alt={eachItem.name}
                onClick={this.onChangeClick}
              />
              <p className="emojiPara">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  lovePage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="loveImageContainer">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          {isFeedBack ? this.lovePage() : this.emojiPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
