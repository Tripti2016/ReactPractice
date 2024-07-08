import React from "react";
import img1 from "../images/img1.jpg";

function NewlyCompo() {
  const divStyle = {
    backgroundImage: `url(${img1})`, // Using the imported image
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    height: "500px", // Adjust as needed
    // Add more styles as needed
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16 h-full">
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <div>
                <h1 className="moviename text-gray-100 text-4xl font-bold">
                  Movie
                </h1>
                <p className="text-gray-100 text-xl leading-6 movie-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quam quod non.
                </p>
              </div>
              <p className="text-gray-100 text-2xl font-bold pt-3 leading-6">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <h1 className="moviename text-gray-100 text-4xl font-bold">
                Movie
              </h1>
              <p className="text-gray-100 text-2xl font-bold pt-3">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <h1 className="moviename text-gray-100 text-4xl font-bold">
                Movie
              </h1>
              <p className="text-gray-100 text-2xl font-bold pt-3">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <h1 className="moviename text-gray-100 text-4xl font-bold">
                Movie
              </h1>
              <p className="text-gray-100 text-2xl font-bold pt-3">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <h1 className="moviename text-gray-100 text-4xl font-bold">
                Movie
              </h1>
              <p className="text-gray-100 text-2xl font-bold pt-3">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
        <div
          style={divStyle}
          className="rounded h-full m-1 newly-main-box relative bg-gray-200"
        >
          <div className="flex flex-col justify-end h-full p-5 gap-3">
            <div>
              <h1 className="moviename text-gray-100 text-4xl font-bold">
                Movie
              </h1>
              <p className="text-gray-100 text-2xl font-bold pt-3">
                Not Rated <span>Stand up comedy</span>
              </p>
            </div>
            <div className="arrow pt-3">
              <svg
                width="40px"
                height="40px"
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
        </div>
      </div>
    </>
  );
}

export default NewlyCompo;
