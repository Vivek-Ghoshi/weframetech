import * as React from "react";

const products = [
  {
    icon: "/Images/heart.png",
    category: "Art de la table",
    image: "/Images/table2.png",
    title: "Title",
    price: "0",
    pricePerPiece: "0,35",
    reference: "VABGN5",
    pieces: "20"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce9ace084b21eac367854ae0d7f2647c95863a1152563aad29fbb6c80cae1cd3?placeholderIfAbsent=true&apiKey=60b2831358b7404ba4bd888e086aaaac",
    category: "Art de la table",
    image: "/Images/table2.png",
    title: "Title",
    price: "0",
    pricePerPiece: "0,35",
    reference: "VABGN5",
    pieces: "20"
  },
  {
    icon: "/Images/heart.png",
    category: "Art de la table",
    image: "/Images/table2.png",
    title: "Title",
    price: "0",
    pricePerPiece: "0,35",
    reference: "VABGN5",
    pieces: "20"
  },
  {
    icon: "/Images/heart.png",
    category: "Art de la table",
    image: "/Images/table2.png",
    title: "Title",
    price: "0",
    pricePerPiece: "0,35",
    reference: "VABGN5",
    pieces: "20"
  },
  {
    icon: "/Images/heart.png",
    category: "Art de la table",
    image: "/Images/table2.png",
    title: "Title",
    price: "0",
    pricePerPiece: "0,35",
    reference: "VABGN5",
    pieces: "20"
  }
];

function ProductCard({ image, category, title, price, pricePerPiece, reference, pieces }) {
  return (
    <div className="flex flex-col min-w-[300px] w-[300px]">
      <div className="flex gap-14 relative flex-col justify-between px-2.5 pt-5 pb-2 w-full rounded-lg bg-neutral-100 min-h-[362px]">
        <div className="flex z-0 items-center pl-3 w-full">
          <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0">
            <div className="flex overflow-hidden z-10 items-start mt-0 min-h-[32px]">
              <img
                loading="lazy"
                src="/Images/heart.png"
                alt=""
                className="object-contain w-6 aspect-[1.12]"
              />
            </div>
          </div>
          <div className="flex gap-1 items-start self-stretch my-auto text-xs font-medium text-center text-gray-900 uppercase w-[140px]">
            <div className="gap-1 font-sm self-stretch px-2 py-0.5 bg-white rounded min-h-[18px] w-[140px]">
              {category}
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain absolute top-2/4 left-2/4 z-0 w-56 max-w-full h-56 -translate-x-2/4 -translate-y-2/4 aspect-square"
        />
        <div className="flex z-0 gap-2 items-center px-2 py-1.5 mt-7 w-full text-center whitespace-nowrap bg-white rounded-lg">
        </div>
      </div>
      <div className="flex flex-col px-2.5 mt-3 w-full leading-none">
        <div className="flex items-start w-full text-2xl text-neutral-700">
          <div className="flex-1 shrink basis-0">{title}</div>
          <div className="font-medium text-right">
            <span className="text-neutral-700">{price}</span>
            <span className="text-neutral-700">€</span>
          </div>
        </div>
        <div className="flex gap-1.5 items-center mt-2 w-full">
          <div className="flex-1 shrink self-stretch my-auto text-sm basis-4 text-neutral-400">
            {pricePerPiece}€/Pièce · <span className="text-xs">RÉF : {reference}</span>
          </div>
          <div className="gap-2.5 self-stretch px-2 py-1.5 my-auto text-xs font-medium text-center bg-gray-100 rounded-3xl text-slate-500">
            {pieces} pièces
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductLayout() {
  return (
    <div className="flex flex-col   px-8 mt-10 max-md:px-5">
      <div className="flex  gap-10 justify-between items-center max-w-full font-medium text-neutral-700 w-[1540px]">
        <div className="self-stretch my-auto text-3xl max-md:max-w-full">
          Articles similaries
        </div>
        <div className="self-stretch text-sm border-b-2 border-zinc-400 my-auto text-base uppercase">
          Voir toute la collection
        </div>
      </div>
      <div className="flex gap-3 flex-shrink-0 overflow-x-auto items-start mt-8 w-full max-w-[1640px] max-md:max-w-full">
        <div className="flex flex-1 shrink gap-3 items-start w-full basis-0 min-w-[300px] max-md:max-w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
