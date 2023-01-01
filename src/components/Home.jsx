import Introduction from "./Introduction";
import Projects from "./Projects";
import { useRef } from "react";


export default function Home() {
    const intRef = useRef();
    const proRef = useRef();

    const handleClick = (r) => {
        r.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div id="content">
            <Introduction 
                intRef={intRef}
                proRef={proRef} 
                handleClick={handleClick} />
            <Projects 
                proRef={proRef} />
        </div>
    )
}