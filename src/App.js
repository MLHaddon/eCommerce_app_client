import './App.css';
import Header from './views/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Browse from './views/Browse';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import Login from './views/Login';
import Signup from './views/Signup';
// import { Routes, Route, Router } from 'react';

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="ecommerce/home" element={ <Home/> } />
        <Route path="ecommerce/browse" element={ <Browse/> } />
        <Route path='ecommerce/cart' element={ <Cart /> } />
        <Route path="ecommerce/checkout" element={ <Checkout /> } />
        <Route path="ecommerce/login" element={ <Login/> } />
        <Route path="ecommerce/signup" element={ <Signup/> } />
      </Routes>
    </div>
  );
}

export default App;



// import Home from './views/Home';
// import About from './views/About';
// import Users from './views/Users';
// import Layout from './views/Layout';
// import NoPage from './views/NoPage';
// import './App.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import ProductPage from './views/ProductPage';
// // <Router>
// //   <Routes>
// //     <Route path="/" element={<Layout/>}>
// //       <Route index element={<Home />} />
// //       <Route path="about" element={<About />} />
// //       <Route path="users" element={<Users />} />
// //       <Route path="*" element={<NoPage />} />
// //     </Route>
// //   </Routes>
// // </Router>

// function App() {
//   return (
//     <Router>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="Home">Home</Nav.Link>
//               <Nav.Link href="Users">Users</Nav.Link>
//               <Nav.Link href="About">About</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Routes>
//         <Route path="/product_page" element={<ProductPage />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/browse" element={<Browse />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;
