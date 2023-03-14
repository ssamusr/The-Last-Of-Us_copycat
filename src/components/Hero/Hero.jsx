import { useState } from 'react'
import { images } from '../../data/data'

export const Hero = () => {
  const [index, setIndex] = useState(0)

  setTimeout(() => {
    if (index === images.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }, 3000)

  const HeroHub = () => {
    if (index === 0) {
      return (
        <div className='flex items-center justify-center w-[55rem] h-full absolute top-0 left-0 right-0 mx-auto animate-fade'>
          <img
            src={images[index].imgHub} alt=''
            className='w-96 h-auto'
          />
        </div>
      )
    }
    if (index % 2 === 0) {
      return (
        <div className='flex flex-col items-end justify-end w-[55rem] h-full absolute top-0 left-0 right-0 mx-auto animate-fade'>
          <img
            src={images[index].imgHub} alt=''
            className='w-96 h-auto'
          />
          <p className='w-[50ch] text-sm text-white p-1 mt-10'>{images[index].text}</p>
        </div>
      )
    }
    if (index % 2 !== 0) {
      return (
        <div className='flex flex-col items-start justify-end w-[55rem] h-full absolute top-0 left-0 right-0 mx-auto animate-fade'>
          <img
            src={images[index].imgHub} alt=''
            className='w-64 h-auto'
          />
          <p className='w-[50ch] text-sm text-white p-1 mt-10'>{images[index].text}</p>
        </div>
      )
    }
  }

  return (
    <section className='w-full'>
      <div className='w-full h-auto relative '>
        <img
          src={images[index].imgDesktop} alt={images[index].altDesktop}
          className='w-full h-full'
        />
        <HeroHub />

      </div>

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
