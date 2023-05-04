import './index.css'

const TravelGuide = props => {
  const {travel} = props
  const {imageUrl, description, name} = travel
  return (
    <li className="card-container">
      <img src={imageUrl} alt={name} className="img" />
      <div className="description-container">
        <h3 className="heading">{name}</h3>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelGuide
