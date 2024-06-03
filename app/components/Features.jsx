import { CalendarDays } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Feature News
          </h2>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578974721235-ecce3a0d8dcf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <CalendarDays/>
                <span>February 20, 2024</span>
                <h1 className="text-med font-bold text-black ">
                  Delicious restaurant at Hanalei Bay
                </h1>

                <p className="mt-2">
                  <span className="sr-only"> Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ... </span>

                  <span className="tracking-wider text-gray-900">
                   See More
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1510608493064-58934ef38392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <CalendarDays />
                <span>February 20, 2024</span>
                <h1 className="text-med font-bold text-black">
                Top 10 most beautiful check-in spots in Ph ...
                </h1>

                <p className="mt-2">
                  <span className="sr-only"> Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ... </span>

                  <span className="tracking-wider text-gray-900">
                    see More
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614506660579-c6c478e2f349?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <CalendarDays/>
                <span>February 20, 2024</span>
                <h3 className="text-med text-black font-bold">
                Top 5 newest services at Navagio Beach
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ... </span>

                  <span className="tracking-wider text-gray-900">
                   see More
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
