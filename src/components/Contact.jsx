import { HiOutlineMail } from "react-icons/hi";
import { BiArrowToTop } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

export default function Contact({ intRef, conRef, handleClick }) {
    return (
        <div id="contactcont" ref={conRef}>
            <div className="header">Contact Me</div>
            <div className="contact">
                <HiOutlineMail size={50} />
                <span>LisaDev0123@gmail.com</span>
            </div>
            <div className="contact">
                <IoLogoLinkedin size={50} />
                <a href="https://www.linkedin.com/in/lisa-g-8b5a86184/" target="_blank">LinkedIn</a>
            </div>
            <button className="topbtn" onClick={() => handleClick(intRef)}>
                <BiArrowToTop size={35} />
            </button>
        </div>
    )
}