import React from "react";

export default function TravelCard (props) {
    //console.log(props.destination)
    return (
        <div className="card-container">
        
            <div className="tour-img-wrapper">
            <img src={props.destination.imageUrl} alt="travel pic" 
            className="tour-img" />
            </div>
            
            <div className="textuals">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="country">{props.destination.location}</span>
                    <a className="location-link" href={props.destination.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="title">{props.destination.title}</h3>
                <div className="season"><span>{props.destination.startDate}</span> - 
                <span>{props.destination.endDate}</span>
                </div>
                <p className="description">{props.destination.description}</p>
            </div>
            
        </div>
    )
}