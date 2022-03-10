import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import RestaurantsDetails from './RestaurantsDetails';


function App() {
    return(
        <Router>
      <Header/>
      {/* <Home/>
      <RestaurantsDetails/> */}
      <main className='py-3'>
        <Container>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurants/:id' element={<RestaurantsDetails/>}/>
        </Routes>
        </Container>
      </main>
      </Router>
       
    )
  
}

export default App;
