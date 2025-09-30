import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className="intro">
                <h1>Hi, I'm Ye 👋</h1>
                <p className="tagline">
                    CS student @ Baruch • Junior Year
                </p>
            </header>

            <main className="card">
                <h2>About me</h2>
                <p>
                    I am an aspiring Software Engineer with a strong 
                    passion for developing full stack applications with 
                    seamless user experience.
                </p>

                <h3>What I'm into</h3>
                <ul>
                    <li>Frontend: HTML, CSS, Bootstrap, Javascript</li>
                    <li>Backend & scripting: Python, Flask, SQL, PHP</li>
                </ul>

                <button onClick={() => setCount((c) => c + 1)}>
                    👋 Say hi ({count})
                </button>
            </main>

            <footer className="read-the-docs">
                Powered by{" "}
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>{" "}
                &{" "}
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </footer>
        </>
    );
}

export default App;
