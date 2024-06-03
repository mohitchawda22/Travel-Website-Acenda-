// import { h1 } from "@/components/ui/h1";
// import { Button } from "@/components/ui/button";
import React from "react";

const Places = () => {
  return (
    <div className="bg-white p-10">
      <h1 className="text-4xl font-bold text-[#1e90ff]">TOP BOOK NOW</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6"></div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img src="/pic1.jpg" alt="The Oasis" className="rounded-lg mb-2" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">The Oasis</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $10,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">
              Rio de Janeiro, Brazil
            </p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic2.jpg"
              alt="The Sanctuary"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">The Sanctuary</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $9,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Bali, Indonesia</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic3.jpg"
              alt="The Infinity"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">The Infinity</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $8,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Sydney, Australia</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img src="/pic4.jpg" alt="La Maison" className="rounded-lg mb-2" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">La Maison</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $8,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Barcelona, Spain</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic5.jpg"
              alt="Serenity Shores"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">Serenity Shores</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $7,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Sydney, Australia</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.6</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic6.jpg"
              alt="Azure Haven"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">Azure Haven</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $8,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Barcelona, Spain</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic7.jpg"
              alt="Ocean Breeze"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">Ocean Breeze</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $7,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Bali, Indonesia</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic7.jpg"
              alt="Ocean Breeze"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">Ocean Breeze</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $7,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Bali, Indonesia</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
          <div className="bg-[#f0f8ff] p-4 rounded-lg">
            <img
              src="/pic8.jpg"
              alt="Palm Breeze"
              className="rounded-lg mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-[#1e90ff]">Palm Breeze</h2>
              <h1
                variant="secondary"
                className="bg-[#1e90ff] text-white rounded-sm"
              >
                $6,000
              </h1>
            </div>
            <p className="text-sm mb-4 text-[#1e90ff]">Phuket, Thailand</p>
            <div className="flex items-center">
              <StarIcon className="text-[#1e90ff]" />
              <span className="ml-1 text-[#1e90ff]">4.8</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            variant="secondary"
            className="bg-[#1e90ff] text-white rounded-sm"
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Places;
