import { links } from '../data';

const Navbar = () => {
    return (
        <nav className='bg-violet-100' >
            <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 leading-loose '>
                <h2 className='text-4xl font-extrabold tracking-wide font-candy text-slate-900'>
                    Analytix<span className='text-violet-600'>Hub</span>
                </h2>
                <div className='flex gap-x-3 leading-loose border-b border-slate-900 '>
                    {links.map((link) => {
                        const { id, href, text, to } = link;
                        return (
                            <a
                                key={id}
                                href={href}
                                to={to}
                                className='capitalize text-lg tracking-widest hover:text-violet-600 duration-300 font-one hover:shadow-lg text-slate-900'
                            >
                                {text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
