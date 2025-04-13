import React from 'react'
import facebookIcon from '../assets/facebook-icon-1.png'
import facebookIconDark from '../assets/facebook-icon-2.png'
import gmailIcon from '../assets/gmail-icon-1.png'
import gmailIconDark from '../assets/gmail-icon-2.png'
import linkedinIcon from '../assets/linkedin-icon-1.png'
import linkedinIconDark from '../assets/linkedin-icon-2.png'
import githubIcon from '../assets/github-icon-1.png'
import githubIconDark from '../assets/github-icon-2.png'

export const Contacts = ({theme}) => {
  return (
    <section
      id="contact"
      className="w-[90%] max-w-[1000px] mt-10 mb-10 mx-auto text-center">
      <h1 className="text-4xl font-bold text-secondary mb-8">Contact</h1>
      <div className="flex justify-center gap-8">

        {/* Facebook */}
        <div className="w-16 h-16 rounded-full cursor-pointer bg-text dark:bg-text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <a
            href="https://www.facebook.com/jorash.robillos.15/" 
            target="_blank">
            <img
              src={theme === "dark" ? facebookIcon : facebookIconDark}
              alt="Facebook"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>

        {/* Gmail */}
        <div className="w-16 h-16 rounded-full cursor-pointer bg-text dark:bg-text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=robillos.jorashjonathan3@gmail.com&su=subject_here&body=body_here"
            target="_blank">
            <img
              src={theme === "dark" ? gmailIcon : gmailIconDark}
              alt="Gmail"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="w-16 h-16 rounded-full cursor-pointer bg-text dark:bg-text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <a
            href="https://www.linkedin.com/in/robillos-jorashjonathan3/"
            target="_blank">
            <img
              src={theme === "dark" ? linkedinIcon : linkedinIconDark}
              alt="LinkedIn"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>

        {/* GitHub */}
        <div className="w-16 h-16 rounded-full cursor-pointer bg-text dark:bg-text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <a
            href="https://github.com/Syjhert"
            target="_blank">
            <img
              src={theme === "dark" ? githubIcon : githubIconDark}
              alt="GitHub"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
export default Contacts