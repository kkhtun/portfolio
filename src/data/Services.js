import Frontend from "../images/services/frontend.png";
import Backend from "../images/services/backend.png";
import Wordpress from "../images/services/wordpress.png";
import AppDev from "../images/services/app.png";
import Chat from "../images/services/chat.png";

const services = [
    {
        id: 1,
        title: "Frontend Web Development",
        desc: "Building efficient web applications using React and other technologies, focusing on user-friendliness. ",
        image: Frontend,
    },
    {
        id: 2,
        title: "Backend Development",
        desc: "Building server side applications using Laravel/PHP, including both template-based sites and API development. I'm also keep my pace with other server-side technologies such as NodeJS and MongoDB.",
        image: Backend,
    },
    {
        id: 3,
        title: "Wordpress Setup",
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
