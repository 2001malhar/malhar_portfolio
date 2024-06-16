import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Developer Oasis',
        description: "A high-performance full-stack Q&A platform using Node.js, React, and MongoDB with real-time updates, comprehensive security measures, and efficient Docker-based deployment automation",
        tools: ['Express', 'MongoDB', 'React', 'NodeJs'],
        // role: 'Backend Developer',
        code: 'https://github.com/2001malhar/developer_oasis',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Stock Portfolio Management Application',
        description: 'A sophisticated Portfolio Management System with MVC architecture, real-time data integration, robust stock analysis features, and an intuitive GUI for enhanced investment decision-making',
        tools: ['Java', 'MVC Architecture', 'Java Spring'],
        // role: '',
        code: 'https://github.com/2001malhar/Portfolio_Management_Application',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Book Store Management App',
        description:  ' A scalable C++ bookstore management application with efficient data handling, advanced algorithms, and robust memory management for optimal performance and stability',
        tools: ['C++'],
        code: 'https://github.com/2001malhar/book_store_management',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Trade Analysis',
        description: "A dynamic trading data notebook ensuring integrity, advanced features, insightful analysis, key metric visualization, and automated extraction for detailed reporting",
        tools: ['Python','Pandas','Numpy','Scikit Learn', 'Matplotlib'],
        code: 'https://github.com/2001malhar/trade-analysis',
        demo: '',
        // image: ayla,
        // role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },