import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

import './App.css';
import Card from "./components/Card"

const App = () => {
  return (
    <>
    <h1>About software engineering</h1>
      <div className="App">
        <Card source="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=1024x1024&w=is&k=20&c=JHHxZ25gIwgBtYyFxziTFrOuilyogTzs5KQKBhsaZhE="
      link="https://www.freecodecamp.org/news/what-is-programming/" title="Programming" para="What is programming?"/>
        <Card source="https://media.istockphoto.com/id/1227556289/photo/software-development-workplace-in-bright-office-with-wooden-table-programming-coding-code-on.jpg?s=1024x1024&w=is&k=20&c=V7_Cotjpgomhy5vglQxdgULfze3wWmUYCTGEPbu7A10="
      link="https://www.w3schools.com/java/java_intro.asp"title="Java" para="Java programming"/>
        <Card source="https://media.istockphoto.com/id/1369133274/photo/red-glowing-computer-bug-on-infected-chip-in-cyberspace-3d-render.jpg?s=1024x1024&w=is&k=20&c=1RN6UxcqU9asZN66raZ6C1bbZeWNAV6FTUBU3Wsp3Mk="
      link="https://www.cisco.com/site/us/en/learn/topics/security/what-is-malware.html" title="Malware" para="All about malware"/>
        <Card source="https://media.istockphoto.com/id/1399980046/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?s=1024x1024&w=is&k=20&c=ZJq3HVjI5LO7UxrWBmmU2LNujka8W-X7NyLC3OzllEw="
      link="https://www.ncsc.gov.uk/ransomware/home" title="Ransomware" para="What is Ransomeware?"/>
        <Card source="https://media.istockphoto.com/id/1397398956/photo/digital-shield-3d-rendering-stock-photo.jpg?s=1024x1024&w=is&k=20&c=7xN3uuwICTGWMDsmbpGfgCm_v0vhqTUZcn_xj5H7EC8="
      link="https://bootcamp.berkeley.edu/blog/what-is-computer-security/" title="Security" para="What does security mean?"/>
        <Card source="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=ffZ9DMUWJuqSOgFds4ltM_71PRVfBBu5vhPznWewDOM="
      link="https://brainstation.io/career-guides/what-is-web-development" title="Web development" para="What is a web developer?"/>
        <Card source="https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.jpg?s=1024x1024&w=is&k=20&c=y8lNZODgJfgkXsYKRudic4PxMyPiBwnGm9BrUIbev7E="
      link="https://www.oracle.com/database/what-is-database/#:~:text=A%20database%20is%20an%20organized,database%20management%20system%20(DBMS)." title="Databases" para="All about databases"/>
        <Card source="https://media.istockphoto.com/id/1405187075/vector/word-cloud-social-engineering.jpg?s=1024x1024&w=is&k=20&c=29Br0ud9tu7QOEmtdcWpZAFPzzoLcXuKDhtlo4iEdmM="
      link="https://www.ibm.com/topics/social-engineering" title="Social Engineering" para="All about social engineering"/>
        <Card source="https://media.istockphoto.com/id/1316753802/photo/server-room-data-center-for-cloud-computing.jpg?s=1024x1024&w=is&k=20&c=-2PB5Ikc_djXZxmSXUorFAtnIhXDeyFXOucny5_ZADE="
      link="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server" title="Web servers" para="What are web servers?"/>
        <Card source="https://media.istockphoto.com/id/1313234332/vector/building-design-concept-engineering-of-autonomous-system-of-smart-building-drafting-of.jpg?s=1024x1024&w=is&k=20&c=84CLVxI8bd5n9r7fNYCdhmKqEq4sVzeukkEOkDXD9uk="
      link="https://em360tech.com/tech-article/computer-architecture" title="Computer architecture" para="All about computer architecture"/>
      </div>
    </>
  )
}

export default App
