import hero from '/src/Hero.svg';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Hero = () => {
    return (
        <div className='bg-violet-100 py-8'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-8xl font-bold tracking-wide font-dance text-slate-900'>
                        Aaliyah <span className='text-violet-600'>M.</span>
                    </h1>
                    <p className='mt-4 text-4xl text-slate-900 capitalize tracking-wide font-iana font-semibold'>
                        Data Analyst
                    </p>
                    <p className='mt-2 text-xl text-slate-900 capitalize tracking-wide font-iana font-semibold'>
                        Unfolding stories woven beneath the surface.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        {/* Add links */}
                        <a
                            href='https://github.com/Aaliyah1699'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FiGithub className='h-8 w-8 text-violet-600 hover:text-rose-950 duration-300 ' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/aaliyahmontgomery'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FiLinkedin className='h-8 w-8 text-violet-600 hover:text-rose-950 duration-300 ' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img
                        src={hero}
                        alt='undraw image'
                        className='h-80 lg:h-80'
                    />
                </article>
            </div>
        </div>
    );
};

export default Hero;
