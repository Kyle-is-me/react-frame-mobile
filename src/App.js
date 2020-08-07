import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


import Home from './views/Home';
import About from './views/About';
import Users from './views/Users';


function App() {
  return (
   <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* 使用switch的时候，path总是从头开始匹配url，所有的路由都有/，所以path='/'放在前面永远只能匹配到Home组件，所以我要特意把path='/'放到最后面。另一种方法是用<Route exact path='/'，这种方法就会匹配完整的URL */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
   </Router>
  );
}


// function Home(){
//   return <h2>Home</h2>
// }

// function About(){
//   return <h2>About</h2>
// }

// function Users(){
//   return <h2>Users</h2>
// }



export default App;
