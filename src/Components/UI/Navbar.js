import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <ul className="p-1 z-50">
                <li>
                  <Link href="/categories/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/categories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/powersupplyunit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/storagedevice">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/categories/others">Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Link href="/" className="flex items-center ">
            <Image src="/logo.avif" width={60} height={60} alt="Logo" />
            <p className="ml-2">SmartTech</p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex space-x-4">
          <li>
            <Link href="/products">Get All Products</Link>
          </li>
          <li className="relative group">
            <details>
              <summary className="cursor-pointer">Categories</summary>
              <ul className="p-1 z-50">
                <li>
                  <Link href="/categories/processor">Processor</Link>
                </li>
                <li>
                  <Link href="/categories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/powersupplyunit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/storagedevice">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/categories/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <div className="hidden lg:flex space-x-4">
          {session?.user?.email ? (
            <div>
              <Link
                href="/create-product"
                className="btn-sm btn text-indigo-800 mr-4"
              >
                Create New Product
              </Link>
              <button
                onClick={() => signOut()}
                className="btn btn-sm text-indigo-800"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn-sm btn text-indigo-800">
              Login
            </Link>
          )}
          <Link href="/pc-builder" className="btn btn-sm text-indigo-800">
            PC BUILDER
          </Link>
        </div>

        {/* Menu Button for Small Screens */}
        <div className="lg:hidden relative group">
          <button className="btn btn-sm text-indigo-800 px-3 py-2">Menu</button>
          <ul className="absolute right-0 hidden mt-3 space-y-2 bg-white rounded-lg border border-gray-200 w-60 p-3 group-hover:block">
            {session?.user?.email ? (
              <>
                <li>
                  <Link href="/create-product" className="block">
                    Create New Product
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOut()} className="block">
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="block">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link href="/pc-builder" className="block">
                PC BUILDER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
