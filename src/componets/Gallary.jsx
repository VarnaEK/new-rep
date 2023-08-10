import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Gallery.css'

const Gallary = () => {
    const [image, setimage] = useState([])

    useEffect(() => {
        const fetchImages = () =>{
            const data=[
                {id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmtSo_YvfaNkoYTUvDNrTMyqUeo8pYF80kg&usqp=CAU",title:"image1"},
                {id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2LAByC7aew25_CRdtj-bYza02xhnNRajog&usqp=CAU",title:"image2"},
                {id:3,url:"https://img.etimg.com/photo/msid-93619818,imgsize-70268/AppleLaptops.jpg",title:"image3"},
                {id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHjM36txZMgvKi5cnl4kmrvvM02Br2ltYoy5kLD3abSSvTAA-ndZREXZC8fu_JO0S1dI&usqp=CAU",title:"image4"},
                {id:5,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmtSo_YvfaNkoYTUvDNrTMyqUeo8pYF80kg&usqp=CAU",title:"image1"},
                {id:6,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2LAByC7aew25_CRdtj-bYza02xhnNRajog&usqp=CAU",title:"image2"},
                {id:7,url:"https://img.etimg.com/photo/msid-93619818,imgsize-70268/AppleLaptops.jpg",title:"image3"},
                {id:8,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHjM36txZMgvKi5cnl4kmrvvM02Br2ltYoy5kLD3abSSvTAA-ndZREXZC8fu_JO0S1dI&usqp=CAU",title:"image4"},
            ]
            setimage(data)
        }
        fetchImages()
    }, [])
    
    const handleDeleteImage = (id) =>{
        setimage(image.filter((img)=>img.id !== id))
    }
  return (
    <div>
        <h1 className='text-center'>Image Gallery app</h1>
        {image.map((i)=>{
            return(
                <div className='card-div' key={i.id}>
                    <Card style={{ width: '18rem' }} className='img-card'>
                    <Card.Img variant="top" src={i.url}  style={{height:"200px"}}/>
                    <Card.Body>
                        <div className='d-flex img-txt'>
                            <Card.Text>{i.title}</Card.Text>
                            <Button onClick={()=>handleDeleteImage(i.id)} variant="danger">Delete</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            )
        })}
       
    </div>
  )
}

export default Gallary