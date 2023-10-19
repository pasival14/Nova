import { Parallax } from "react-parallax";
import imag from './img/imag.jpg'
import Slide from "./Slider";

const Home = () => {
  return (
    <div className="bg-[#16446a] text-white">
        <div className="">
          <div
            className="h-[706px] bg-cover bg-no-repeat bg-center text-gray-200"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="pt-[350px] pl-4">
              <h2 className='text-6xl font-bold pb-7'>Structural vision <br /> and Modern elegance</h2>
              <hr className='w-[50%]' />
              <p className='text-2xl pt-4'>Where design and innovation converge to redefine spaces.</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className="pl-6 text-[#16446a] py-8 bg-[#F5F5DC]">
            <h2 className='text-4xl font-bold'>What we offer</h2>
            <p className='text-3xl mt-3 mb-7'>At our construction design firm, we don't just design structures; we craft dreams.
            </p>
          </div>
          <Parallax className="overflow-clip" strength={-300} bgImage={imag} bgImageAlt="this"
          style={{
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <p className='text-6xl text-gray-300 font-bold absolute top-48 right-28'>This is what the <br />future looks like</p>
          </Parallax>
          <p className="text-center text-3xl italic pt-4">We're your partners in bringing your vision to<br /> life, offering architectural design, project <br />planning, interior design, sustainable <br /> solutions, and consultancy. Your dream <br /> is our blueprint, and we're here to build <br /> it with passion, precision, and innovation.</p>
      </div>

      <div className="text-3xl  mt-24">
        <div className="grid grid-cols-5 overflow-hidden p-10">
          <p className="col-span-2 text-center pt-[165px]">Our services encompass a <br />spectrum of expertise, <br />from architectural marvels,</p>
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
        </div>
        <div className="grid grid-cols-5">
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/159475/latvia-irbene-radio-telescope-159475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our renowned innovative, technologically <br /> advanced and sustainable <br /> structural design,</p>
        </div>
        <div className="grid grid-cols-5 overflow-hidden p-10">
          <p className="col-span-2 text-center pt-[165px]">Our reliable cutting-edge, <br /> efficient and sustainable <br />electrical design solutions,</p>
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/17574781/pexels-photo-17574781/free-photo-of-clouds-illuminated-with-sunset.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}></div>
        </div>
        <div className="grid grid-cols-5">
          <div className="h-[400px] w-[80%] rounded-xl mr-[150px] hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our technologically adept <br />and carefully tailored <br /> state-of-the-art <br />mechanical designs,</p>
        </div>
        <div className="grid grid-cols-5 overflow-hidden p-10">
          <p className="col-span-2 text-center pt-[165px]">Our cost-effective and<br />quantitative analysis of your <br />budget and expenditures,</p>
          <div className="h-[400px] w-[80%] rounded-xl hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
        </div>
        <div className="grid grid-cols-5">
          <div className="h-[400px] w-[80%] rounded-xl mr-[150px] hover:scale-110 duration-500 ml-24 col-span-3 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
          <p className="col-span-2 text-center pt-[165px]">Our results-oriented, strategic<br /> and insightful consulting <br />services to help clients make<br /> informed decisions.</p>
        </div>
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