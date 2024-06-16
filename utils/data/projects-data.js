import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Developer Oasis',
        description: "",
        tools: ['Express', 'MongoDB', 'React', 'NodeJs'],
        // role: 'Backend Developer',
        code: 'https://github.com/2001malhar/developer_oasis',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Stock Portfolio Management Application',
        //description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Java', 'MVC Architecture', 'Java Spring'],
        // role: '',
        code: 'https://github.com/2001malhar/Portfolio_Management_Application',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Book Store Management App',
        //description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['C++'],
        code: 'https://github.com/2001malhar/book_store_management',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Trade Analysis',
        // description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['Python','Pandas','Numpy','Scikit Learn', 'Matplotlib'],
        code: 'https://github.com/2001malhar/trade-analysis',
        demo: '',
        image: ayla,
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