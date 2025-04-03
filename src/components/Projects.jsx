import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return (
        <section
            className='py-5 align-element font-iana text-slate-50 '
            id='projects'
        >
            <SectionTitle text='My Projects' />
            <p className='text-slate-50 mt-1'>
                Explore my portfolio of data analysis projects, where I
                transform raw data into compelling insights through advanced
                visualization and analytics. Each project exemplifies my
                expertise in extracting, analyzing, and presenting data in a
                clear and impactful way, uncovering hidden trends that empower
                informed decision-making.
            </p>
            <div className='py-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
