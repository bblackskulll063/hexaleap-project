import React from "react";
import Toggle from "./Toggle";

interface ISportsItem {
  name: string;
  image: string;
  events: string;
  sport: string;
}
const sportsItems: ISportsItem[] = [
  {
    name: "Sacramento River Cats",
    image: "image1.jpeg",
    events: "48",
    sport: "Baseball",
  },
  {
    name: "Las Vegas Aviators",
    image: "image2.jpeg",
    events: "28",
    sport: "Baseball",
  },
  {
    name: "New Jersey Devils",
    image: "image3.jpeg",
    events: "15",
    sport: "Ice Hockey",
  },
  {
    name: "Las Vegas Aviators",
    image: "image2.jpeg",
    events: "28",
    sport: "Baseball",
  },
];

const Sports = () => {
  return (
    <div className=" mx-24 ">
        {/* <div className="sticky top-0 le">hii</div> */}
      <div className="flex justify-between ">
        <h1 className="w-20 mb-6 text-2xl font-bold  border-b-2 border-lightBlue py-1">
          Sports
        </h1>
        <div className="fixed right-24 z-10 ">
          <Toggle />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 z-0 md:grid-cols-3 lg:grid-cols-5 gap-4 place-content-center">
        {sportsItems.map((item,index) => (
          <div key={index} className="card max-w-sm p-2 bg-white drop-shadow-xl dark:bg-Gray2 dark:border-gray-700">
            <img
              className="w-full h-96 object-cover object-center"
              src={item.image}
              alt="..."
            />
            <div className="">
              <h2 className="my-5 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h2>
              <div className="bg-lightzinc dark:bg-Gray1 p-2 flex row-2 gap-14">
                <div>
                  <h5 className="text-lightGray text-xs dark:text-Gray3">
                    Total Events
                  </h5>
                  <h5 className="font-medium">{item.events} Events</h5>
                </div>
                <div>
                  <h5 className="text-lightGray text-xs dark:text-Gray3">
                    Sport
                  </h5>
                  <h5 className="font-medium">{item.sport}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="max-w-sm h-10/12 p-2 bg-white drop-shadow-xl dark:bg-Gray2 dark:border-gray-700">
          <div className="relative">
            <div className="absolute right-0 bg-black px-5 py-1 text-white ">Ad</div>
            <img
              className="w-full h-64 object-center"
              src="ad.jpeg"
              alt="..."
            />
          </div>
          <div className="p-5 border border-green-800">
            <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
              Advertisement title
            </h2>
            <p className="text-sm dark:text-Gray3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center my-16">
        <a
          href="#"
          className="inline-flex items-center px-7 py-4 font-semibold text-center text-white bg-lightBlue rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Sports;
