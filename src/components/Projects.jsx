import React from 'react'
import trivial from '../assets/trivial.png'
import flyweight_balls from '../assets/flyweight balls.png'
import arena_chasers from '../assets/arena chasers.png'
import gitjob from '../assets/gitjob.png';
import athena from '../assets/athena.png';
import celeste_clone from '../assets/celesteclone.png';

export const Projects = () => {
  return (
    <section 
        id="projects"
        className="w-[90%] max-w-[1000px] mt-24 bg-section-color p-8 rounded-2xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-8 text-center">Projects</h1>
        
        {/* Project 1 */}
        <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-8 mb-6">
                <h1 className="text-2xl font-semibold text-secondary">Trivial</h1>
                <a href="https://github.com/Syjhert/trivial" target="_blank"
                    className="text-secondary hover:underline">Github</a>
            </div>
            <img src={trivial} className="w-[80%] mb-6 rounded-lg"/>
            <p className="text-secondary text-center leading-relaxed">A dynamic quiz website designed to test knowledge and entertain users 
                with engaging trivia challenges. Featuring diverse topics and 
                interactive gameplay, Trivial! delivers a fun, user-friendly experience 
                for learners and enthusiasts alike.
            </p>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                    Technologies Used:
                </h2>
                <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
        
        {/* Project 2 */}
        <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-8 mb-6">
                <h1 className="text-2xl font-semibold text-secondary">Flyweight Balls</h1>
                <a href="https://github.com/Syjhert/Flyweight-Balls" target="_blank"
                    className="text-secondary hover:underline">Github</a>
            </div>
            <img src={flyweight_balls} className="w-[80%] mb-6 rounded-lg"/>
            <p className="text-secondary text-center leading-relaxed">A demonstration on the difference between the memory consumed between
                normal object generation and using the flyweight design pattern through
                visualization of ball images.
            </p>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                    Technologies Used:
                </h2>
                <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
                    <li>Java</li>
                    <li>Java Swing</li>
                </ul>
            </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-8 mb-6">
                <h1 className="text-2xl font-semibold text-secondary">Arena Chasers</h1>
                <a href="https://github.com/Syjhert/Arena-Chasers" target="_blank"
                    className="text-secondary hover:underline">Github</a>
            </div>
            <img src={arena_chasers} className="w-[80%] mb-6 rounded-lg"/>
            <p className="text-secondary text-center leading-relaxed">A strategic turn-based game taking place on a dynamic grid. 
                The player navigates through the arena filled with walls while 
                trying to outsmart an enemy AI.\
            </p>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                    Technologies Used:
                </h2>
                <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
                    <li>C#</li>
                    <li>Visual Studio</li>
                </ul>
            </div>
        </div>

        {/* Project 4: GitJob */}
      <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8 bg-bg dark:bg-bg-dark">
        <div className="flex items-center gap-8 mb-6">
          <h1 className="text-2xl font-semibold text-secondary">GitJob</h1>
          <a
            href="https://github.com/peterdev123/gitjob" target="_blank"
                className="text-secondary hover:underline">Github</a>
        </div>
        <img src={gitjob} alt="GitJob" className="w-[80%] mb-6 rounded-lg" />
        <p className="text-secondary text-center leading-relaxed">A platform that connects job seekers and employers. 
            It simplifies job searching and talent acquisition with advanced 
            tools for profile building, job postings, and direct communication.
        </p>
        <div className="mt-4">
            <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                Technologies Used:
            </h2>
          <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
            <li>Django</li>
            <li>SQLite</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>Typescript</li>
          </ul>
        </div>
      </div>

      {/* Project 5: Athena */}
      <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8 bg-bg dark:bg-bg-dark">
        <div className="flex items-center gap-8 mb-6">
          <h1 className="text-2xl font-semibold text-secondary">Athena</h1>
          <a
            href="https://github.com/pokemau/athena" target="_blank"
                className="text-secondary hover:underline">Github</a>
        </div>
        <img src={athena} alt="Athena" className="w-[80%] mb-6 rounded-lg" />
        <p className="text-secondary text-center leading-relaxed">A Wikipedia clone designed to provide a collaborative platform
          for creating, editing, and sharing knowledge. It features a clean
          interface and robust tools for managing content.
        </p>
        <div className="mt-4">
            <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                Technologies Used:
            </h2>
          <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
            <li>C# (.NET Framework)</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>

      {/* Project 6: CelesteClone */}
      <div className="flex flex-col items-center border-3 border-border dark:border-border-dark p-10 rounded-2xl shadow-lg mb-8 bg-bg dark:bg-bg-dark">
        <div className="flex items-center gap-8 mb-6">
          <h1 className="text-2xl font-semibold text-secondary">
            CelesteClone
          </h1>
          <a
            href="https://github.com/Requiem53/CelesteClone" target="_blank"
                className="text-secondary hover:underline">Github</a>
        </div>
        <img
          src={celeste_clone}
          alt="CelesteClone"
          className="w-[80%] mb-6 rounded-lg"
        />
        <p className="text-secondary text-center leading-relaxed">A clone of the popular platformer game Celeste, featuring challenging
          levels, precise controls, and a focus on player skill and progression.
        </p>
        <div className="mt-4">
            <h2 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2 text-center">
                Technologies Used:
            </h2>
          <ul className="flex justify-center gap-4 text-secondary dark:text-secondary-dark">
            <li>Java</li>
            <li>libGDX</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects;