import {Container, Row, Col, Card, Carousel} from "react-bootstrap"

const Gallery = () =>{
    const imagenes = ["https://picsum.photos/300/200?1","https://picsum.photos/300/200?2","https://picsum.photos/300/200?3","https://picsum.photos/300/200?4"]

    return(
        <section id="gallery" className="py-4">
            <Container>
                <h2 className="text-center mb-4">Galeria</h2>
                
                <Row>
                    {imagenes.map((src,index)=>(
                        <Col key={index} md={3} sm={6} className=" mb-4">
                            <Card className="shadow-sm bg-light text-center">
                                <Card.Img  variant="top" src={src} alt={`Imagen ${index + 1}`}/>
                                <Card.Body>
                                    <Card.Text>
                                        Imagen {index + 1}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
              
            </Container>
            
        </section>
    )
}

export default Gallery;