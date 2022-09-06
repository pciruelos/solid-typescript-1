import {Component} from 'solid-js'
import { NavLink } from "@solidjs/router"

const Nav : Component = () => {
  return (
    <nav class='w-100% bg-blue-800 h-[80px] flex justify-start items-center px-5 gap-5'>
      <NavLink href='/'>
      <button class='bg-green-400 px-5 py-2 rounded-md  active:bg-violet-700'>Home</button>
      </NavLink>
      <NavLink href='/fav'>
      <button class='bg-red-400 px-5 py-2 rounded-md  active:bg-violet-700'><a href="fav">Saved * 4</a></button>
      </NavLink>
    </nav>
  )
}

export default Nav