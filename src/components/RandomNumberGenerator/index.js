// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerateNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <div>
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <div className="btn-container">
              <button
                className="button"
                type="button"
                onClick={this.onGenerateNumber}
              >
                Generate
              </button>
            </div>
            <p className="count">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
