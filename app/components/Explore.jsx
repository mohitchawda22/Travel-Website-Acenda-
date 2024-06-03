import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/flagged/photo-1553064060-706e8d54b2c0?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center md:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Explore Maldives
            <strong className="font-extrabold text-red-700 sm:block w-1/2 absolute border border-solid h-[1px]"></strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex flex-row-reverse m-10 gap-5">
          <a href="" className="">
            <Image src="/explore2.png" alt="pic1" width={150} height={100} className="hover:scale-110" />
            <p className="text-white">Azure Haven</p>
          </a>
          <a href="">
            <Image src="/explore3.png" alt="pic1" width={150} height={100} className="hover:scale-110" />
            <p className="text-white">Serene Sanctuary</p>
          </a>
          <a href="">
            <Image src="/explore4.png" alt="pic1" width={150} height={100} className="hover:scale-110" />
            <p className="text-white">Verdant Vista</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
