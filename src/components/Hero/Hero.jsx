import { useState } from 'react'
import { images } from '../../data/data'

export const Hero = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className='w-full'>
      <img
        src={images[index].imgDesktop} alt={images[index].altDesktop}
        className='w-full h-auto'
      />

      <div className='flex justify-center gap-4 w-full h-96 pt-10 bg-black'>
        {
            images.map((image) => (
              <button
                key={image.id}
                className={index === image.id - 1
                  ? 'w-40 h-24 rounded-xl overflow-hidden transition ease-in-out duration-300 hover:-translate-y-2 shadow-[0_0_0_3px_black,0_0_0_6px_#0070cc]'
                  : 'w-40 h-24 rounded-xl overflow-hidden transition ease-in-out duration-300 hover:-translate-y-2'}
                onClick={() => setIndex(image.id - 1)}
              >
                <img
                  src={image.imgKeyart} alt={image.altKeyart}
                  className='w-full h-full'
                />
              </button>
            ))
        }
      </div>
    </section>
  )
}
