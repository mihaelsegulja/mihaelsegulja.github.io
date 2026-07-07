import { techstack } from '../data/techstack'
import TypewriterEffect from '../components/TypewriterEffect'

export default function About() {
  return (
    <>
      <TypewriterEffect uniqueKey="about" words={["whoami"]}/>
      <div className="content-container">
        <div className="about-text">
          I'm Mihael, a software engineer driven by curiosity and a hands-on approach. 
          I enjoy understanding how things work --not just making them work-- and I'm always looking for cleaner designs, deeper understanding, and opportunities to learn something new.
        </div>
        <h3>What I Do</h3>
        <div className="whatido-container">
        <ul>
          <li>Develop applications and APIs with .NET / C#</li>
          <li>Build responsive web applications with Angular and React</li>
          <li>Build embedded projects with Arduino and ESP32, writing firmware in C/C++ and experimenting with electronics</li>
          <li>Tinker with Linux systems, scripting and automation</li>
          <li>Build PCs, troubleshoot hardware and software, set up and run small home servers</li>
          <li>Explore game development with Godot and Raylib</li>
        </ul>
        </div>
        <div className="techstack-container">
          <h3>Tech Stack</h3>
          <p>
            Tools and the technologies I've built with over the years.
          </p>
          <div className="techstack-grid">
            {techstack.map((t) => (
              <div key={t.name} className="techstack-item">
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
