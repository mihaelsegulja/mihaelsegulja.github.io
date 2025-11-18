import { techstack } from '../data/techstack'
import TypewriterEffect from './TypewriterEffect'

export default function About() {
  return (
    <>
      <TypewriterEffect uniqueKey="about" words={["whoami"]}/>
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-text">
          Hi, I'm Mihael, a software developer, hobbyist tinkerer and tech enthusiast who loves learning by doing.
        </div>
        <h3>What I Do</h3>
        <div className="whatido-container">
        <ul>
          <li>Develop applications and APIs with .NET / C#</li>
          <li>Build responsive web apps with TypeScript, React, and modern web tech</li>
          <li>Experiment with microcontrollers like Arduino and ESP32, writing low-level firmware in C and C++ and tinkering with electronics</li>
          <li>Tinker with Linux systems, scripting and automation</li>
          <li>Build and troubleshoot PCs and set up small home servers</li>
          <li>Continuously explore and learn new tools, frameworks, and technologies</li>
        </ul>
        </div>
        <div className="techstack-container">
          <h3>Tech Stack</h3>
          <p>
            Tools and the technologies I've built with over the years.
          </p>
          <div className="techstack-grid">
            {techstack.map((t) => (
              <div className="techstack-item">
                <i className={t.icon}></i>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="achievements-container">
          <h3>Achievements</h3>
          <h4>Certificates & Courses</h4>
          <ul>
            <li>Oracle Cloud Infrastructure Certified AI Foundations Associate {`[`}2025{`]`}</li>
            <li>Microsoft Applied Skills: Administer Active Directory Domain Services {`[`}2024{`]`}</li>
            <li>Fortinet Certified Fundamentals Cybersecurity {`[`}2024{`]`}</li>
            <li>Oracle Academy {`[`}2023{`]`}
              <ul>
                <li>Java Foundations</li>
                <li>Java Programming</li>
                <li>AiML Artificial Intelligence with Machine Learning in Java</li>
              </ul>
            </li>
            <li>Cisco Networking Academy {`[`}2023{`]`}
              <ul>
                <li>CCNA: Introduction to Networks</li>
                <li>CCNA: Switching, Routing, and Wireless Essentials</li>
                <li>CCNA: Enterprise Networking, Security, and Automation</li>
              </ul>
            </li>
            <li>IQRF Basics {`[`}2022{`]`}</li>
          </ul>
          <p>
            View full certification profile on:{" "}
            <a href="https://www.credly.com/users/mihael-segulja" target="_blank" rel="noopener noreferrer">
              Credly
            </a> 
            {" | "}
            <a href="https://learn.microsoft.com/en-us/users/mihaelsegulja0000/" target="_blank" rel="noopener noreferrer">
              Microsoft Learn
            </a>
          </p>
          <h4>Other</h4>
          <ul>
            <li>WorldSkills Croatia 2023: 2nd place {`(`}silver{`)`} in IT System Administration discipline</li>
            <li>Inova Mladi 2023: Bronze medal for macro keyboard</li>
            <li>Innovation Fair Ivanić-Grad 2023: Silver medal for macro keyboard</li>
            <li>Participated in Algebra Security Day Contest 2022</li>
            <li>Participated in Hacknite 2.0 2021</li>
          </ul>
        </div>
      </div>
    </>
  )
}
