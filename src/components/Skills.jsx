import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoNpm } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";

export default function Skills ({ intRef, skiRef, handleClick }) {

    return (
        <div id="skillcont" ref={skiRef}>
            <div className="header">My Skills</div>
            <ul>
                <li>
                    <IoLogoHtml5 size={50} />
                    <span>Html</span>
                </li>
                <li>
                    <IoLogoCss3 size={50} />
                    <span>Css</span>
                </li>
                <li>
                    <IoLogoJavascript size={50} />
                    <span>Javascript</span>
                </li>
                <li>
                    <IoLogoReact size={50} />
                    <span>React</span>
                </li>
                <li>
                    <IoLogoSass size={50} />
                    <span>Sass</span>
                </li>
                <li>
                    <DiVisualstudio size={50} />
                    <span>Visual Studio Code</span>
                </li>
                <li>
                    <IoLogoNpm size={50} />
                    <span>Npm</span>
                </li>
                <li>
                    <FaGitAlt size={50} />
                    <span>Git</span>
                </li>
                <li>
                    <FaGithubAlt size={50} />
                    <span>GitHub</span>
                </li>
            </ul>
            <button className="topbtn" onClick={() => handleClick(intRef)}>
                <BiArrowToTop size={35} />
            </button>
        </div>
    )
}