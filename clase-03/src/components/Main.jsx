import {Container, Row, Col, Button} from "react-bootstrap"


const Main = () =>{


    return(
        <main>
            <Container className="py-5 bg-light">
                <Row className="aling-items-center">
                    <Col md={6}>
                        <h2>Hola Mundo!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque?</p>
                        <Button variant="primary">Ingresar</Button>
                    </Col>
                    <Col>
                    <img src="https://picsum.photos/600/400" alt="asd" className="img-fluid rounded shadow" />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main;