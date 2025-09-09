import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, } from "@react-three/drei";
import { useRef, forwardRef, useState,  } from "react";
import Hero from "./componenets/hero";
import About from "./componenets/About";
import Project from "./componenets/projects";
import Contact from "./componenets/contact";
import { HiMenu } from "react-icons/hi";
import ConnectWallet from "./componenets/connectwallet";

const DeskModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/low_poly_computer_desk/scene.gltf");

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.1}
      // position={[-7, -1, 0]}
      position={[2.2, -1, 0]}
      {...props}
    />
  );
});



function SpinningModel() {
  const modelRef = useRef<any>(null);

  const value = 0.8 ;
  const speed = Math.PI * 0.0002;

  // useRef to persist state across frames
  const isAddingRef = useRef(true);

  useFrame(() => {
    if (!modelRef.current) return;

    if (isAddingRef.current) {
      modelRef.current.rotation.y += speed;
      if (modelRef.current.rotation.y >= value) {
        isAddingRef.current = false;
      }
    } else {
      modelRef.current.rotation.y -= speed;
      if (modelRef.current.rotation.y <= 0) {
        isAddingRef.current = true;
      }
    }
  });

  return <DeskModel ref={modelRef} />;
}



function App() {


  const [isHidden,setisHidden]= useState(true)

  return (
    <>
     <section className=" min-w-screen min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col">
       {/* desktop nav */}
      <header className=" hidden md:flex flex-col md:flex-row items-center gap-1 md:gap-150 px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Ogunwande Oluwabukunmi
        </h1>
       
        <ul className=" hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-600 transition">
              Contact Me
            </a>
          </li>
        </ul>
       
      </header>
      {/* mobile nav */}
       <header className=" relative md:hidden flex flex-col md:flex-row items-center gap-1 md:gap-150 px-8 py-4">
        <div className="flex flex-row items-center gap-5"> <h1 className="text-2xl font-bold text-gray-800">
          Ogunwande Oluwabukunmi
        </h1>
        <HiMenu className="text-3xl border-2 rounded-sm text-gray-500" onClick={()=>{
          setisHidden((prev)=>!prev)
        }}/>
        </div>
       
        <ul className= {isHidden ? " absolute top-30 md:top-15 hidden my-4 bg-gray-50 rounded-lg p-10 w-full text-center gap-6 text-gray-700 font-medium md:hidden transition" : " z-20 max-w-2xl absolute top-15 flex flex-col my-4 bg-gray-50 rounded-lg p-10 w-full text-center gap-6 text-gray-700 font-medium md:hidden transition"}>
          <li>
            <a href="#about" className="hover:text-indigo-600 transition ">
              About
            </a>
          </li>
          <li >
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li >
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact Me
            </a>
          </li>
        </ul>
       
      </header>

      {/* Hero Section */}
     <div className="w-full relative flex flex-col-reverse md:flex-row items-center justify-between flex-grow px-8 md:px-16 py-12">
  <Hero />  {/* LEFT side */}
  <div className="w-full md:w-3/4 -translate-x-[30px] md:translate-x-1/3 h-[400px] md:h-[600px] flex items-center">
    <Canvas camera={{ position: [10, 10, 30], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <SpinningModel />
     
    </Canvas>
  </div>
</div>

    </section>
    <About/>
    <Project/>
     <ConnectWallet/>
    <Contact/>
   
    </>
   
  );
}

export default App;
