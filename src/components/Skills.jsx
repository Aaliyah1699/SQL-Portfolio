import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
    return (
        <section
            className='py-8 align-element font-iana text-slate-50 font-semibold'
            id='skills'
        >
            <SectionTitle text='Data Stack' />
            <div className='py-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
                {skills.map((skill) => {
                    return <SkillsCard key={skill.id} {...skill} />;
                })}
            </div>
        </section>
    );
};

export default Skills;
