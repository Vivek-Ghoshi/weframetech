import React from 'react';

function ServiceFeatures() {
  const services = [
    {
      icon: "/Images/livirse.png",
      title: "Livraison & Reprise",
      description: "Selon vos besoins",
      iconAlt: "Delivery and pickup service icon"
    },
    {
      icon: "/Images/dish.png",
      title: "Commande Illimitée",
      description: "Tout est possible",
      iconAlt: "Unlimited orders service icon"
    },
    {
      icon: "/Images/comand.png",
      title: "Commande Illimitée",
      description: "Tout est possible",
      iconAlt: "Unlimited orders service icon"
    },
    {
      icon: "/Images/truck.png",
      title: "Transport & Enlèvement",
      description: "On s'occupe de tout.",
      iconAlt: "Transport and removal service icon"
    }
  ];

  return (
    <div className="flex flex-col text-center rounded-none">
      <div className="flex flex-col relative items-center px-14 pt-12 pb-40 w-full rounded-xl max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col items-center  max-w-full w-[449px]">
          <div className="text-4xl font-medium text-neutral-700">
            On s'occupe de{" "}
            <span className="font-extrabold text-teal-300">tout</span>
          </div>
          <div className="mt-2.5 text-sm text-neutral-400 max-md:max-w-full">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </div>
        </div>
        <div className="shrink-0 self-start mt-12 ml-36 h-px absolute top-[32%] left-[53%] border border-solid border-neutral-400 w-[123px] max-md:mt-10 max-md:ml-2.5" />
        <div className="z-10 shrink-0 absolute top-[45%] left-[26%] h-px border border-solid border-neutral-400 w-[123px]" />
        <div className="z-10 shrink-0 absolute top-[44%] left-[24%] ml-72 w-[123px] h-px border border-solid border-neutral-400" />
        <div className="flex z-10 flex-wrap gap-6 justify-between items-end py-2.5 mt-0 -mb-8 max-w-full w-[960px] max-md:mb-2.5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, iconAlt, title, description }) {
  return (
    <div className="flex flex-col items-center w-[211px]">
      <img
        loading="lazy"
        src={icon}
        alt={iconAlt}
        className="object-contain w-14 aspect-[1.1]"
      />
      <div className="self-stretch mt-3.5 text-xl font-medium leading-none text-neutral-700">
        {title}
      </div>
      <div className="mt-3 text-sm text-neutral-400">
        {description}
      </div>
    </div>
  );
}

export default ServiceFeatures;
// import React from "react";

// const FeaturesSection = () => {
//   const features = [
//     {
//       img: "./image1",
//       label: "label text",
//       description: "lorem text",
//       alt: "Feature illustration 1",
//     },
//     {
//       img: "./image1",
//       label: "label text",
//       description: "lorem text",
//       alt: "Feature illustration 2",
//     },
//     {
//       img: "./image1",
//       label: "label text",
//       description: "lorem text",
//       alt: "Feature illustration 3",
//     },
//     {
//       img: "./image1",
//       label: "label text",
//       description: "lorem text",
//       alt: "Feature illustration 4",
//     },
//   ];

//   return (
//     <section className="flex overflow-hidden flex-col justify-center px-24 py-20 tracking-tight leading-tight bg-white max-md:px-5">
//       <div className="flex overflow-hidden flex-col w-full bg-sky-400 bg-opacity-40 rounded-[46px] max-md:max-w-full">
//         <div className="flex overflow-hidden flex-col justify-center px-56 py-11 max-w-full text-zinc-800 w-[1200px] max-md:px-5">
//           <div className="flex flex-col w-full">
//             <h1 className="self-center text-6xl font-bold max-md:max-w-full max-md:text-4xl">
//               title text title <span className="text-sky-400">text</span>
//             </h1>
//             <p className="mt-3 text-2xl font-medium max-md:max-w-full">
//               this is just a simple text this is just a simple text this is just
//               a simple text
//             </p>
//           </div>
//         </div>
//         <div className="flex overflow-hidden gap-0 justify-center items-center w-full font-medium max-md:max-w-full">
//           <div className="flex flex-wrap flex-1 shrink justify-center items-center self-stretch py-8 my-auto w-full rounded-lg basis-0 min-w-[240px] max-md:max-w-full">
//             {features.map((feature, index) => (
//               <React.Fragment key={index}>
//                 <div className="flex flex-col items-center self-stretch pb-9 my-auto w-44">
//                   <img
//                     loading="lazy"
//                     src={feature.img}
//                     className="object-contain self-stretch w-full aspect-[1.5]"
//                     alt={feature.alt}
//                   />
//                   <h2 className="mt-2.5 text-3xl text-zinc-950">{feature.label}</h2>
//                   <p className="text-xl text-black">{feature.description}</p>
//                 </div>
//                 {index < features.length - 1 && (
//                   <div className="shrink-0 self-stretch my-auto h-px border border-solid border-zinc-500 border-opacity-70 w-[153px]"></div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
