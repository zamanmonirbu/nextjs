import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="navbar bg-gray-700 text-white text-2xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link href={'/'}>Home</Link></li>
          <li>
            <a>Services</a>
            <ul className="p-2">
              <li><a>Home Delivery</a></li>
              <li><a>Software development</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2">
              <li><Link href={'/home-delivery'}>Home Delvery</Link></li>
              <li><Link href={'/catering'}>Catering</Link></li>
            </ul>
          </details>
        </li>
        <li><Link href={'/products'}>Products</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default HomePage;
