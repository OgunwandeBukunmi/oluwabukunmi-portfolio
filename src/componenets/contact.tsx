import { FiGithub } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { collection , addDoc } from "firebase/firestore"
import {db} from "../../firebaseConfig.ts"
import { useState } from "react"
function Contact(){
      const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Message,SetMessage]= useState("")
    const [sentMessage,SetSendMessage] = useState(false)
async function handleSubmit(){
  
    try {
  const docRef = await addDoc(collection(db, "connects"), {
  
    email: Email,
    message: Message,
      name : Name
  });
  if(docRef.id){
    SetSendMessage(true)
  }
  
} catch (e) {
  console.error("Error adding document: ", e);
}
}

    return (
        <section className="  min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-20 px-6 md:px-20 mt-8" id="contact">
            <main className="flex flex-col gap- items-center ">
                <h2 className="text-center text-4xl font-extrabold">Contact Me</h2>
                 
            <div className="flex flex-col max-w-3xl p-12 mt-8  bg-white rounded-lg gap-8 justify-center"> 
                {sentMessage ? (
                    <p className="p-2 text-green-900 bg-green-300 ">Message sent</p>
                ):(
                    <></>
                )}
                <div className="w-full flex flex-col md:flex-row gap-5">
                <input value={Name} onChange={(e)=>{
                    setName(e.target.value)
                }} type="text" name="name" className="bg-white p-3 w-80 rounded-lg border-1 border-gray-500 focus:ring-2 focus:ring-indigo-400 my-2 outline-0 " placeholder="Your name" />
                <input  value={Email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} type="email"  name="email" className="bg-white p-3  w-80 rounded-lg border-1 border-gray-500 focus:ring-2 focus:ring-indigo-400 my-2 outline-0 " placeholder="Your email" />
                </div>
                
                <textarea  value={Message} onChange={(e)=>{
                    SetMessage(e.target.value)
                }} name="message"  rows={6} className="bg-white w-full border-1 p-3   border-gray-500  rounded-lg outline-0  " placeholder="Your message" ></textarea>
                <button onClick={handleSubmit} className="p-3 w-full md:w-1/3  bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg font-bold transition">Send Message</button>
            </div>
             <div className="flex flex-row gap-5 m-9 pt-20"> 
            <a href="https://github.com/OgunwandeBukunmi"><FiGithub className="text-3xl"/> </a>
            <a href="https://www.linkedin.com/in/ogunwande-oluwabukunmi-77075b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FiLinkedin className="text-3xl"/></a>
            <a href="https://x.com/redwayne1000?s=21"><FiTwitter className="text-3xl"/> </a>
            <a href="https://wa.me/2349161276874"><FaWhatsapp className="text-3xl"/></a>
            <a href="https://www.tiktok.com/@mr_stw_nig?_t=ZS-8zYn3hx4JHk&_r=1"><FaTiktok className="text-3xl"/></a>

            </div>
            </main>
          
        </section>
    )
}

export default Contact