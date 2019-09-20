import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';

const users = 
[{id: 1, name: "Emily"},
{id: 2, name: "Anna"},
{id: 3, name: 'Rory'}]

const fetchUser = id => Promise.resolve(
  users.find(user => user.id == id)
)

const User = props => {
  const {id} = props.match.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(user => setUser(user));
  }, [id])

  if (!user) return <div>Fetching User...</div>
  return (<div>This is the {user.name}</div>)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/users/1'>User 1</Link>
          <Link to='/users/2'>User 2</Link>
          <Link to='/users/3'>User 3</Link>

          <Route path='/users/:id' component={User}/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
