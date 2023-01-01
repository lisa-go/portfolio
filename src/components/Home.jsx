import Introduction from "./Introduction";
import Projects from "./Projects";
import { useRef } from "react";
import Skills from "./Skills";


export default function Home() {
    const intRef = useRef();
    const proRef = useRef();
    const skiRef = useRef();

    const handleClick = (r) => {
        r.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id="content">
            <Introduction 
                intRef={intRef}
                proRef={proRef} 
                skiRef={skiRef}
                handleClick={handleClick} />
            <Projects 
                intRef={intRef}
                proRef={proRef} 
                handleClick={handleClick} />
            <Skills 
                intRef={intRef}
                skiRef={skiRef} 
                handleClick={handleClick} />
        </div>
    )
}