import face from './img/face.png'
import gram from './img/gram.png'
import linkedin from './img/linkedin.png'
import tweet from './img/tweet.png'
import whats from './img/whats.png'

const Footer = () => {
  return (
    <div className=''>
      <div className="grid grid-cols-3 bg-[#eff2f3] text-[#16446a] p-5 pt-10">
        <div>
          <h1 className="text-6xl font-bold p-10 pb-0">Nova</h1>
          <ul className="text-xl flex pl-10">
            <li className=' h-[25px] w-[25px] mr-2 p-1 border border-black rounded-full hover:rounded-lg'>
              <a href="/">
                <img src={face} alt="" />
              </a>
            </li>
            <li className=' h-[25px] mr-2 w-[25px] p-1 border border-black rounded-full hover:rounded-lg'>
              <a href="/">
                <img src={gram} alt="" />
              </a>
            </li>
            <li className=' h-[25px] w-[25px] mr-2 p-1 border border-black rounded-full hover:rounded-lg'>
              <a href="/">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className=' h-[25px] w-[25px] mr-2 p-1 border border-black rounded-full hover:rounded-lg'>
              <a href="/">
                <img src={tweet} alt="" />
              </a>
            </li>
            <li className=' h-[25px] w-[25px] p-1 border border-black rounded-full hover:rounded-lg'>
              <a href="/">
                <img src={whats} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-2xl font-bold">
          <ul className="">
            <li className='pb-5'>
              <a href="/" className="foot">Projects</a>
            </li>
            <li className='pb-5'>
              <a href="/" className="foot">Our story</a>
            </li>
            <li className='pb-5'>
              <a href="/" className="foot">Our sustainability journey</a>
            </li>
            <li className='pb-5'>
              <a href="/" className="foot">Technical documents</a>
            </li>
            <li className='pb-5'>
              <a href="/" className="foot">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <div className='text-xl pl-5 pb-5'>
            <p className='pb-1'>Email</p>
            <a href="mailto:design@novainnovations.com">design@novainnovations.com</a>
          </div>
          <div className='text-xl pl-5 pb-7'>
            <p>Phone</p>
            <a href="tel:(234)-806-579">(234)-806-579</a>
          </div>
          <div className='border py-2 w-[250px] text-black ml-4 border-black rounded-full hover:text-white hover:bg-gray-500'>
          <button className='text-2xl px-10 items-center pl-16 pb-1'>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;