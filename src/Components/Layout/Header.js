import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";
const Header=()=>{
    return  (
        <>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Nav className="mx-auto"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <div className="border p-2 m-1" style={{ borderColor: '#007bff' }}>
              <Cart/>    
        </div>
      </Navbar>
      <div className="bg-secondary text-center p-4">
        <h1 className="text-light display-3 font-weight-bold">The Generics</h1>
      </div>
        </>
    )

}
export default Header