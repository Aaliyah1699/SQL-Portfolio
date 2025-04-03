import { FaGithub } from 'react-icons/fa';
import { TbWorldHeart } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';

const ProjectsCard = ({ url, img, github, title, text }) => {
    return (
        <article className='bg-slate-50 rounded-lg shadow-md hover:shadow-2xl duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-56'
            />
            <div className='capitalize p-6'>
                <h2 className='text-xl tracking-wide text-slate-900 font-bold border-b border-slate-300'>
                    {title}
                </h2>
                <p className='mt-2 text-slate-900 leading-loose'>{text}</p>

                <div className='mt-3 flex gap-x-4'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <TbWorldHeart className='h-7 w-7 text-violet-600 hover:text-violet-950 duration-300 ' />
                    </a>
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <FiGithub className='h-7 w-7 text-violet-600 duration-300 hover:text-violet-950 pt-1' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;
