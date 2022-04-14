import React from 'react'

const Gif= ({title,image_original_url}) => {
    title === "" ? title = "No hay título disponible" : title=title;
    return (
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
          <img className= "card-img-top" src={image_original_url} alt=""/>
            <div className="card-body">
            <h4 className="card-title">{title}</h4> 
            </div>
          </div>
        </div>
    )

}

export default Gif