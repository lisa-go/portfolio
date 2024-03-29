import { projectlist } from './Projectslist';
import { FaGithubAlt } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';

export default function Projects({ proRef }) {
  let colors = [
    '#7bdff2',
    '#B2F7EF',
    '#EFF7F6',
    '#F7D6E0',
    '#F2B5D4',
    '#cdb4db',
  ];

  const getColor = (id) => {
    return colors[id];
  };

  return (
    <div
      id='projectcont'
      ref={proRef}>
      <div className='header'>My Projects</div>
      <div id='projects'>
        {projectlist.map((pro) => (
          <div
            className='project'
            key={pro.id}
            style={{ borderColor: getColor(pro.id) }}>
            <img
              src={pro.image}
              alt={pro.name}
              className='ss'
            />
            <div className='proname'>{pro.name}</div>
            <div className='prolink'>
              <a
                href={pro.github}
                target='_blank'>
                <FaGithubAlt size={35} />
                <span>Github</span>
              </a>
              <a
                href={pro.preview}
                target='_blank'>
                <ImEnter size={35} />
                <span>Preview</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
