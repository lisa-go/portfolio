import { projectlist } from "./Projectslist";

export default function Projects ({ proRef }) {

    let colors = [
        '#7bdff2', 
        '#B2F7EF', 
        '#EFF7F6', 
        '#F7D6E0', 
        '#F2B5D4', 
        '#cdb4db'
    ]

    const getColor = (id) => {
        return colors[id];
    }

    return (
        <div id="projectcont" ref={proRef}>
            {projectlist.map((pro) => 
                <div className="project" key={pro.id}
                    style={{borderColor: getColor(pro.id)}}>
                    <img src={pro.image} alt={pro.name} className="ss" />
                    <div className="proname">{pro.name}</div>
                    <div className="prolink">
                        <a href={pro.github}>Github</a>
                        <a href={pro.preview}>Preview</a>
                        
                    </div>
                    
                </div> 
            )}
        </div>
    )
}