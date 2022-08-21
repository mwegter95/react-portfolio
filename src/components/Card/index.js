import React from 'react'

const Card = ({ item: {name, category, description, image, alt, link} }) => {
  return (
    <div style={{
        width: "25vw", 
        border: "1px solid white",
        padding: "1%",
        margin: "10px",
        borderRadius: "5px",
        }}>
        <h3>{name}</h3>
        <p>{category}</p>
        <img src={image} alt={alt}></img>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">{link}</a>
        
    </div>
  )
}

export default Card;