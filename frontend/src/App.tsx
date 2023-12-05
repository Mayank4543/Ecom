import { Outlet } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

function App() {


  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>TS amazon</Navbar.Brand>
            </Container>
            <Nav>
              <a href="/cart" className="nav-link">Cart</a>

              <a href="/cart" className="nav-link">Sign in</a>
            </Nav>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Outlet />
          </Container>
        </main>
      </div>
    </>
  )
}

export default App
