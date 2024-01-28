'use client'

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function NavBar(){
    // const router = useRouter();
    const pathName = usePathname();
    // useSearchParams();
return (
<>
    <Navbar expand="sm" bg='primary' variant='dark' sticky='top' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link}>Next.js image gallery </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navBar" />
        <Navbar.Collapse id="main-navBar">
          <Nav>
            <Nav.Link href="/static" as={Link} active={pathName === '/static'}>Static</Nav.Link>
            <Nav.Link href="/dynamic" as={Link} active={pathName === '/dynamic'}>Dynamic</Nav.Link>
            <Nav.Link href="/isr" as={Link} active={pathName === '/isr'}>ISR</Nav.Link>
            <NavDropdown title="Topics" id="topic-dropdown">
              <NavDropdown.Item href="/topics/health" as={Link}>Health</NavDropdown.Item>
              <NavDropdown.Item href="/topics/place" as={Link}>Place</NavDropdown.Item>
              <NavDropdown.Item href="/topics/coding" as={Link}>Coding</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/search" active={pathName === "/search"}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
)
}