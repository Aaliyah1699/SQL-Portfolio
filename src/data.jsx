/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import {
    PiMicrosoftExcelLogoLight,
    PiChartLineUpThin,
    PiFileSqlLight,
} from 'react-icons/pi';
import { GrMysql } from 'react-icons/gr';
import { IoLogoTableau, IoBarChartOutline } from 'react-icons/io5';
import { TbTransform, TbBrandPython } from 'react-icons/tb';
import { MdOutlineCleaningServices } from 'react-icons/md';





export const links = [
    { id: nanoid(), href: '/', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    {
        id: nanoid(),
        href: '#projects',
        text: 'projects',
    },
    {
        id: nanoid(),
        href: 'https://aaliyahm-portfolio.netlify.app/',
        text: 'SWE Portfolio',
    },
];

export const skills = [
    {
        id: nanoid(),
        title: 'Data Analysis',
        icon: <PiChartLineUpThin className='h-16 w-16 text-violet-500' />,
        text: 'Apply statistical and analytical techniques to uncover trends and insights from complex datasets.',
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <TbBrandPython className='h-16 w-16 text-violet-500' />,
        text: 'Proficient in Python for data analysis, leveraging libraries like Pandas and NumPy to clean, process, and visualize data efficiently.',
    },
    {
        id: nanoid(),
        title: 'SQL',
        icon: <PiFileSqlLight className='h-16 w-16 text-violet-500' />,
        text: 'Develop complex SQL queries to filter, aggregate, and optimize datasets for meaningful analysis.',
    },
    {
        id: nanoid(),
        title: 'Tableau',
        icon: <IoLogoTableau className='h-16 w-16 text-violet-500' />,
        text: 'Transform raw data into compelling, actionable insights using Tableau’s powerful visualization tools.',
    },
    {
        id: nanoid(),
        title: 'Excel',
        icon: (
            <PiMicrosoftExcelLogoLight className='h-16 w-16 text-violet-500' />
        ),
        text: 'Analyze, clean, and visualize data efficiently using Excel’s advanced functions and pivot tables.',
    },
    {
        id: nanoid(),
        title: 'MySQL',
        icon: <GrMysql className='h-16 w-16 text-violet-500' />,
        text: 'Utilize MySQL to manage large datasets, ensuring efficient querying and data integrity.',
    },
    {
        id: nanoid(),
        title: 'Data Statistics',
        icon: <IoBarChartOutline className='h-16 w-16 text-violet-500' />,
        text: 'Apply statistical techniques to analyze trends, measure variability, and make data-driven decisions.',
    },
    {
        id: nanoid(),
        title: 'Data Cleaning',
        icon: (
            <MdOutlineCleaningServices className='h-16 w-16 text-violet-500' />
        ),
        text: 'Clean and preprocess raw data to improve accuracy, completeness, and consistency.',
    },
    {
        id: nanoid(),
        title: 'Data Transformation',
        icon: <TbTransform className='h-16 w-16 text-violet-500' />,
        text: 'Restructure and convert data into formats optimized for analysis and reporting.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: '/salesdashboard.png',
        url: 'https://public.tableau.com/app/profile/aaliyah.montgomery/viz/SalesAnalysis_17427797660550/SalesDashboard',
        github: '',
        title: 'Sales Dashboard',
        text: 'This dynamic dashboard offers a robust year-over-year comparison of sales metrics. Monitor total sales, profit, and quantity with clear highest and lowest month indicators, analyze subcategory performance, and track weekly trends with insightful above/below average markers. With customizable filters and interactive charts, users can seamlessly explore detailed sales dynamics—further enhanced by its direct connection to the Customer Dashboard.',
    },
    {
        id: nanoid(),
        img: '/customer.png',
        url: 'https://public.tableau.com/app/profile/aaliyah.montgomery/viz/SalesAnalysis_17427797660550/SalesDashboard',
        github: '',
        title: 'Customer Dashboard',
        text: 'Linked directly to the Sales Dashboard, this tool provides an in-depth, year-over-year analysis of customer insights. Featuring key metrics like total customers, sales per customer, and total orders with clear monthly peaks and valleys, it visualizes customer distribution and highlights the top 10 customers. Flexible filtering by year, product, and location allows for effortless drilling into vital customer trends.',
    },
    {
        id: nanoid(),
        img: '/bike.png',
        url: 'https://public.tableau.com/app/profile/aaliyah.montgomery/viz/BikeSalesAnalysis_17399753428100/BikeSalesDashboard',
        github: '',
        title: 'Bike Sales Analysis',
        text: 'Discover a comprehensive view of bike sales performance with this interactive dashboard. Track key financial metrics, dissect sales by gender, age, and product, and navigate a dynamic country map. Flexible filters for year and country empower users to pinpoint trends and spotlight top-selling products.',
    },
    {
        id: nanoid(),
        img: '/ev.png',
        url: 'https://public.tableau.com/app/profile/aaliyah.montgomery/viz/ElectricVehicleAnalysisWashington_17399221384960/Dashboard1',
        github: '',
        title: 'Electric Vehicle Analysis | Washington',
        text: 'Experience a dynamic Tableau dashboard that maps electric vehicle ownership across Washington. With an intuitive car make filter, users can dive into trends by vehicle year and model, uncover the top 10 countries of origin, and visualize ownership distribution on an engaging postal code map—providing a clear window into the state’s EV evolution.',
    },
    {
        id: nanoid(),
        img: '/steps.png',
        url: '',
        github: '',
        title: 'Step Tracker Data Analysis',
        text: 'Delve into daily activity trends using Python and powerful libraries Pandas, NumPy, Seaborn, and Matplotlib. This project reveals the interplay between sleep, physical activity, and mood through insightful statistical measures and engaging visualizations that capture key correlations.',
    },
    {
        id: nanoid(),
        img: '/crime.png',
        url: '',
        github: '',
        title: 'LA Crime Analysis',
        text: 'Explore Los Angeles crime patterns with this data-driven investigation utilizing Python, Pandas, and Matplotlib. Through meticulous data cleaning and innovative visualizations, the project uncovers underlying trends and delivers actionable insights into urban safety and crime dynamics.',
    },
    {
        id: nanoid(),
        img: '/super.png',
        url: '',
        github: '',
        title: 'Super Store Sales Analysis',
        text: 'Unlock the story behind retail performance with a comprehensive analysis of Super Store sales. Using Python and an array of visualization tools, this project forecasts demand, evaluates sales and customer trends, and examines the impacts of discounts and shipping—offering a strategic blueprint for business optimization.',
    },
];
