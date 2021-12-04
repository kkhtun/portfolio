import covidImg from "../images/covid-19.png";
import commercejs from "../images/react-commerce.png";
import ghibli from "../images/ghibli.png";

const liveProjects = [
    {
        id: 1,
        title: "Myanmar Covid Helper",
        desc: "This site can be used to obtain information on covid-19 crisis related services on many fronts in Myanmar. This site is built using React.js and uses a static JSON API to obtain data.",
        image: covidImg,
        project_url: "https://myanmar-covid-help.netlify.app",
    },
    {
        id: 2,
        title: "Commerce JS Project",
        desc: "Prototype e-commerce store built with frontend using React, Redux, Material UI and backend using headless CommerceJS and Stripe.",
        image: commercejs,
        project_url: "https://commercejs-react-redux.netlify.app",
    },
    {
        id: 3,
        title: "Ghibli Studio Dashboard",
        desc: "Just a mock project for a dashboard of characters in Ghibli Studio world using Ghibli Studio API and React.js.",
        image: ghibli,
        project_url: "https://ghibli-studio-api-kkhtun.netlify.app",
    },
];

export default liveProjects;
