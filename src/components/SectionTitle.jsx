const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-gray-200 pb-5'>
            <h2 className='text-5xl font-medium tracking-wider capitalize font-dance'>
                {text}
            </h2>
        </div>
    );
};

export default SectionTitle;
