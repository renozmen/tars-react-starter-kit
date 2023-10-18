import logo from './logo.svg';
// import test from './text.js'
import './style.css'

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
         {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV == "production" && (
        <>
          <img src='/logo192.png'></img>
          <hr></hr>
          <img src={logo} alt="" />
          test
        </>
      )}
    </div>
  );
}

export default App;
