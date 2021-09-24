import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './sidebar.css';
import arrow from '../../assets/images/arrow-right1.png';
import arrow1 from '../../assets/images/arrow-right2.png';

const Sidebar = () => {
  const [show, toggleShow] = React.useState(false);
  const [show1, toggleShow1] = React.useState(false);
  const [show2, toggleShow2] = React.useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(window.location.pathname);
    if (
      window.location.pathname === '/milestoneview' ||
      window.location.pathname === '/partnershipview' ||
      window.location.pathname === '/coverageview' ||
      window.location.pathname === '/imagegalleryview' ||
      window.location.pathname === '/videosview' || 
      window.location.pathname === '/mediakitview'
    ) {
      // toggleShow1(true);
      // toggleShow(false);
    }
  }, []);

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <div className='head' onClick={() => toggleShow(!show)}>
            <label>Home</label>
            {!show && (
              <span>
                <img src={arrow} alt='arrow' />
              </span>
            )}
            {show && (
              <span>
                <img src={arrow1} alt='arrow' />
              </span>
            )}
          </div>
          {show && (
            <div className='head-list'>
              <Link
                className={`${active === "/networkview"  && "active"}`}
                to="/networkview"
              >
                Network
              </Link>
              <Link
                className={`${active === '/newsview' && 'active'}`}
                to='/newsview'
              >
                News
              </Link>
            </div>
          )}
        </li>
        <li>
          <div className='head' onClick={() => toggleShow1(!show1)}>
            <label>About Us</label>
            {!show1 && (
              <span>
                <img src={arrow} alt='arrow' />
              </span>
            )}
            {show1 && (
              <span>
                <img src={arrow1} alt='arrow' />
              </span>
            )}
          </div>
          {show1 && (
            <div className='head-list'>
              <Link
                to='/milestoneview'
                className={`${active === '/milestoneview' && 'active'}`}
              >
                Milestone
              </Link>
              <Link
                to='/partnershipview'
                className={`${active === '/partnershipview' && 'active'}`}
              >
                Partnership
              </Link>
            </div>
          )}
        </li>
        <li>
          <div className='head' onClick={() => toggleShow2(!show2)}>
            <label>Media</label>
            {!show2 && (
              <span>
                <img src={arrow} alt='arrow' />
              </span>
            )}
            {show2 && (
              <span>
                <img src={arrow1} alt='arrow' />
              </span>
            )}
          </div>
          {show2 && (
            <div className='head-list'>
              <Link
                to='/coverageview'
                className={`${active === '/coverageview' && 'active'}`}
              >
                Coverage
              </Link>
              <Link
                to='/imagegalleryview'
                className={`${active === '/imagegalleryview' && 'active'}`}
              >
                Image Gallery
              </Link>
              <Link
                to='/videosview'
                className={`${active === '/videosview' && 'active'}`}
              >
                Videos
              </Link>
              <Link
                to='/mediakitview'
                className={`${active === '/mediakitview' && 'active'}`}
              >
                Media Kit
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
