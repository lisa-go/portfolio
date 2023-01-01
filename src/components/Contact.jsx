import { HiOutlineMail } from "react-icons/hi";
import { BiArrowToTop } from "react-icons/bi";

export default function Contact({ intRef, conRef, handleClick }) {
    return (
        <div id="contactcont" ref={conRef}>
            <div className="header">Contact Me</div>
            <div className="email">
                <HiOutlineMail size={50} />
                <span>LisaDev0123@gmail.com</span>
            </div>
            <button className="topbtn" onClick={() => handleClick(intRef)}>
                <BiArrowToTop size={35} />
            </button>
        </div>
    )
}