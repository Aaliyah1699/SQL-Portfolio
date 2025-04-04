import { BsBalloonHeart } from 'react-icons/bs';

const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-gray-200 pb-5'>
            <h2 className='flex items-center text-5xl font-medium tracking-wider capitalize font-dance'>
                {text}
                <BsBalloonHeart className='ml-2  text-violet-500 h-10 w-10 pt-1' />
            </h2>
        </div>
    );
};

export default SectionTitle;

//  No icon code
// const SectionTitle = ({ text }) => {
//     return (
//         <div className='border-b border-gray-200 pb-5'>
//             <h2 className='text-5xl font-medium tracking-wider capitalize font-dance'>
//                 {text} <BsBalloonHeart />
//             </h2>
//         </div>
//     );
// };
