import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
  IoLogoNpm,
} from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { DiVisualstudio } from 'react-icons/di';
import { FaGitAlt, FaGithubAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';

export default function Skills({ skiRef }) {
  return (
    <div
      id='skillcont'
      ref={skiRef}>
      <div className='header'>My Skills</div>
      <ul>
        <li>
          <IoLogoReact size={50} />
          <span>React</span>
        </li>
        <li>
          <SiRedux size={50} />
          <span>Redux / Redux Toolkit</span>
        </li>
        <li>
          <IoLogoSass size={50} />
          <span>Sass</span>
        </li>
        <li>
          <IoLogoJavascript size={50} />
          <span>Javascript</span>
        </li>
        <li>
          <SiTypescript size={50} />
          <span>Typescript</span>
        </li>
        <li>
          <IoLogoReact size={50} />
          <span>React Native</span>
        </li>
        <li>
          <IoLogoCss3 size={50} />
          <span>Css</span>
        </li>
        <li>
          <IoLogoHtml5 size={50} />
          <span>Html</span>
        </li>
        <li>
          <DiVisualstudio size={50} />
          <span>Visual Studio Code</span>
        </li>
        <li>
          <FaFigma size={50} />
          <span>Figma</span>
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
    </div>
  );
}
