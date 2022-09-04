import CartWidget from "./CartWidget"
import {Container, Nav, Navbar, NavDropdown, Button, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Category from "./Category";

const NavBar = ({nameEcomerce}) =>{
    return(
        <div className='nav-container'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">{nameEcomerce}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                            <Link to='/category/ropa' element={<Category ropa={Attr.to}/>} >Ropa</Link>
                            
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Joyas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Tecnologia
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex nav-form">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                
            {/* <Navbar  expand="lg">
                <Container className='rb-nav-cont'>
                    <Navbar.Brand href="#home">{nameEcomerce}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div className="nav-input-cont">
                        <input type="text"></input>
                    </div>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container> */}
            <CartWidget />
            </Navbar>
        </div>
    )
}

export default NavBar