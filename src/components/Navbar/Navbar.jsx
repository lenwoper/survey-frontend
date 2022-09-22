import React from 'react'
import { Button ,Icon } from "components"
import { NavLink , Outlet} from "react-router-dom";
import logo2 from 'Assets/admin-logo-02.png';
import { navbarRoutesLink } from 'utils/commonutils';
export default function Navbar() {
  const [isMoboMenu, SetMoboMenu] = React.useState(false);
  document.addEventListener('mouseup',(e) => {
    try {
      const mobile_menu = document.getElementById('mobile_menu');
      if(isMoboMenu){
      if (!mobile_menu.contains(e.target)) {
        SetMoboMenu(!isMoboMenu);
      }else{
        SetMoboMenu(false);
      }
    }
    } catch (err) {
      console.log(err);
    }
  })
  return (
    <React.Fragment>
      <div className="navbar bg-base-100 drop-shadow-md relative">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={() =>{!isMoboMenu ? SetMoboMenu(true):SetMoboMenu(false)}} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
          <span className="btn btn-ghost normal-case text-xl"> 
           <Icon className={'w-[160px] h-auto'} src={logo2} alt="loading..."/></span>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* FOR DESKTOP MAP */}
          <ul className="menu menu-horizontal p-0">
            {
              navbarRoutesLink?.map((routesLink , index )=>(
                <NavLink to={routesLink?.route_link} key={index} className={(isActive) => isActive ? ' border-b-2 border-transparent hover:border-primary-color rounded-md' : ''} > <li className=""><span>{routesLink?.route_name}</span></li></NavLink>
              ))
            }
         </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none gap-2">
            {
              true ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" alt="loading..." />
                    </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <span className="justify-between">
                        Profile
                        <span className="badge bg-primary-color">New</span>
                      </span>
                    </li>
                    <li className=""><span >Settings</span></li>
                    <li><span>Logout</span></li>
                  </ul>
                </div>
              ) : (
                <Button
                  text={"Sign"}
                  className={"bg-primary-color btn-sm py-1 w-[120px]"}
                />
              )
            }
          </div>
        </div>
      </div>
      <div>
        {/* in mobile view  */}
        <div className={` top-[68px] transition-all h-[90vh] absolute z-[1] ${isMoboMenu ? 'w-full' : 'w-0'} overflow-hidden bg-[#0303037f] lg:hidden mb:hidden block `}>
          <div className="bg-white w-[72%] h-full " id="mobile_menu">
         {
          navbarRoutesLink?.map((ruteLink , index)=>(
            <NavLink to={ruteLink?.route_link} className={(isActive) => isActive ? '  hover:bg-primary-color ' : ''} > <li className=" py-1 border-b rounded-md list-none px-1 btn-ghost "><span>{ruteLink?.route_name}</span></li></NavLink>
          ))
         }
       </div>
        </div>
      </div>
      <Outlet/>
    </React.Fragment>
  )
}
