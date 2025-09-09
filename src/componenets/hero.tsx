import { Typewriter } from "react-simple-typewriter";
import { useEffect,useRef } from "react";
import gsap from "gsap";
function Hero() {
  const parentRef = useRef<HTMLAllCollection | undefined>(null)
  useEffect(()=>{
    const ct = gsap.context(()=>{
      gsap.to(parentRef.current,{
        opacity :1,
         duration: 2.5,
          ease: "power1.out"
      })
    },[parentRef])
    return ()=>ct.revert()
  })
  return (
    
    <div ref={parentRef} className="opacity-0 md:absolute md:top-15  w-full md:w-1/2 text-center md:text-left space-y-6">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Hi👋, I’m <span className="text-sky-600">Oluwabukunmi</span> 
        <br />
        <span className="text-gray-800 ">
          I am{" "}
          <span className="text-sky-600 ">
            <Typewriter
              words={[
                "a Full-Stack Web Developer",
                "a Javascript Developer",
                "a Web3 Developer",
                "a Blockchain Developer",
                "known as Wayne 🚀",
                "3D web developer"
                
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </span>
      </h2>

      <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
        I have the power of Programming in my fingers
       Welcome to my World😊
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
        <a
          href="#projects"
          className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow-md hover:bg-sky-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-sky-600 text-sky-600 font-medium rounded-lg shadow-md hover:bg-sky-50 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Hero;

