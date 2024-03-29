"use client";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePreArrow from "./SamplePreArrow";
import SampleNextArrow from "./SampleNextArrow";

interface ICollectionItem {
  team: string;
  image: string;
  location: string;
  collection: string;
}
const collectionItems: ICollectionItem[] = [
  {
    team: "Las Vegas Aviators",
    image: "ticket1.jpeg",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
  {
    team: "Sacramento River Cats",
    image: "ticket2.jpeg",
    location: "Sutter Health Park, Sacramento, California",
    collection: "Orange Collection",
  },
  {
    team: "Las Vegas Aviators",
    image: "ticket1.jpeg",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
  },
];

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?(): void;
}

const Collections = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center bg-white mx-24 pt-16 collection-body max-h-100 ">
      <div className="sm:px-8 md:px-24">
        <h1 className="mb-5 text-5xl font-bold">Collection Spotlight</h1>
        <p className="md:px-20 sm:px-5 text-sm">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className=" slide-container sm:px-8 px-32 py-10 sm:mx-2 mx-24 flex justify-center">
        <Slider {...settings} className="w-9/12 ">
          {/* <div className="flex"> */}
          {collectionItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white dark:bg-Gray2 relative drop-shadow-xl p-3 md:w-64 sm:w-48">
                <div className="">
                  <img
                    className="object-scale-down"
                    src={item.image}
                    alt="..."
                  />
                </div>

                <div className="border-dashed border-b-2 my-4 dark:border-Gray3">
                  <div className="absolute rounded-full w-5 h-5 bg-lightzinc collection-body -mt-2 -left-3 shadow-inner-xl"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-lightzinc collection-body -mt-2 -right-3 shadow-inner-xl"></div>
                </div>

                <div className="text-center">
                  <h4 className="font-medium text-lg">{item.team}</h4>
                  <div>
                    <h3 className="text-sm mt-3">Oct 15 | SUN | 4:30PM</h3>
                    <h2 className="text-xs w-11/12 text-lightGray my-3 dark:text-white">
                      {item.location}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center mt-4 mx-2">
                  <button
                    type="button"
                    className="text-center py-2 text-medium text-sm btn w-full bg-black text-white"
                  >
                    {item.collection}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
