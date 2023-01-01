import { VscFileSubmodule } from 'react-icons/vsc';
import { GrGraphQl } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';


export default function Introduction({ intRef, proRef, skiRef, handleClick }) {

    return (
        <div id="intro" ref={intRef}>
            <div className="cir">
                <div id="introtext">
                    <p className="header">Welcome to Lisa's Portfolio!</p>
                    <p className="subtitle">Click on the buttons below to navigate</p>
                    <div className="btncont">
                        <button className="projectbtn" onClick={() => handleClick(proRef)}>
                            <VscFileSubmodule size={35} />
                            <span>Projects</span>
                        </button>
                        <button className="skillbtn" onClick={() => handleClick(skiRef)}>
                            <GrGraphQl size={35} />
                            <span>Skills</span>
                        </button>
                        <button className="contactbtn">
                            <HiOutlineMail size={35} />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}