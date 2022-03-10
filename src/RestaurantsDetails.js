import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import Rating from './component/Rating';


function RestaurantsDetails() {


  const [data, setData] = useState([])
  const params = useParams()
  const { id } = params

  useEffect(() => {
    const getData = async () => {
      await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((data) => setData(data.restaurants))
    }
    getData()

  }, [])

  const details = data.find((i) => i.id == id)
  //console.log("the id is", id)
 // console.log("details are", details)




  return (
    <>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image className='img' src={details.photograph} alt={details.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h2>{details.name}</h2>
              <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Cuisine</h5>
              <p className='ms-5'>{details.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Address</h5>
              <p>{details.address}</p>
              <ListGroup.Item>
                <h5>Latlng</h5>
                <p className='ms-5'>lat{details.latlng.lat}</p>
                <p className='ms-5'>lng{details.latlng.lng}</p>
              </ListGroup.Item>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h4>Operating Hours: </h4>
              <p> Monday : {details.operating_hours.Monday}</p>
              <p> Tuesday : {details.operating_hours.Tuesday}</p>
              <p> Wednesday : {details.operating_hours.Wednesday}</p>
              <p> Thursday : {details.operating_hours.Thursday}</p>
              <p> Friday : {details.operating_hours.Friday}</p>
              <p> Saturday : {details.operating_hours.Saturday}</p>
              <p> Sunday : {details.operating_hours.Sunday}</p>
            </ListGroup.Item>
          </Col>
          <Row>
            <Card className="my-3 mx-3 p-3 rounded card">
              <Rating data={details.reviews} />
            </Card>
          </Row>
        </Row>
       ) : null}

       <Link className='btn btn-outline-secondary rounded bt-sm' to='/'>Back</Link>
    </>
  );
}

export default RestaurantsDetails;
