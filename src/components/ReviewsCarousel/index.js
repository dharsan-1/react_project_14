import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {statusData: 0}

  onClickRightSide = () => {
    const {reviewsList} = this.props
    const {statusData} = this.state
    if (statusData < reviewsList.length - 1) {
      this.setState(prevState => ({statusData: prevState.statusData + 1}))
    }
  }

  renderDetailsDiv = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="portfolio_div">
        <img src={imgUrl} alt="img_protfolio" />
        <h1 className="h1-name">{username}</h1>
        <h2 className="h2-job">{companyName}</h2>
        <p className="para-des">{description}</p>
      </div>
    )
  }

  onClickleft = () => {
    const {statusData} = this.state
    if (statusData > 0) {
      this.setState(prevState => ({statusData: prevState.statusData - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {statusData} = this.state
    const filteredData = reviewsList[statusData]
    return (
      <div className="background_1">
        <h1 className="heading-css">Review</h1>
        <button
          type="button"
          onClick={this.onClickRightSide}
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left_button"
          />
        </button>
        {this.renderDetailsDiv(filteredData)}
        <button
          type="button"
          onClick={this.onClickleft}
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right_button"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
