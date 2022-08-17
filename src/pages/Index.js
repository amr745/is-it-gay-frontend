import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Index(props) {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }
  
  const loaded = () => {
    return (
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <Container>
            <Row className="row">
                {props.culture.map((cult) => (
                    <Col key={cult._id} md="12" lg="4" className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={cult.url} />
                            <Card.Body>
                                <Card.Title>{cult.name}</Card.Title>
                                <Card.Text>{cult.description}</Card.Text>
                                <p onClick={increment}>
                                  <span alt="thumbs up emoji">👍</span>
                                  <span>{cult.vote || count}</span>
                                </p>
                                <a style={{}}href={`/#/culture/${cult._id}`} className="btn btn-primary">Why it's Gay!</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
      </div>
    )
  }
      
      
      
      
      
      
      
      
      
      
      
      
      
//       <div className="card" key={cult._id}>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={cult.url} />
//       <Card.Body>
//         <Card.Title>{cult.name}</Card.Title>
//         <Card.Text>{cult.reason}</Card.Text>
//         <p onClick={increment}>
//           <span>👍</span>
//           <span>{cult.vote || count}</span>
//         </p>
//         <a href={`/culture/${cult._id}`} className="btn btn-primary">Go somewhere</a>
//       </Card.Body>
//     </Card>
//     </div>
//   ))
// }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.culture ? loaded() : loading()
}

export default Index