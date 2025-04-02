import about from '/src/About.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20 font-one font-bold' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={about} alt='undraw image' className='w-full h-64' />
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-slate-900 mt-8 leading-loose text-lg'>
                        I'm Aaliyah Montgomery, a data analyst with a strong
                        foundation in Python, SQL, and data visualization. I
                        enjoy transforming raw data into meaningful insights
                        that drive informed decision-making. With a passion for
                        problem-solving and continuous learning, I thrive on
                        uncovering patterns, optimizing processes, and
                        presenting data in clear, impactful ways. My goal is to
                        leverage data to guide strategic decisions and create
                        actionable solutions.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
