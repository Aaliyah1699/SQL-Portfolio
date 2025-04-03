import about from '/src/About.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20 ' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={about} alt='undraw image' className='w-full h-64' />
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-slate-900 mt-8 leading-loose text-lg font-iana'>
                        I'm Aaliyah Montgomery, a dedicated data analyst
                        specializing in Python, SQL, and data visualization. I
                        transform raw data into powerful insights that inform
                        strategic decisions and drive business growth.
                        Passionate about problem-solving and continuous
                        learning, I excel at uncovering hidden patterns,
                        optimizing processes, and crafting clear, impactful
                        visual narratives. My mission is to leverage data to
                        unlock actionable solutions and guide strategic
                        decision-making.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
