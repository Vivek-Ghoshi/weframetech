import * as React from "react";

function Newsletter() {


  return (
    <div className="rounded-3xl p-4 mt-10">
      <div className="flex gap-3 items-center justify-center max-md:flex-col">
        
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow h-56 w-full bg-pink-50 rounded-3xl max-md:mt-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Images/BUFFET.png"
              alt="koi to image h"
              className="object-cover w-full aspect-[2.34] max-md:max-w-full"
            />
          </div>
        </div>

      
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex h-60  overflow-hidden flex-col px-8 pt-2 pb-14 mx-auto w-full bg-pink-50 rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
            <h2 className="self-start text-4xl mt-5 font-medium text-neutral-700 max-md:max-w-full">
              S'inscrire & économiser{" "}
              <span className="text-teal-300">10% </span>
            </h2>
            <p className="mt-2 text-sm font-medium leading-6 text-stone-400 max-md:mr-1.5 max-md:max-w-full">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't. Yet busy any
              meeting shark light marginalised 4-blocker message.light marginalised 4-blocker message. Productize
              .
            </p>
            <form
             
              className="flex flex-wrap gap-3 mt-3 w-full text-lg leading-none whitespace-nowrap max-md:max-w-full"
            >
              <label htmlFor="emailInput" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="polo.com"
                className="grow px-3 py-2 font-light bg-white rounded-lg border border-rose-100 border-solid text-stone-400 w-fit max-md:px-5 w-12"
                required
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center px-4 py-5 font-bold text-white uppercase bg-teal-300 rounded-lg"
              >
                <span className="self-stretch my-auto">S'inscrire</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14526ee2d09715c0d20123a84364bf1ff5aec82513114c203c37f987fcd9e17e?placeholderIfAbsent=true&apiKey=60b2831358b7404ba4bd888e086aaaac"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
