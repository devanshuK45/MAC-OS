import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({windowName, setWindowState}) => {
  const portfolioCommands = {
    about: {
      description: 'Quick intro about me',
      usage: 'about',
      fn: () => '👋 I am a frontend-focused developer who enjoys building polished web experiences.'
    },
    skills: {
      description: 'Show my primary skills',
      usage: 'skills',
      fn: () => '🛠️ Skills: React, JavaScript, TypeScript, Sass, Node.js, UI/UX fundamentals.'
    },
    projects: {
      description: 'List a few featured projects',
      usage: 'projects',
      fn: () => '🚀 Featured projects: MAC-OS Portfolio, Spotify Clone UI, GitHub Profile Dashboard.'
    },
    experience: {
      description: 'Show short experience summary',
      usage: 'experience',
      fn: () => '💼 Experience: Built personal/client web apps with a focus on responsive and accessible UI.'
    },
    contact: {
      description: 'How to reach me',
      usage: 'contact',
      fn: () => '📬 Reach me at: devanshu@example.com | LinkedIn: /in/devanshu | GitHub: /devanshu'
    },      
    date: {
      description: 'Show current date and time',
      usage: 'date',
      fn: () => new Date().toLocaleString()
    },
    echo: {
      description: 'Echo passed text',
      usage: 'echo <text>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMessage = [
    '👋 Welcome to my portfolio terminal.',
    'ℹ️ Type "help" to see command usage details.',
    '',
    '📌 Available commands:',
    '- 👤 about - Learn about me',
    '- 🧠 skills - View my Technical Skills',
    '- 📁 projects - Check out My Work',
    '- 💼 experience - See my Experience',
    '- 🤝 contact - Get in touch',

      `✨ Happy Exploring!`
  ].join('\n')

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="cli-window">
            <Terminal 
            commands ={portfolioCommands}
            welcomeMessage ={welcomeMessage}
            promptLabel = {'devanshukinkar:~$'}
            promptLabelStyle = {{color: '#00ff00'}}
            />
        </div>
    </MacWindow>
  )
}

export default Cli