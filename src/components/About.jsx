import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NestJs from '../assets/NestJs.png'
import mySql from '../assets/MySql.png'
import SpringBoot from '../assets/SpringBoot.png'
import java from '../assets/java.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Devendra Singh Rajput </p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer with expertise in MERN stack, web development and the WordPress, SEO.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack Exam Easy website , E-commerce, and even a Air Force admission form. My projects demonstrate my ability to integrate poweful backend solutions with sleek, user-friendly frontend designs.
                                </p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    
                                   {/* React */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={ReactLogo} alt="React" className="w-10 h-10 rounded-full" />
    <span className="font-semibold">React</span>
  </div>

  
  {/* 
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={ReduxLogo} alt="Redux" className="w-10 h-10" />
    <span className="font-semibold">Redux</span>
  </div> 
  */}

  {/* Tailwind */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Tailwind} alt="Tailwind" className="w-10 h-10 rounded-full" />
    <span className="font-semibold">Tailwind CSS</span>
  </div>

  {/* Bootstrap */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Bootstrap} alt="Bootstrap" className="w-10 h-10" />
    <span className="font-semibold">Bootstrap</span>
  </div>

  {/* Node.js */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={NodeLogo} alt="Node.js" className="w-10 h-10" />
    <span className="font-semibold">Node.js</span>
  </div>

  {/* Express.js */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Express} alt="Express.js" className="w-10 h-10" />
    <span className="font-semibold">Express.js</span>
  </div>

  {/* Nest.js */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={NestJs} alt="Nest.js" className="w-10 h-10 mix-blend-multiply" />
    <span className="font-semibold">Nest.js</span>
  </div>

{/* java.js */}
<div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={java} alt="Nest.js" className="w-10 h-10" />
    <span className="font-semibold">Java</span>
  </div>


  {/* SpringBoot */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={SpringBoot} alt="Nest.js" className="w-10 h-10  mix-blend-multiply" />
    <span className="font-semibold">SpringBoot</span>
  </div>



  {/* MongoDB */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Mongodb} alt="MongoDB" className="w-10 h-10" />
    <span className="font-semibold">MongoDB</span>
  </div>

  {/* MySQL */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={mySql} alt="MySQL" className="w-10 h-10 mix-blend-multiply" />
    <span className="font-semibold">MySQL</span>
  </div>

  {/* JavaScript */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Javascript} alt="JavaScript" className="w-10 h-10" />
    <span className="font-semibold">JavaScript</span>
  </div>

  {/* HTML */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Html} alt="HTML" className="w-10 h-10" />
    <span className="font-semibold">HTML</span>
  </div>

  {/* CSS */}
  <div className="border border-red-300 flex items-center gap-2 w-max px-4 py-2 rounded-lg shadow-md shadow-red-300">
    <img src={Css} alt="CSS" className="w-10 h-10" />
    <span className="font-semibold">CSS</span>
  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                        Apart from coding, I am deeply passionate about exploring and learning new technologies, staying updated with the latest trends in web development, and continuously improving my skill set. I take pride in not only advancing my own knowledge but also in helping others dive deeper into the world of programming and technology. Whether it's mentoring, sharing insights, or collaborating on innovative projects, I strive to inspire and support others in their journey toward mastering the ever-evolving tech landscape. My enthusiasm for learning and teaching fuels my commitment to growth and excellence in this dynamic field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
