import { Link, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import SearchStudent from './SearchStudent';
import './index.css';
import Home from './Home';

import Register from './Register';
import Login from './Login';
export default function App() {
  return (
    <>
      <div className="overflow-hidden bg-sky-300 text-white text-xl font-bold">
        <div className="flex justify-between items-center mx-[3rem] h-[5rem] ">
          <div>Field Training</div>
          <div className="flex items-center justify-center gap-10  ">
            <NavLink
              to="/home"
              className=" px-8 h-[5rem] duration-200 hover:text-black "
              activeClassName="text-white bg-black  duration-200 app-nav  ">
              <div className="translate-y-5">Home</div>
            </NavLink>
            <NavLink
              to="/login"
              className=" px-8 h-[5rem] duration-200 hover:text-black "
              activeClassName="text-white bg-black  duration-200 app-nav  ">
              <div className="translate-y-5">Login</div>
            </NavLink>
            {/* NavLink is better than Link that it has activeClassName prop that activate when the route is active */}
            <NavLink
              to="/search-student"
              className="px-8 h-[5rem] duration-200 hover:text-black "
              activeClassName="text-red-500 bg-black duration-200 app-nav  ">
              <div className="translate-y-5">Search Student</div>
            </NavLink>
            <NavLink
              to="/register"
              className="px-8 h-[5rem] duration-200 hover:text-black "
              activeClassName="text-red-500 bg-black app-nav  duration-200   ">
              <div className="translate-y-5">Register</div>
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/search-student">
          <SearchStudent />
        </Route>
      </Switch>
    </>
  );
}
