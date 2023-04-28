import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './RoutesConfig';
import Header from './components/Header';
import Footer from "./components/Footer"

function App() {
  return (
    <Router>    
      <Header />
        <RoutesConfig />
      <Footer />
    </Router>
  );
}

export default App;
