import {Navbar, Nav, Container} from "react-bootstrap"


const Navigation = () =>{


return(
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand>Talento Tech 2025</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className="ms-auto">
                <nav>
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#gallery">Galeria</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </nav>
            </Nav>
            
        </Navbar.Collapse>  
        </Container>
    </Navbar>
    )
}

export default Navigation;