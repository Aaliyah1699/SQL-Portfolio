import hero from '/src/Hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-violet-100 py-8'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wide font-candy text-slate-900'>
                        Aaliyah M.
                    </h1>
                    <p className='mt-4 text-4xl text-slate-900 capitalize tracking-wide font-one font-semibold'>
                        Data Analyst
                    </p>
                    <p className='mt-2 text-xl text-slate-900 capitalize tracking-wide font-one font-semibold'>
                        Unfolding stories woven beneath the surface.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        {/* Add links */}
                        <a
                            href='https://github.com/Aaliyah1699'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithubSquare className='h-8 w-8 text-violet-600 hover:text-rose-950 duration-300 ' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/aaliyahmontgomery'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaLinkedin className='h-8 w-8 text-violet-600 hover:text-rose-950 duration-300 ' />
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
