import React from 'react';
import Link from 'next/link';
import Menu from '@/components/header/Menu';
import Section from '../section/section';
const Header = () => {
  return (
    <nav>
      <div className="navbar flex justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-3xl">
          Tann Trim
        </Link>
        <Menu />
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
      <Section />
    </nav>
  );
};

export default Header;
