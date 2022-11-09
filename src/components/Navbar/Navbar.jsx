import React from 'react'
import { Icon } from "components"
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo2 from 'Assets/admin-logo-02.png';
import { navbarRoutesLink } from 'utils/commonutils';

export default function Navbar() {
  const location = useLocation();
  const [isMoboMenu, SetMoboMenu] = React.useState(false);
  document.addEventListener('mouseup', (e) => {
    try {
      const mobile_menu = document.getElementById('mobile_menu');
      if (isMoboMenu) {
        if (!mobile_menu.contains(e.target)) {
          SetMoboMenu(!isMoboMenu);
        } else {
          SetMoboMenu(false);
        }
      }
    } catch (err) {
    }
  });

  const isActive = React.useCallback((e) => {
    if (e && location?.pathname) {
      return e === location?.pathname;
    }else{
   return   false ;
    }
  }, [location?.pathname])


  return (
    <React.Fragment>
      <div className='fixed top-0 left-0 right-0 w-full z-[12]'>
        <div className="navbar bg-base-100 drop-shadow-md relative">
          <div className="navbar-start">
            <div className="dropdown">
              <label onClick={() => { !isMoboMenu ? SetMoboMenu(true) : SetMoboMenu(false) }} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
            </div>
            <span className="btn btn-ghost normal-case text-xl">
              <Icon className={'w-[160px] h-auto'} src={logo2} alt="loading..." /></span>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* FOR DESKTOP MAP */}
            <ul className="menu menu-horizontal p-0">
              {
                navbarRoutesLink?.map((routesLink, index) => (
                  <NavLink to={routesLink?.route_link} key={index} className={''} > <li className={isActive(routesLink?.route_link) ? ' border-b-2  border-primary-color  rounded-md' : ' border-b-2  border-transparent hover:border-primary-color rounded-md'}><span>{routesLink?.route_name}</span></li></NavLink>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          {/* in mobile view  */}
          <div className={` top-[65.5px] transition-all h-[90vh] absolute z-[1] ${isMoboMenu ? 'w-full' : 'w-0'} overflow-hidden bg-[#0303037f] lg:hidden mb:hidden block `}>
            <div className="bg-[#fff] w-[72%] h-[100vh] " id="mobile_menu">
              {
                navbarRoutesLink?.map((routesLink, index) => (
                  <NavLink key={index} to={routesLink?.route_link}  > <li className={` ${isActive(routesLink?.route_link) ? '  hover:bg-primary-color bg-primary-color ' : '' } py-1 pl-2  border-b rounded-sm list-none px-1 btn-ghost `}><span>{routesLink?.route_name}</span></li></NavLink>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </React.Fragment>
  )
}
