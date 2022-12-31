import { VscFileSubmodule } from 'react-icons/vsc';
import { GrGraphQl } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

export default function Introduction () {

    return (
        <div id="intro">
            <div id="topshapes">
                <div className="tri"></div>
                <div className="dia"></div>
                <div className="cir"></div>
                <div className="trap"></div>
            </div>
            <div id="botshapes">
                <div className="hep"></div>
                <div className="star"></div>
                <div className="chev"></div>
                <div className="tri"></div>
            </div>
            <div id="introtext">
                <p className="header">Welcome to Lisa's Portfolio!</p>
                <p className="subtitle">Click on the buttons below to navigate</p>
                <div className="btncont">
                    <button className="projectbtn">
                        <VscFileSubmodule size={35} />
                        <span>Projects</span>
                    </button>
                    <button className="skillbtn">
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
    )
}