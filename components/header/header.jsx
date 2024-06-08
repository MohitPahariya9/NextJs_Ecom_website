import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <nav>
      <div className="navbar flex justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-3xl">
          Tann Trim
        </Link>
        <ul>
          <li className="space-x-3.5 ">
            <lord-icon
              src="https://cdn.lordicon.com/kkvxgpti.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{
                width: '45px',
                height: '45px',
              }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{
                width: '45px',
                height: '45px',
              }}
            />
            <script src="https://cdn.lordicon.com/lordicon.js" async />
            <lord-icon
              src="https://cdn.lordicon.com/prjooket.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{
                width: '45px',
                height: '45px',
              }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/evyuuwna.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{
                width: '45px',
                height: '45px',
              }}
            />
          </li>
        </ul>
      </div>
      <div className="hero flex justify-center bg-base-300 list-none">
        <li>
          <Link className="btn btn-ghost rounded-btn text-xl" href="/">
            Bags
          </Link>
          <Link className="btn btn-ghost rounded-btn text-xl" href="/">
            Travel
          </Link>
          <Link className="btn btn-ghost rounded-btn text-xl" href="/">
            Accesories
          </Link>
          <Link className="btn btn-ghost rounded-btn text-xl" href="/">
            Gifting
          </Link>
          <Link className="btn btn-ghost rounded-btn text-xl" href="/">
            Jewellery
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Header;
