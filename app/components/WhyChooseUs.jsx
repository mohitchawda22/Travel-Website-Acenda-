import { auth } from "@clerk/nextjs/server";
import React from "react";

const WhyChooseUs = () => {
  const { userId } = auth();

  return (
    <>
      {!userId && (
        <>
          <section className="bg-white text-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-blue-500">
                WHY CHOOSE US?
                </h2>

                <p className="mt-4 text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae
                  aperiam fugit consequuntur saepe laborum.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/blue"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-pink-500/10"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-black">
                    Digital campaigns
                  </h2>

                  <p className="mt-1 text-sm text-blue-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default WhyChooseUs;
