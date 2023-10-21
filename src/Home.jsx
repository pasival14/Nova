import { Parallax } from "react-parallax";
import imag from './img/imag.jpg'
import Slide from "./Slider";

const Home = () => {
  return (
    <div className="bg-[#16446a] text-white overflow-x-hidden">
        <div className="">
          <div
            className="h-[500px]  sm:h-[706px] bg-cover bg-no-repeat bg-center text-gray-200"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="pt-[280px] sm:pt-[350px]">
              <h2 className='text-4xl pb-1 sm:text-6xl font-bold pl-4 sm:pb-7'>Structural vision <br /> and Modern elegance</h2>
              <hr className='w-full sm:w-[50%]' />
              <p className='text-2xl pl-4 sm:pt-4'>Where design and innovation converge to redefine spaces.</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className="pl-6 text-[#16446a] py-8 bg-[#F5F5DC]">
            <h2 className='text-3xl sm:text-4xl font-bold'>What we offer</h2>
            <p className='text-2xl sm:text-3xl mt-3 mb-7'>At our construction design firm, we don't just design structures; we craft dreams.
            </p>
          </div>
          <div className="!bg-fixed relative bg-cover bg-center h-[500px]  sm:h-[500px] " id="img"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
          >
            <p className='text-6xl text-gray-300 pl-2 font-bold absolute top-48 right-28'>This is what the <br />future looks like</p>
          </div>
          <div className="w-[98%] pl-[1%] sm:w-[60%] sm:ml-[20%]">
          <p className="text-center text-3xl italic pt-4">We're your partners in bringing your vision to life, offering architectural design, project planning, interior design, sustainable solutions, and consultancy. Your dream is our blueprint, and we're here to build it with passion, precision, and innovation.</p>
          </div>
      </div>

      <div className="text-3xl  sm:mt-24">
        <hr />
        <div className="sm:grid grid-cols-5 overflow-hidden sm:p-10">
          <p className="col-span-2 pb-8 text-center pt-[165px]">Our services encompass a <br />spectrum of expertise, <br />from architectural marvels,</p>
          <div className="h-[400px] w-full mr-[20%] sm:w-[80%] rounded-xl hover:scale-110 duration-500 sm:ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
        </div>
        <hr className="my-4 sm:my-0" />
        <div className="sm:grid grid-cols-5 overflow-hidden sm:p-10">
          <div className="h-[400px]  sm:w-[80%] rounded-xl hover:scale-110 duration-500 sm:ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/159475/latvia-irbene-radio-telescope-159475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our renowned innovative, technologically <br /> advanced and sustainable <br /> structural design,</p>
        </div>
        <hr />
        <div className="grid grid-cols-5 overflow-hidden p-10">
          <p className="col-span-2 text-center pt-[165px]">Our reliable cutting-edge, <br /> efficient and sustainable <br />electrical design solutions,</p>
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/17574781/pexels-photo-17574781/free-photo-of-clouds-illuminated-with-sunset.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}></div>
        </div>
        <hr />
        <div className="grid grid-cols-5">
          <div className="h-[400px] w-[80%] rounded-xl mr-[150px] hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our technologically adept <br />and carefully tailored <br /> state-of-the-art <br />mechanical designs,</p>
        </div>
        <hr />
        <div className="grid grid-cols-5 overflow-hidden p-10">
          <p className="col-span-2 text-center pt-[165px]">Our cost-effective and<br />quantitative analysis of your <br />budget and expenditures,</p>
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
        </div>
        <hr />
        <div className="grid grid-cols-5">
          <div className="h-[400px] w-[80%] rounded-xl mr-[150px] hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our results-oriented, strategic<br /> and insightful consulting <br />services to help clients make<br /> informed decisions.</p>
        </div>
        <hr />
      </div>
      
      <div>
        <p className="text-4xl text-center pt-5 ">Our major clients</p>
        <div className="h-[150px] overflow-hidden w-[90%]  ml-[80px]">
          <Slide />
        </div>
      </div>
    </div>
  );
}
 
export default Home;