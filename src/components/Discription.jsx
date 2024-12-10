import React from 'react'

const Discription = () => {
  return (
    <div className='w-[100%] flex gap-4  '>
      <div className="left w-1/2 ">
      <h3 className='px-4 py-2 text-medium font-md'>Discription produit</h3>
      <p className='px-4 py-2 text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam id ullam? Nemo veritatis dolorum blanditiis fugiat distinctio delectus culpa aspernatur qui, recusandae sint, dicta ullam numquam, maiores porro quisquam incidunt doloremque quos. Blanditiis eveniet, voluptatem excepturi incidunt nam natus.</p>
      </div>
      <div className="right w-1/2 p-4 flex flex-col gap-4">
      <div className="top flex items-center justify-between  rounded w-full h-1/2  px-4 py-4 ">
      <h2 className='flex items-center justify-between'>LIVERAISONS</h2>
      <button
                className="text-black text-xl font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
      </div>
      <div className="bottom flex items-center justify-between rounded w-full h-1/2  px-4 py-4">
      <h2 className='flex items-center justify-between'>QUESTIONS</h2>
      <button
                className="text-black text-xl font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
      </div>
      </div>
    </div>
  )
}

export default Discription;
