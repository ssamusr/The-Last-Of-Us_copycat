export const Navbar = () => {
  return (
    <header className='flex items-center w-full h-16 bg-white'>
      <a href='#'>
        <img
          src='./src/assets/logo.png'
          alt='logo the last of us'
          className='w-12 h-12 ml-5'
        />
      </a>

      <nav className='flex justify-center w-full'>
        <ul className='flex item-center gap-8'>
          <li className='font-bold px-3 py-[0.1rem] hover:bg-gray-100 hover:rounded-3xl'>
            <a href='#'>Juegos</a>
          </li>
          <li className='font-bold px-3 py-[0.1rem] hover:bg-gray-100 hover:rounded-3xl'>
            <a href='#'>Conoce a los personajes</a>
          </li>
          <li className='font-bold px-3 py-[0.1rem] hover:bg-gray-100 hover:rounded-3xl'>
            <a href='#'>Preguntas frecuentes</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
