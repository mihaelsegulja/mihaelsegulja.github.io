import { Typewriter } from 'react-simple-typewriter'

export default function About
() {
  return (
    <>
      <div>
        <b><span style={{ color: "var(--accent)"}}>{"> "}</span></b>
        <Typewriter
          key="about"
          cursor
          cursorStyle="█"
          words={["whoami"]}
          typeSpeed={50}
          />
      </div>
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
        </ul>
        </div>
        <h3>Tech Stack</h3>
        <div className="techstack-container">
          <div className="techstack-grid">
            <div className="techstack-item">
              <i className="devicon-dotnetcore-plain"></i>
              <span>.NET</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-csharp-plain"></i>
              <span>C#</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-microsoftsqlserver-plain"></i>
              <span>SQL Server</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-c-plain"></i>
              <span>C</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-cplusplus-plain"></i>
              <span>C++</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-java-plain"></i>
              <span>Java</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-typescript-plain"></i>
              <span>TypeScript</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-react-plain"></i>
              <span>React</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-reactnative-original"></i>
              <span>React Native</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-bootstrap-plain"></i>
              <span>Bootstrap</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-jquery-plain"></i>
              <span>jQuery</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-markdown-plain"></i>
              <span>Markdown</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-arduino-plain"></i>
              <span>Arduino</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-postman-plain"></i>
              <span>Postman</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-swagger-plain"></i>
              <span>Swagger</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-rabbitmq-plain"></i>
              <span>RabbitMQ</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-docker-plain"></i>
              <span>Docker</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-linux-plain"></i>
              <span>Linux</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-bash-plain"></i>
              <span>Bash</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-git-plain"></i>
              <span>Git</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-neovim-plain"></i>
              <span>Neovim</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-vscode-plain"></i>
              <span>VS Code</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-visualstudio-plain"></i>
              <span>Visual Studio</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-rider-plain"></i>
              <span>Rider</span>
            </div>
            <div className="techstack-item">
              <i className="devicon-intellij-plain"></i>
              <span>Intellij</span>
            </div>
          </div>
        </div>
        <h3>Achievements</h3>
        <div className="achievements-container">
          achievements go here
        </div>
      </div>
    </>
  )
}
