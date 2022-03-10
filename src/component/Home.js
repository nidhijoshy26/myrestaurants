import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Restaurants from './Restaurants'


function Home() {

    const [hotel,setHotel]= useState([])
    const [filter,setFilter]= useState("")

    useEffect(()=>{
        const getData= async()=>{
            await fetch('./restaurants.json') // using "fetch" we fetch the data from the restaurants that has the data in it , async and await are the aditionoal things used for handling promises 
            .then((response)=>response.json()) // the data we got from the restaurants is parsed into json type.. we can give any name instead of response
            .then((data)=>setHotel(data.restaurants)  ) // the data that got parsed in assiged to "Hotel" that we created 
        }
        getData();

    },[])
    // console.log("our data is", hotel);
    
  return (
    <>
    <Row>
        <input type="search"placeholder='search here' value={filter} onChange={event=> setFilter(event.target.value)}/>
        {hotel? (
            hotel.filter(item => {
                if(filter === ""){
                    return item

                }
                else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
                    return item
                }
                else if(item.name.toLowerCase().includes(filter.toLowerCase())){
                    return item
                }
                else if(item.cuisine_type.toLowerCase().includes(filter.toLowerCase())){
                    return item
                }

         
                })
        )
            
             .map((item)=>
                <Col sm={12} md={8} lg={6} xl={3} >
                   <Restaurants item={item}/>
                </Col>                
              ): ("error")
        }
    </Row>
</>
  )
}

export default Home