import logo from './img/logo.png'

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md backdrop-filter">
        <div className='container mx-auto py-4'>
          <div className='flex justify-between items-center'>
            <div className='-m-5 -ml-8'>
              <img src={logo} alt="logo" className='h-24 w-48 relative' />
            </div>
            <div className='mt-2'>
              <ul className='flex space-x-4'>
                <li>
                  <a href="/" className='text-xl text-white ml-4 nav'>Products</a>
                </li>
                <li>
                  <a href="/" className='text-xl text-white ml-4 nav'>Resources</a>
                </li>
                <li>
                  <a href="/" className='text-xl text-white ml-4 nav'>About Us</a>
                </li>
                <li>
                  <a href="/" className='text-xl text-white ml-4 nav'>Our Clients</a>
                </li>
                <li>
                  <a href="/" className='text-xl text-white ml-4 nav'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
