// import logo from './logo.svg';
import store from './Redux/store'
import { MyRouter } from "./components/router"
import NavbarPage from "./components/navbar"
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SimpleMap from './components/map'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavbarPage></NavbarPage>
          <MyRouter>
          </MyRouter>
        </Router>
      </Provider>
      {/* <SimpleMap></SimpleMap> */}
    </div>
  );
}

export default App;
