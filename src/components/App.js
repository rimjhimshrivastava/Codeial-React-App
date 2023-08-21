import {Home, Login, Signup} from '../pages';
import {Loader, Navbar} from './';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useAuth } from '../hooks';

function App() {
  const auth = useAuth();

  if(auth.loading){
    return <Loader/>;
  }

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/register" Component={Signup} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
