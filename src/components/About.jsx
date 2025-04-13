import React from 'react'
import profile from '../assets/profile.png'

export const About = () => {
  return (
    <section
      id="about" 
      className="h-[calc(100vh-20rem)] w-full max-w-[75rem] flex items-center justify-between box-border mx-auto my-0 p-8">
        <div className="flex-1 max-w-[50%]">
            <span className="text-[2rem] font-semibold text-primary dark:text-primary-dark">Hello,
            </span> 
            <br />
            <span className="text-2xl text-text dark:text-text-dark mt-4 block">
              I'm <span className="font-bold text-primary dark:text-primary-dark">Jorash Jonathan Robillos</span>
            </span>
            <p className="mt-4 text-text dark:text-text-dark leading-relaxed">
              An aspiring <strong>Software Developer</strong> from the Philippines,
              currently pursuing a Bachelor's degree in Computer Science at Cebu
              Institute of Technology - University. I'm passionate about solving
              problems related to data structures and databases. When I'm not
              coding, you'll find me strategizing mechanics in video games. Check
              out my projects and skills!
            </p>
        </div>
        <img src={profile} className="flex-1 max-w-[30%] h-auto"></img>
    </section>
  )
}

export default About;