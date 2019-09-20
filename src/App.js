import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';

function Home(props) {
  return <h1>Home Component</h1>;
}
function Blog(props) {
  const {push} = props.history;
  return <><h1>Blog Component</h1> 
  <button onClick={() => push('/')}>back home</button></>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Link to ='/'>Home</Link>
        <Link to ='/blog'>Blog</Link>
        
        <Route exact path='/' component={Home} />
        <Route path='/blog' children={(props) => {
          return <h1>Blog!!!</h1>} 
       }/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
