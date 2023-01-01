import Introduction from "./Introduction";
import Projects from "./Projects";
import { useRef } from "react";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
    const intRef = useRef();
    const proRef = useRef();
    const skiRef = useRef();
    const conRef = useRef();

    const handleClick = (r) => {
        r.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id="content">
            <Introduction
                intRef={intRef}
                proRef={proRef}
                skiRef={skiRef}
                conRef={conRef}
                handleClick={handleClick} />
            <Projects
                intRef={intRef}
                proRef={proRef}
                handleClick={handleClick} />
            <Skills
                intRef={intRef}
                skiRef={skiRef}
                handleClick={handleClick} />
            <Contact
                intRef={intRef}
                conRef={conRef}
                handleClick={handleClick} />
        </div>
    )
}