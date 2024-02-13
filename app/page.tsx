import Navbar from "@/Components/Navbar";
import Image from "next/image";
import LogoCarousel from "@/Components/LogoCarousel";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          className="absolute object-cover w-full h-full"
          src="/home-bg.jpg"
          width="1800"
          height="1080"
          alt="hero background image"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"
        ></div>
        <div
          className="relative container px-4 lg-px-0 
        "
        >
          <div className="pt-36 lg:pt-[170px] lg:px-10 lg:w-10/12 lg:mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-white text-left text-4xl tracking-tight text-heading lg:font-medium font-semibold lg:text-[80px] lg:mb-4">
                Afiniti is CX AI.
              </h1>
              <h2 className="text-white text-left lg:leading-normal text-3xl font-medium lg:text-5xl lg:py-2">
                We make moments of human connection more valuable.
              </h2>

              <p className="pt-2 pb-10 text-white text-left text-2xl lg:text-2xl">
                Since 2006, Afiniti has been a pioneer in customer experience (
                <b>CX</b>) artificial intelligence (<b>AI</b>), delivering
                measurably better business outcomes for some of the largest
                enterprises in the world.
              </p>
              <div className="lg:pb-1 pb-28">
                <button
                  type="button"
                  title="Start buying"
                  className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                >
                  <span className="block text-sm font-medium px-2">
                    Schedule a Briefing
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
                      ></path>{" "}
                    </svg>
                  </span>
                </button>
              </div>
              <div className="w-max pt-20 pb-4 lg:flex justify-left lg:flex-row flex-col flex-wrap items-center gap-4 md:w-auto hidden">
                <div className="flex items-center text-4xl font-medium  ">
                  $2.24bn
                </div>
                <div className="flex items-center pr-4 border-r-2">
                  annual client <br /> impact
                </div>
                <div className="flex items-center text-4xl font-medium  ">
                  1.7bn
                </div>
                <div className="flex items-center pr-4 border-r-2">
                  {" "}
                  interactions
                  <br />
                  optimized
                </div>
                <div className="flex items-center text-4xl font-medium  ">
                  500+
                </div>
                <div className="flex items-center">
                  patents
                  <br />
                  issued
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-layer-1 bg-[#0a2133] text-left">
        <div className="pt-16 px-4 pb-4 lg:hidden justify-left flex-col flex-wrap items-center gap-4 md:w-auto ">
          <h2 className="pb-6 text-left text-xl font-semibold leading-relaxed text-heading md:max-w-2xl md:text-5xl">
            Drive more value from every interaction
          </h2>
          <div className="flex items-center py-4 border-b">
            <div className="border-l px-2 h-14"></div>
            <h1 className="text-4xl tracking-tight  ">$2.24bn</h1>
            <p className="flex text-sm tracking-tigh items-center px-6  py-2">
              annual client <br /> impact
            </p>
          </div>
          <div className="flex items-center py-4 border-b">
            <div className="border-l px-2 h-14"></div>
            <h1 className="text-4xl tracking-tight  ">1.7bn</h1>
            <p className="flex text-sm tracking-tigh items-center px-20  py-2">
              annual client <br /> impact
            </p>
          </div>
          <div className="flex items-center py-4 border-b">
            <div className="border-l px-2 h-14"></div>
            <h1 className="text-4xl tracking-tight   ">500+</h1>
            <p className="flex text-sm tracking-tigh items-center px-20  py-2">
              annual client <br /> impact
            </p>
          </div>
        </div>
        <div className="mx-auto px-4 w-full max-w-6xl">
          <h2 className="pt-20 text-left text-3xl font-medium tracking-tight text-heading md:max-w-2xl md:text-5xl">
            Who we work with
          </h2>
          <p className="mt-8 text-md lg:text-xl">
            Afiniti collaborates with industry frontrunners and Fortune 500
            enterprises across the globe.
          </p>
          <div className="py-20">
            <LogoCarousel />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-start items-start lg:gap-20">
          <div className="pl-24 pt-6 hidden lg:block">
            <Image
              src="/images/brands/Group-19162.png"
              alt="group"
              height={20}
              width={40}
            />
          </div>
          <div className="lg:hidden px-4">
            <Image
              src="/images/brands/Group-19017.png"
              alt="group"
              height={20}
              width={100}
            />
          </div>
          <div className="mx-auto w-full px-4 pt-6">
            <h2 className="text-left text-3xl font-medium tracking-tight text-heading md:max-w-7xl md:text-5xl">
              AI that optimizes for better outcomes
            </h2>
            <p className="mt-8 text-md lg:text-xl  lg:max-w-screen-lg">
              At Afiniti, our CX AI solutions are responsibly designed to
              leverage AI, data and cloud infrastructure to improve the
              productivity of customer engagement and drive measurably better
              outcomes. Afiniti’s mission is to remove skills or
              rules-based-systems from the customer experience eco-system,
              personalizing customer experiences and empowering partner
              platforms to become predictive systems.
            </p>
          </div>
        </div>

        <div className="py-16 mx-auto lg:py-20">
          <div className="grid max-w-lg gap-5 mx-auto row-gap-5 px-4 lg:max-w-screen-lg lg:grid-cols-2">
            <div className="flex flex-col justify-between p-5 bg-transparent border shadow-sm">
              <div className="mb-2">
                <div className="flex items-center justify-between py-6 px-4">
                  <div className="flex items-center justify-center w-24 h-24">
                    <Image
                      src="/images/brands/Group-19159.png"
                      alt="group"
                      height={20}
                      width={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto w-full px-4 pt-2">
                    <h2 className="text-left text-xl font-semibold tracking-tight text-heading  md:text-2xl">
                      Afiniti CX AI Optimization
                    </h2>
                    <p className="mt-6 text-md lg:text-lg  lg:max-w-screen-lg">
                      Afiniti has developed a real-time AI engine to optimize
                      customer outcomes for contact-agent-offer-channel
                      combinations that deliver transformational business
                      benefits and enterprise profitability. We believe our AI
                      Pairing leads to increased empathy which is what drives
                      better outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-6 pt-14 px-4">
                <button
                  type="button"
                  title="Start buying"
                  className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                >
                  <span className="block text-sm font-medium px-2">
                    Learn More
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
                      ></path>{" "}
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 bg-transparent border shadow-sm">
              <div className="mb-2">
                <div className="flex items-center justify-between py-6 px-4">
                  <div className="flex items-center justify-center w-24 h-24">
                    <Image
                      src="/images/brands/Group-19157.png"
                      alt="group"
                      height={20}
                      width={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="mx-auto w-full px-4 pt-2">
                    <h2 className="text-left text-xl font-semibold tracking-tight text-heading  md:text-2xl">
                      Afiniti CX AI Infrastructure
                    </h2>
                    <p className="mt-6 text-md lg:text-lg  lg:max-w-screen-lg">
                      Together with our partners, we see the future of customer
                      engagement as a platform that combines outcome-based AI
                      optimizations, CRM and the underlying omni-channel
                      orchestration platform. Our Afiniti InsideTM suite enables
                      our cloud partners to usher in this new era of CX AI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-6 pt-14 px-4">
                <button
                  type="button"
                  title="Start buying"
                  className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                >
                  <span className="block text-sm font-medium px-2">
                    Learn More
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
                      ></path>{" "}
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full bg-white">
          <div className="container pt-20 mx-auto lg:max-w-screen-xl lg:px-20 px-4">
            <h1 className="text-left text-3xl text-black font-medium tracking-tight text-heading md:max-w-7xl md:text-5xl">
              Where it works
            </h1>

            <p className="mt-6 text-md lg:text-lg  text-black lg:max-w-screen-lg">
              Afiniti’s CX AI is typically used to optimize customer
              interactions that benefit from empathy and is precisely measured
              in terms of revenue, margin or customer lifetime value impact. Our
              CX AI solutions are also applied to service metrics, optimizing
              for improved customer satisfaction, handle time or time to
              resolution metrics.
            </p>
          </div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <li>
                  <a href="#" className="group relative block">
                    <img
                      src="/images/brands/hp.jpg"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">
                        Telco & media
                      </h3>
                      <p>
                        Major telecommunications and media providers are
                        increasing customer lifetime value and sales.
                      </p>
                      <div className="pb-6 pt-14 px-4">
                        <button
                          type="button"
                          title="Start buying"
                          className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                        >
                          <span className="block text-sm font-medium px-2">
                            Learn More
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
                              ></path>{" "}
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative block">
                    <img
                      src="/images/brands/iprog.jpg"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">
                        Finance Landing
                      </h3>
                      <p>
                        Major telecommunications and media providers are
                        increasing customer lifetime value and sales.
                      </p>

                      <div className="pb-6 pt-14 px-4">
                        <button
                          type="button"
                          title="Start buying"
                          className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                        >
                          <span className="block text-sm font-medium px-2">
                            Learn More
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
                              ></path>{" "}
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                  <a href="#" className="group relative block">
                    <img
                      src="/images/brands/prop.jpg"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">
                        Healthcare Landing
                      </h3>
                      <p>
                        Major telecommunications and media providers are
                        increasing customer lifetime value and sales.
                      </p>

                      <div className="pb-6 pt-14 px-4">
                        <button
                          type="button"
                          title="Start buying"
                          className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                        >
                          <span className="block text-sm font-medium px-2">
                            Learn More
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
                              ></path>{" "}
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section className="w-full bg-[#456b73]">
          <div className="container pt-20 mx-auto lg:max-w-screen-xl lg:px-20 px-4">
            <h1 className="text-left text-3xl  font-medium tracking-tight text-heading md:max-w-7xl md:text-5xl">
              Responsible AI by design
            </h1>

            <p className="mt-6 text-md lg:text-lg lg:max-w-screen-xl">
              We continuously subject our AI to rigorous controls and
              governance. All our products are designed responsibly from the
              ground up in accordance with our six responsible AI principles:
              accountability, explainability, transparency, fairness, data
              protection, and compliance.
            </p>
          </div>
          <section>
            <div className="mx-auto lg:max-w-screen-lg lg:px-20 px-4 py-10">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2">
                <div className="h-64 overflow-hidden sm:h-80 lg:order-first lg:h-full">
                  <Image
                    src="/images/brands/Dr.jpg"
                    alt="group"
                    height={200}
                    width={300}
                  />
                </div>

                <div className="">
                  <p className="mt-4 text-gray-100">
                    “It is critical to understand the value any AI system is
                    creating to ensure it remains equitable in the treatment of
                    employees and customers. That’s why Afiniti builds and
                    deploys our products based on responsible AI principles.
                    Afiniti’s robust safety controls, including our patented
                    benchmarking capability, allow us to constantly measure the
                    outputs of our AI so it is both safe and effective.”
                  </p>

                  <button
                    type="button"
                    title="Start buying"
                    className="mt-8 py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                  >
                    <span className="block text-sm font-medium px-2">
                      Learn More
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
                        ></path>{" "}
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div className="bg-gray-500 ">
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
          <div className="flex flex-col items-center justify-between lg:gap-36 lg:flex-row">
            <div className="mb-10 lg:max-w-xl lg:pr-5 lg:mb-0">
              <div className="max-w-3xl mb-6">
                <div className="mx-auto w-full pb-8 ">
                  <div className="border-gray-100 pt-8 sm:flex ">
                    <ul className="mt-8 flex justify-left gap-6 sm:mt-0 lg:justify-end">
                      <li className="border p-2">
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75 "
                        >
                          <span className="sr-only">Instagram</span>

                          <svg
                            className="h-8 w-8"
                            fill="#ffffff"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li className="border p-2">
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Twitter</span>

                          <svg
                            className="h-8 w-8"
                            fill="#ffffff"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>

                      <li className="border p-2">
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">GitHub</span>

                          <svg
                            className="h-8 w-8"
                            fill="#ffffff"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h2 className="max-w-2xl mb-6 text-left text-3xl font-medium tracking-tight  md:max-w-7xl md:text-5xl">
                  Maximize and Measure your CX performance
                </h2>
                <div className="lg:pb-6 pt-14 px-4">
                  <button
                    type="button"
                    title="Start buying"
                    className="py-3 px-4 flex flex-row text-center transition  border  text-white hover:text-gray-800 hover:bg-gray-100  focus:bg-gray-800"
                  >
                    <span className="block text-sm font-medium px-2">
                      Schedule a Briefing
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
                        ></path>{" "}
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row"></div>
            </div>
            <div className="relative lg:w-1/2">
              <Image
                alt="new"
                src={"/images/brands/CX.png"}
                height={200}
                width={350}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
