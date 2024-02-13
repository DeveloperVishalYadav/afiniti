import React from "react";

export default function Navbar() {
  return (
    <header className="fixed w-full z-30 bg-transparent hover:bg-white  text-white hover:text-gray-800 font-medium">
      <div className="mx-auto py-2 px-14 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h1 className="font-bold text-2xl">afiniti</h1>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md transition ">
                <li>
                  <a className="  " href="#">
                    CX AI
                  </a>
                </li>

                <li>
                  <a className=" " href="#">
                    {" "}
                    Industries
                  </a>
                </li>

                <li>
                  <a className=" " href="#">
                    {" "}
                    About Us
                  </a>
                </li>

                <li>
                  <a className=" " href="#">
                    Testimonials
                  </a>
                </li>

                <li>
                  <a className=" " href="#">
                    {" "}
                    News
                  </a>
                </li>

                <li>
                  <a className=" " href="#">
                    {" "}
                    Careers
                  </a>
                </li>
              </ul>
            </nav>

            <div className="items-center gap-4 lg:block hidden">
              <div className="sm:flex sm:gap-4">
                <button
                  type="button"
                  title="Start buying"
                  className="py-3 px-4 flex flex-row text-center transition  border-2 hover:border-black hover:bg-gray-800 hover:text-white"
                >
                  <span className="block text-sm font-medium px-2">
                    Contact Us
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 18"
                      width="21"
                      height="18"
                      className=""
                    >
                      {" "}
                      <path
                        d="m2.64,13.88l2-1.02,3.02-1.54,3.12-1.59,2.78-1.42,3.12-1.59,1.08-.55-1.49,4.67s-.15.41.2.51c.37.1.49-.19.56-.38l.91-2.78.81-2.48s.16-.33-.12-.46c-.22-.11-2.54-.84-2.54-.84,0,0-3.39-1.1-3.51-1.13-.17-.05-.52-.12-.6.18-.03.11-.09.38.37.51s3.6,1.15,3.6,1.15l1.41.44-4.36,2.22L2.46,13.12s-.41.15-.26.52c0,0,.11.3.44.23Z"
                        fill="#000000"
                        stroke-width="0"
                      ></path>{" "}
                    </svg>
                  </span>
                </button>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
