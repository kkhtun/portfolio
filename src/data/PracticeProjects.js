import Book from "../images/book.png";
import WildFire from "../images/wildfire.png";
import Blog from "../images/blog.png";
import Pixabay from "../images/pixabay.png";
import PhotoUploading from "../images/picture.png";
import BadApple from "../images/bad-apple.jpg";

const practiceProjects = [
    {
        id: 1,
        title: "Book Store Project",
        desc: "Built using Laravel, to includes admin book management, category management, user book download etc.",
        image: Book,
        github_url: "https://github.com/kkhtun/Laravel-Book-Store-Project",
    },
    {
        id: 2,
        title: "WildFire Tracker",
        desc: "A simple React App to track wildfires using api.nasa.gov (NASA API for Natural Events) ",
        image: WildFire,
        github_url:
            "https://github.com/kkhtun/WildFire-Tracker-by-React-and-NASA-API",
    },
    {
        id: 3,
        title: "Community Blog",
        desc: "Community Blog done as a part of PHP course, using pure PHP templating.",
        image: Blog,
        github_url:
            "https://github.com/kkhtun/php-course-community-blog-project",
    },
    {
        id: 4,
        title: "Photo Gallery",
        desc: "A simple react tutorial photo gallery web app using Pixabay API to fetch image URLs.",
        image: Pixabay,
        github_url: "https://github.com/kkhtun/PhotoGallery-by-Pixabay-API",
    },
    {
        id: 5,
        title: "Photo Uploading App",
        desc: "A follow through make up of Photo uploading app using React and Firebase firestore/storage BaaS. ",
        image: PhotoUploading,
        github_url: "https://github.com/kkhtun/React-firegram",
    },
    {
        id: 6,
        title: "Bad Apple (Just for fun)",
        desc: "Bad Apple on Browser Console but each frame is an API call",
        image: BadApple,
        github_url: "https://github.com/kkhtun/bad-apple-frames-api-ascii",
        project_url: "https://www.youtube.com/watch?v=KyVkOUhbJyE",
    },
];

export default practiceProjects;
