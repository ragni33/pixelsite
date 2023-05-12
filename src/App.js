// import './App.css';
// import Cards from './Components/Home/Cards';
// import Cookies from './Components/Home/Cookies';
// import Designs from './Components/Home/Designs';
// import Footer from './Components/Home/Footer';
// import Header from './Components/Home/Header';
// import Partnerstech from './Components/Home/Partnerstech';
// import Testimonial from './Components/Home/Testimonial';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Blog from './Blog/Blog';





// function App() {
//   return (
//  <>
//   <Header />
//   <Designs />
//    <Cards />
//    <Cookies />
//    <Partnerstech />
//    <Testimonial />
//    <Footer />
//    <Blog />

//    <Router>   
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/blog" component={Blog} />
//         </Switch>
//     </Router>

  

//    </>
//   );
// }
// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';
// import Blog from './Components/Blog';
// import About from './Components/About';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route exact path="/" />
//           <Route path="/about" element={<About/>} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Blog from './Components/Blog';
import About from './Components/About';
import Footer from './Components/Footer';
import Designs from './Components/Designs';
import Cards from './Components/Cards';
import Partnerstech from './Components/Partnerstech';
import Testimonial from './Components/Testimonial';
import Cookies from './Components/Cookies';


function Home() {
  return (
    <div>
      
      <Designs />
      <Cards />
      <Cookies />
      <Partnerstech />
      <Testimonial />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
