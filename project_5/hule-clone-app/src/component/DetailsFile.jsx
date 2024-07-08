import React from "react";

function DetailsFile() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-start bg-blue-500">
        <h1 className="movie-detail-name text-5xl text-gray-100 ">Movie name</h1>
        <p className="movie-desc text-ellipsis overflow-hidde text-2xl text-gray-100 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quis
          alias, sit mollitia velit sed amet dolore consectetur, consequuntur,
          molestias pariatur molestiae. Error, nemo? Ipsum ipsa at quasi
          nesciunt reiciendis.
        </p>
        <div>
          <h3>
            Starting: <span>Actor Name</span>
          </h3>
          <h3>Director: <span>Director Name</span></h3>
        </div>
        <p>R <span>Documenteries</span><span>Movie</span> <span>Year</span> <span>HD</span></p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, dolorum.</p>
        <h3 className="text-2xl text-gray-200 font-bold w-auto py-2 px-4 uppercase hover:bg-slate-900 hover:text-white-500  hover:rounded group-hover/item:visible transition delay-150 duration-300 ease-in-out">Start your free trial</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quibusdam. Fuga nemo dolorum eveniet culpa?</p>
      </div>
    </>
  );
}

export default DetailsFile;
