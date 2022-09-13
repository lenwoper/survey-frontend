import { Button } from ".."
export default function Navbar() {
  return (
    <>
    <div className="navbar bg-base-100 drop-shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><span>Item 1</span></li>
        <li tabIndex={0}>
          <span className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </span>
          <ul className="p-2">
            <li><span>Submenu 1</span></li>
            <li><span>Submenu 2</span></li>
          </ul>
        </li>
        <li><span>Item 3</span></li>
      </ul>
    </div>
    <span className="btn btn-ghost normal-case text-xl">daisyUI</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className=" border-b-2 border-transparent hover:border-primary-color rounded-md"><span>Item 1</span></li>
      <li tabIndex={0}>
        <span>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </span>
        <ul className="p-2">
          <li><span>Submenu 1</span></li>
          <li><span>Submenu 2</span></li>
        </ul>
      </li>
      <li><span>Item 3</span></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex-none gap-2">
  {
    false?(
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
    ):(
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

    </div>
    </>
  )
}
