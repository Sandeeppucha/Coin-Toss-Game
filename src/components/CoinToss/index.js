// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',

    headsCount: 0,
    tailsCount: 0,
  }

  onFlipCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImageResult = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (toss === 0) {
      tossImageResult = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      updatedHeadsCount += 1
    } else {
      tossImageResult = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      updatedTailsCount += 1
    }

    this.setState({
      tossImage: tossImageResult,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="result"> Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="coin" />
          <button
            type="button"
            onClick={this.onFlipCoin}
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
