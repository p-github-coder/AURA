import { NavLink } from 'react-router-dom';
import '../css/nav.css';

function Navigation() {
  return (
    <section className="whole">
      <nav className="navigation-class">
        <div className="aura">
          <h1>AURA</h1>
        </div>

        <div>
          <ul className="list">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>

            <li>
              <NavLink to="/discover">Discover</NavLink>
            </li>

            <li>
              <NavLink to="/plan">Plan</NavLink>
            </li>

            <li>
              <NavLink to="/signin">
                <button className="nav_button">Sign in</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;