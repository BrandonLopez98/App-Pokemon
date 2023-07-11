import './App.css';
import { Route,useLocation } from 'react-router-dom'
import LandingPage from './componets/Landing/Landing';
import Nav from './componets/Nav/Nav'
import About from './componets/About/About'
import Form from './componets/Form/Form'
import Detail from './componets/Detail/Detail'
import Home from './componets/Home/Home'




function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname === '/' ? <LandingPage /> : <Nav/>}
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/create' component={Form} />
      <Route path='/detail/:detail' component={Detail} />
    </div>
  );
}

export default App;
