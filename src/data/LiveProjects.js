import covidImg from "../images/covid-19.png";
import coffeeChat from "../images/coffee-chat.ico";
import coffeeChess from "../images/coffee-chess.ico";
import comic from "../images/comic.png";

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
        title: "Comiconics - Comic/Manga Reading Site",
        desc: "A comic and manga reading site where users can browser and read comics, like and comment on their favourite and many more. Tech stacks used - React, ExpressJS, MongoDB",
        image: comic,
        project_url: "https://comiconics-dev.web.app/",
    },
    {
        id: 3,
        title: "Coffee Chat",
        desc: "Real-time group chat application using SocketIO",
        image: coffeeChat,
        project_url: "https://coffee-chat-dev.netlify.app",
    },
    {
        id: 4,
        title: "Coffee Chess",
        desc: "Real-time chess matches using SocketIO, Firebase Auth, ExpressJS and React",
        image: coffeeChess,
        project_url: "https://chess-dev-b17d1.web.app/",
    },
];

export default liveProjects;
