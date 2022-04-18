import React from 'react'

const Main = (props) => {
  return (
    <div className="main">
      <div className='img__div'>
        <img src={props.imageUrl} className="main__img"/>
      </div>

      <div className="main__div">
        <div className='location__div'>
          <h4 className="main__location">{props.location}</h4>
          <a href={props.googleMapsUrl} className="main__map">View on Google Maps</a>
        </div>

        <div className='content__div'>
          <h1 className="main__title">{props.title}</h1>
          <span className="main__date">{props.startDate + " - " + props.endDate}</span>
          <p className="main__description">{props.description}</p>
        </div>
      </div>

    </div>
  )
}

export default Main