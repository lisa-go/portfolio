import { VscFileSubmodule } from 'react-icons/vsc';
import { GrGraphQl } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

export default function Introduction() {

    return (
        <div id="intro"><a id="top"> </a>
            <div className="cir">
                <div id="introtext">
                    <p className="header">Welcome to Lisa's Portfolio!</p>
                    <p className="subtitle">Click on the buttons below to navigate</p>
                    <div className="btncont">
                        <a className="projectbtn" href="#projects">
                            <VscFileSubmodule size={35} />
                            <span>Projects</span>
                        </a>
                        <a className="skillbtn" href="#skills">
                            <GrGraphQl size={35} />
                            <span>Skills</span>
                        </a>
                        <a className="contactbtn" href="#contact">
                            <HiOutlineMail size={35} />
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}