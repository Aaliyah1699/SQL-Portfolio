import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return (
        <section
            className='py-5 align-element font-one text-slate-50 '
            id='projects'
        >
            <SectionTitle text='My Projects' />
            <p className='text-slate-50 mt-1'>
                Explore my collection of data analysis projects, where I
                transform raw data into meaningful insights through
                visualization and analytics. Each project showcases my ability
                to extract, analyze, and present data in a clear and impactful
                way, helping to uncover trends and drive informed decisions.
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
