import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styleSheets/navBarStyle.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import ContentCard from "../contentCard";

export default { title: "SW-NewsMuzzler" };

export const newsMuzzlerPage = () => (
    <div>
        <Navbar className={'navbar-style'}  bg="light" variant="light">
            <Navbar.Brand href="#">Channels</Navbar.Brand>
            <Nav className="mr-auto">
                {/*<Nav.Link href="#">Home</Nav.Link>*/}
                {/*<Nav.Link href="#">Features</Nav.Link>*/}
                {/*<Nav.Link href="#">Pricing</Nav.Link>*/}
            </Nav>
            <Form inline className={'form-style'}>
                <FormControl type="text" placeholder="🔍 Search" className="mr-sm-2 input-form" />
            </Form>

            <div className={'bell-image'}>
                <svg className="bi bi-bell" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                    <path fill-rule="evenodd"
                          d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
            </div>

            <div>
                <img className={'profile-image'} src={'https://ca.slack-edge.com/TJ8BLJUMN-UHWUEGG10-8358a59801b9-512'} alt="asd" width="40" height="40"/>
            </div>
        </Navbar>
        <div >
            <ContentCard className={'contentCard'}/>
        </div>
    </div>
);