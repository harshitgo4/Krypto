import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Coins from './components/Coins.jsx';
import Coindetails from './components/CoinDetails.jsx';
import Exchange from './components/Exchange.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Dooter.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/coins' element={<Coins/>}></Route>
      <Route path='/coin/:id' element={<Coindetails/>}></Route>
      <Route path='/exchange' element={<Exchange/>}></Route>
     
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
