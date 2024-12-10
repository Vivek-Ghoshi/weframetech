import * as React from "react";

const navigationLinks = [
  { icon: "/Images/inspirations.png", text: "Inspirations" },
  { icon: "/Images/mesfav.png", text: "Mes favoris", count: "24" },
  { icon: "/Images/cart.png", text: "Panier", variant: "primary" }
];

const categories = [
  { name: "Art de la table", active: true },
  { name: "Mobilier" },
  { name: "Nappage" },
  { name: "Matériel de salle" },
  { name: "Cuisine" },
  { name: "Barbecue" },
  { name: "Tente" },
  { name: "Chauffage" },
  { name: "Podium - Piste de danse" },
  { name: "Son et lumière" },
  { name: "Packs" },
  { name: "Consommables" }
];

function NavigationBar() {
  return (
    <nav className="flex flex-col px-6 pt-7 w-full bg-white border-b border-solid max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-3 items-start text-sm text-gray-500 max-md:max-w-full">
          <img
            loading="lazy"
            src="/SVG/logo.svg"
            alt="Company Logo"
            className="object-contain shrink-0 mt-1 max-w-half aspect-[2.04] w-[110px]"
          />
          <SearchBar />
        </div>
        <div className="flex gap-3 items-center self-start font-sm max-md:max-w-full">
          {navigationLinks.map((link, index) => (
            <NavigationLink key={index} {...link} />
          ))}
          <div className="flex shrink-0 self-stretch my-auto w-11 h-11 bg-gray-200 rounded-[46px]" />
          <div className="flex gap-4 items-center self-stretch my-auto text-sm leading-none text-center text-gray-800 whitespace-nowrap">
            <div className="flex gap-1 items-center self-stretch my-auto">
              <div className="flex gap-2 items-center self-stretch my-auto">
                <div className="self-stretch my-auto">FR</div>
                <img
                  loading="lazy"
                  src="/Images/arrow.png"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryMenu categories={categories} />
      <div className="flex shrink-0 mt-4 h-0.5 bg-sky-600 w-[120px]" />
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-wrap flex-auto gap-2.5 items-center pl-4 bg-gray-50 rounded-md" role="search">
      <label htmlFor="searchInput" className="sr-only">Rechercher un produit</label>
      <input
        type="search"
        id="searchInput"
        className="self-stretch my-auto w-[450px] max-md:max-w-full bg-transparent border-none outline-none"
        placeholder="Rechercher un produit"
      />
      <img
        loading="lazy"
        src="/Images/search.png"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[0.98] w-[44px]"
      />
    </div>
  );
}

function NavigationLink({ icon, text, count, variant }) {
  const baseClasses = "flex gap-2 items-center self-stretch";
  const variantClasses = variant === "primary" 
    ? "px-4 py-3.5 text-sm text-white whitespace-nowrap bg-sky-600 rounded-md border border-sky-700 border-solid min-h-[48px]"
    : "px-2.5 py-3.5 rounded-md min-h-[48px] text-sm text-zinc-700";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <span className="self-stretch my-auto">{text}</span>
      {count && (
        <div className="flex flex-col self-stretch my-auto w-7 text-xs whitespace-nowrap rounded-[30px] text-zinc-800">
          <div className="px-1 py-0.5 bg-gray-300 bg-opacity-40 rounded-[30px]">
            {count}
          </div>
        </div>
      )}
    </button>
  );
}

function CategoryMenu({ categories }) {
  return (
    <div className="flex flex-wrap gap-8 items-center mt-8 mr-5 text-sm font-medium text-center text-gray-500 uppercase max-md:mr-2.5 max-md:max-w-full">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`self-stretch my-auto ${
            category.active ? "font-bold text-sky-600" : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default NavigationBar;
