import Frontend from "../images/services/frontend.png";
import Backend from "../images/services/backend.png";
import Wordpress from "../images/services/wordpress.png";
import AppDev from "../images/services/app.png";
import Chat from "../images/services/chat.png";

const services = [
    {
        id: 1,
        title: "Backend Development",
        desc: "This is said to be my main area of expertise developing server side applications using NodeJS, focusing on maintainable and clean-code architecture and robust API development using depedency-injection and service-oriented layers. I'm also keep my pace with other server-side technologies such as PHP/Laravel.",
        image: Backend,
    },
    {
        id: 2,
        title: "Frontend Web Development",
        desc: "Building efficient web applications using technologies like React, Angular and related others, focusing on user-friendliness. ",
        image: Frontend,
    },
    {
        id: 3,
        title: "Basic Wordpress Setup",
        desc: "I would like to help in setting up wordpress for small business such as online shop owners or just about anyone who would like to have a presence online.",
        image: Wordpress,
    },
    {
        id: 4,
        title: "App Development",
        desc: "I'm venturing into native app development using React Native environment, still learning, but I'm eager to tackle new problems in this new area using what I've learnt so far.",
        image: AppDev,
    },
    {
        id: 5,
        title: "Or would you just like to have a chat?",
        desc: "If you are also interested in programming, tech and stuff or just software engineering in general, I might just enjoy your company in the future. Who knows? Just give me a message!",
        image: Chat,
    },
];

export default services;
