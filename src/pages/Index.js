import React from 'react';
import { Link } from "react-router-dom"

function Index(props) {
  const loaded = () => {
    return props.culture.map((cult) => (
      <div key={cult._id} className="cult">
        <Link to={`/culture/${cult._id}`}>
          <h1>{cult.name}</h1>
        </Link>
        <img src={cult.url} alt={cult.name} />
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.culture ? loaded() : loading()
}

export default Index