import * as React from "react";
import Discription from "./Discription";


// const dimensions = [
//   {
//     icon: "/images/icons heart.png",
//     value: "20",
//     unit: "cm",
//   },
//   {
//     icon: "",
//     value: "50",
//     unit: "cm",
//   },
// ];

const specifications = [
  "Location appareil à raclette - Raclette traditionnelle 1/2 roue",
  "Réglable en hauteur",
  "Appareil à raclette professionnel",
  "Boîtier de chauffe horizontal réglable en hauteur",
  "",
  "220V",
  "900W",
];

const MainPage = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
     
        <div className="flex gap-6">
        
          <div className="flex flex-col gap-[2px]">
            <img
              src={`/Images/table1.png`}
              alt={`Raclette view`}
              className="w-10 h-10 object-cover cursor-pointer border hover:border-gray-400 rounded"
            />
            <img
              src={`/Images/Group 96.png`}
              alt={`Raclette view`}
              className="w-10 h-10 object-cover cursor-pointer border hover:border-gray-400 rounded"
            />
            <img
              src={`/Images/Group 96.png`}
              alt={`Raclette view`}
              className="w-10 h-10 object-cover cursor-pointer border hover:border-gray-400 rounded"
            />
            <img
              src={`/Images/Group 98.png`}
              alt={`Raclette view`}
              className="w-10 h-10 object-cover cursor-pointer border hover:border-gray-400 rounded"
            />
          </div>
        
          <div className="flex-1">
            <img
              src="/images/location.png"
              alt="Raclette Machine"
              className="w-[28rem] h-[22rem] object-cover items-center rounded-lg bg-[#f5f5f0]"
            />
          </div>
        </div>

        
        <div className="flex w-[34rem] h-[29rem] flex-col leading-none rounded-none max-w-[719px]">
          <div className="flex z-10 flex-wrap gap-10 self-start -mt-1.5 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <h1 className="text-2xl font-semibold text-gray-900 max-md:max-w-full">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <div className="flex gap-2 items-center self-start mt-5 whitespace-nowrap h-[29px]">
                <div className="self-stretch my-auto font-semibold text-xl text-gray-900">
                  39,50€
                </div>
                <div className="self-stretch my-auto text-sm text-neutral-400 w-[326px]">
                  /pièce
                </div>
              </div>
            </div>
            <Icon
              src="/Images/heart.png"
              alt="Product feature icon"
              size={20}
            />
          </div>

          {/* <Divider /> */}

          <div className="flex gap-4 mt-5 w-4 h-4 max-w-full text-base text-gray-900 whitespace-nowrap w-[148px]">
          <Icon
              src="/Images/20cm.png"
              alt="Product feature icon"
              size={40}
              className=" w-6 h-6"
            />
            <Icon
              src="/Images/50cm.png"
              alt="Product feature icon"
              size={40}
              className=" w-12 h-12"
            />
          </div>

          {/* <Divider /> */}

          <div className="self-start mt-3.5 text-sm leading-5 text-zinc-600">
            {specifications.map((spec, index) => (
              <React.Fragment key={index}>
                {spec}
                <br />
              </React.Fragment>
            ))}
          </div>

          {/* <Divider /> */}

          <div className="flex flex-wrap gap-1.5 mt-24 w-full text-base font-bold leading-tight text-center text-white uppercase max-md:max-w-full">
            <div
              className="flex shrink-0 bg-white rounded-md border border-solid border-black border-opacity-10 h-[49px] w-[100px] items-center justify-between px-2"
              role="spinbutton"
              tabIndex={0}
              aria-label="Quantity selector"
            >
           
              <button
                className="text-black text-xl font-semibold"
                aria-label="Decrease quantity"
              >
                -
              </button>

              
              <span className="text-black text-lg font-medium">1</span>

              
              <button
                className="text-black text-xl font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              className="flex-auto gap-2.5 self-stretch py-3.5 bg-teal-300 rounded-md min-h-[49px]"
              type="button"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    <Discription/>
    </div>
  );
};

// function Divider() {
//   return (
//     <div className="shrink-0 w-full h-px border border-solid border-neutral-400" />
//   );
// }

function DimensionItem({ icon, value, unit }) {
  return (
    <div className="flex flex-1 gap-2.5 items-center self-start h-[23px]">
      <Icon src={icon} alt={`${value}${unit} dimension`} size={24} />
      <div className="self-stretch my-auto">
        {value}
        {unit}
      </div>
    </div>
  );
}

function Icon({ src, alt, size = 24 }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-square"
      style={{ width: size }}
    />
  );
}

export default MainPage;
