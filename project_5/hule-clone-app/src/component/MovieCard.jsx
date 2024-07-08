import React from "react";
import img1 from "../images/img1.jpg";

function MovieCard() {

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16 h-full">
        <div className="flex flex-col">
          <div className="relative inline-block newly-main-box rounded-lg transition duration-300 ease-in-out group">
            <img src={img1} alt="Your Image" className="block w-full rounded-lg card-img"  style={{ height: '200px'}}/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity ease-in group-hover:opacity-100">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 60 60"
                class="cu-button-detail"
              >
                <circle
                  fill-opacity="0.2"
                  cx="30"
                  cy="30"
                  r="29"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></circle>
                <g
                  transform="translate(16.071429, 17.142857)"
                  fill-rule="nonzero"
                  fill="#ffffff"
                >
                  <path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col p-5 gap-3">
            <div>
              <div>
                <h1 className="moviename text-gray-900 text-3xl font-bold">
                  Movie
                </h1>
              </div>
              <p className="text-gray-600 text-2xl pt-3 leading-6">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
