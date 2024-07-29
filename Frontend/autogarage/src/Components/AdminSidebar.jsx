import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Styles/Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className={`page-header ${isCollapsed ? 'collapsed' : ''}`}>
      <nav>
        <a href="#0" aria-label="forecastr logo" className="logo">
          <svg width="140" height="49">
            <use xlinkHref="#logo"></use>
          </svg>
        </a>
        <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
          <svg width="20" height="20" aria-hidden="true">
            <use xlinkHref="#down"></use>
          </svg>
        </button>
        <ul className={`admin-menu ${isCollapsed ? 'collapsed' : ''}`}>
          <li className="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#pages"></use>
              </svg>
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#users"></use>
              </svg>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#trends"></use>
              </svg>
              <span>Trends</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#collection"></use>
              </svg>
              <span>Collection</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#comments"></use>
              </svg>
              <span>Comments</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#appearance"></use>
              </svg>
              <span>Appearance</span>
            </a>
          </li>
          <li className="menu-heading">
            <h3>Settings</h3>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#settings"></use>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#options"></use>
              </svg>
              <span>Options</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <svg>
                <use xlinkHref="#charts"></use>
              </svg>
              <span>Charts</span>
            </a>
          </li>
          <li>
            <div className="switch">
              <input type="checkbox" id="mode" defaultChecked />
              <label htmlFor="mode">
                <span></span>
                <span>Dark</span>
              </label>
            </div>
            <button
              className="collapse-btn"
              aria-expanded={isCollapsed}
              aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
              onClick={handleCollapseToggle}
            >
              <svg aria-hidden="true" width="20" height="20">
                <use xlinkHref={isCollapsed ? "#expand" : "#collapse"}></use>
              </svg>
              <span>{isCollapsed ? 'Expand' : 'Collapse'}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
