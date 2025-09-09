import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
function About() {
  const imageRef = useRef<HTMLImageElement>(null)
  const parentRef = useRef<HTMLAllCollection>(null)

  useGSAP(()=>{
      gsap.to(imageRef.current,{
        x : "0px",
        width : "440px",
        height : "440px",
        rotate : "720",
       scrollTrigger:{
        trigger : imageRef.current,
        start : "top 82%",
        end : "+=500"
       }
      })
  },{scope : parentRef})

  return (
    <section className="py-20 w-full md:gap-10" id="about">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row mt-12 gap-10 items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/bukunmimage.jpeg"
            alt="Picture of Oluwabukunmi Ogunwande"
            className="-translate-x-[900px]   rounded-lg object-cover shadow-lg"
            ref={imageRef}
          />
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-1/2 leading-relaxed text-gray-700 space-y-4 px-5">
          <p>
            My name is{" "}
            <span className="font-semibold text-indigo-600">
              Oluwabukunmi Ogunwande
            </span>
            . I’m a 16-year-old Nigerian based in Osun State.
          </p>

          <p>
            I’ve been coding since I was 9—basically for as long as I can
            remember 😁. Since then, I’ve been honing my skills and building
            experience. I’m proficient in{" "}
            <span className="font-medium">
              HTML, CSS, JavaScript <span className="text-yellow-400">(very good in this🫡)</span>, Python, TailwindCSS, Bootstrap, ShadCN,
              ReactJS, ThreeJS, Ethers.js, GSAP, Node.js, Express.js, MongoDB,
              PostgreSQL, and more
            </span>
            . I’m also currently learning{" "}
            <span className="font-medium">Solidity</span> for blockchain
            development (a lot, right? 😊).
          </p>

          <p>
            Over time, I’ve built several{" "}
            <a
              href="#projects"
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              projects
            </a>{" "}
            that showcase these skills. One of my biggest goals is to become a{" "}
            <span className="font-semibold">self-made billionaire 🙌</span>. I
            believe that mixing coding (which I know a lot of), imagination,
            creativity, and hard work is the way forward 🚀.
          </p>

          <p>
            <span className="font-semibold">Interests:</span> Coding 😂, fashion
            (especially shoes), watching movies, playing games, drawing
            (sometimes 😂), robotics, cars, making, counting, and spending money.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
