import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Nav, NavDropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'

export let Mynavigation = () => {
    return (
        <>
            <Navbar expand='lg' bg='danger'>
                <NavbarBrand>MYNAVIGATIONS</NavbarBrand>
                <NavbarToggle></NavbarToggle>
                <NavbarCollapse>
                    <Nav className='ms-5'>
                        <Nav.Link href='/myhome'>HOME</Nav.Link>
                        <Nav.Link href='/about'>ABOUT</Nav.Link>
                        <Nav.Link href='/w3school'>Services</Nav.Link>
                        <NavDropdown title='MyDOWNPAGE'>
                            <NavDropdown.Item>ITEM1</NavDropdown.Item>
                            <NavDropdown.Item>ITEM2</NavDropdown.Item>
                            <NavDropdown.Item href='https://www.booking.com/?aid=348858&label=pc-in-booking-booking-sd-ipci'>BOOKING</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}