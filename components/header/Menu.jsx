'use client';
import useCartService from '@/lib/hooks/useCartStore';
import useLayoutService from '@/lib/hooks/useLayout';
// import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { SearchBox } from './SearchBox';

const Menu = () => {
  const { items, init } = useCartService();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const signoutHandler = () => {
    signOut({ callbackUrl: '/signin' });
    init();
  };

  // const { data: session } = useSession();
  const { theme, toggleTheme } = useLayoutService();

  const handleClick = () => {
    document.activeElement.blur();
  };

  return (
    <>
      {/* <div className="hidden md:block">
        <SearchBox />
      </div> */}
      <div>
        <ul className="flex items-stretch">
          <li className="flex gap-9">
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
            {/* cart */}
            <Link className="btn btn-ghost rounded-btn" href="/cart">
              <script src="https://cdn.lordicon.com/lordicon.js" async />
              <lord-icon
                src="https://cdn.lordicon.com/evyuuwna.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{
                  width: '45px',
                  height: '45px',
                }}
              />
              {mounted && items.length != 0 && (
                <div className="badge badge-secondary">
                  {items.reduce((a, c) => a + c.qty, 0)}{' '}
                </div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
