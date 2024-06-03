import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Hero = () => {
  const { userId } = auth();

  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-white">
              Forever Home.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {!userId && (
              <>
                <SignInButton mode="modal">
                  <p className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-white-700 focus:outline-2 focus:ring active:text-blue-500 sm:w-auto">
                    Get Started
                  </p>
                </SignInButton>
                <a
                  href="/about"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-white-700 focus:outline-2 focus:ring active:text-blue-500 sm:w-auto"
                >
                  Learn More
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="p-10">
        <main>
          <div className="relative">
            <div className="relative container mx-auto text-center text-black bg-opacity-75 p-10 shadow-lg">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-semibold">Location</span>
                  <input
                    type="text"
                    placeholder="Add destination"
                    className="mt-2 p-2 border rounded"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold">Check in</span>
                  <input
                    type="date"
                    placeholder="Add dates"
                    className="mt-2 p-2 border rounded"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold">Check out</span>
                  <input
                    type="date"
                    placeholder="Add dates"
                    className="mt-2 p-2 border rounded"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold">Guests</span>
                  <input
                    type="number"
                    placeholder="Add guests"
                    className="mt-2 p-2 border rounded"
                  />
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Search
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
