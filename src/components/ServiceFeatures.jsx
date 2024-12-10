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

