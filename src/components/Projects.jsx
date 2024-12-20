import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import Ecommerce from '../assets/Ecommerce.png'
import ExamEasy from '../assets/ExamEasy.png'
import AirForce from '../assets/AirForce.png'
import Login from '../assets/Login.png'
import UrlShortner from '../assets/UrlShortner.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          live: "#",
          github: "https://github.com/rohitsingh93300/portfolio"
        },
        {
          title: 'E-Commerce',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: Ecommerce,
          live: "#",
          github: "https://github.com/devendra-singh-rajput/E-commerce-web.git"
        },
        {
          title: 'ExamEasy',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: ExamEasy,
          live: "https://exam-easy.netlify.app/",
          github: "https://github.com/Nikeshjaiswal55/ExamPortalBackend.git"
        },
        {
          title: 'AirForce Form',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: AirForce,
          live: "https://www.linkedin.com/posts/devendra-singh-rajput_excited-to-share-that-ive-developed-an-activity-7237750740507590657-SmA6?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/devendra-singh-rajput/Air-Force-Admission-from.git"
        },
        {
          title: 'UrlShortner',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: UrlShortner,
          live: "#",
          github: "https://github.com/devendra-singh-rajput/URL-shortner.git"
        },
        {
          title: 'Login Signup',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Login,
          live: "https://devendra-singh-rajput.github.io/animated-login-sing-up-from/",
          github: "https://github.com/devendra-singh-rajput/animated-login-sing-up-from.git"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
