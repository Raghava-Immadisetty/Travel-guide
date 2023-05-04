import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelGuide from './components/TravelGuide'

import './App.css'

class App extends Component {
  state = {isLoading: false, travelGuide: []}

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    this.setState({
      isLoading: true,
    })
    const response = await fetch('https://apis.ccbp.in/tg/packages')

    const data = await response.json()

    const formattedData = data.packages.map(item => ({
      id: item.id,
      description: item.description,
      imageUrl: item.image_url,
      name: item.name,
    }))
    this.setState({travelGuide: formattedData, isLoading: false})
  }

  renderLocationsList = () => {
    const {travelGuide} = this.state
    return (
      <ul className="list-container">
        {travelGuide.map(item => (
          <TravelGuide key={item.id} travel={item} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="travel-cards-container">
          <h1>Travel Guide</h1>
          {isLoading ? (
            <div data-testid="loader" className="load-container">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            this.renderLocationsList()
          )}
        </div>
      </div>
    )
  }
}

export default App
