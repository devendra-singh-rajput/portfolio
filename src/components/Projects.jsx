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
          desc: 'A React.js-based portfolio showcasing skills, projects, and achievements with a modern, user-friendly interface. Visitors can easily explore the work, social media and download a professional resume.',
          image: Portfolio,
          live: "#",
          github: "https://github.com/devendra-singh-rajput/portfolio.git"
        },
        {
          title: 'E-Commerce',
          desc: 'A React.js-based e-commerce platform with an admin panel featuring a graphical dashboard to manage orders, products, and website customization. Users can browse, add products to the cart, place orders, and view order history.',
          image: Ecommerce,
          live: "#",
          github: "https://github.com/devendra-singh-rajput/E-commerce-web.git"
        },
        {
          title: 'ExamEasy',
          desc: '"Exam Easy" is a secure online exam platform where teachers can create exams, and send email invitations. It features anti-cheating measures like face recognition, voice recording, and automatic submission on tab changes or screenshots.',
          image: ExamEasy,
          live: "https://exam-easy.netlify.app/",
          github: "https://github.com/Nikeshjaiswal55/ExamPortalBackend.git"
        },
        {
          title: 'AirForce Form',
          desc: 'The Air Force admission form is built with over 50 input fields, using HTML, CSS, and JavaScript for validation. The form features a clean, user-friendly interface with a focus on visual appeal and functionality.',
          image: AirForce,
          live: "https://www.linkedin.com/posts/devendra-singh-rajput_excited-to-share-that-ive-developed-an-activity-7237750740507590657-SmA6?utm_source=share&utm_medium=member_desktop",
          github: "https://github.com/devendra-singh-rajput/Air-Force-Admission-from.git"
        },
        {
          title: 'UrlShortner',
          desc: 'The URL Shortener allows users to paste URLs and get a shortened version, with tracking features for clicks. It also includes login functionality, enabling users to manage and monitor their shortened URLs.',
          image: UrlShortner,
          live: "#",
          github: "https://github.com/devendra-singh-rajput/URL-shortner.git"
        },
        {
          title: 'Login Signup',
          desc: 'The Login and Sign-Up project features a beautiful, responsive UI that adapts seamlessly to all devices. It includes form validation to ensure accurate and secure user input across desktops, tablets, and mobile devices',
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
