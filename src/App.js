import './App.css';
import Navbar from './Components/Navigation'
import Title from './Components/Title'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Profile />
      <Login />
    </div>
  );
}

export default App;
