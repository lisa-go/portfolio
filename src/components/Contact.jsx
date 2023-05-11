import { HiOutlineMail } from 'react-icons/hi';
import { IoLogoLinkedin } from 'react-icons/io';

export default function Contact({ conRef }) {
  return (
    <div
      id='contactcont'
      ref={conRef}>
      <div className='header'>Contact Me</div>
      <div className='contact'>
        <HiOutlineMail size={50} />
        <span className='email'>LisaDev0123@gmail.com</span>
      </div>
      <div className='contact'>
        <IoLogoLinkedin size={50} />
        <a
          href='https://www.linkedin.com/in/lisa-g-8b5a86184/'
          target='_blank'>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
