import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <nav>
      <div className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
        Tann Trim
        </Link>
        <ul>
          <li>
            <Link className='btn btn-ghost rounded-btn' href="/cart">Cart</Link>
            <Link className='btn btn-ghost rounded-btn' href="/cart">SignIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
