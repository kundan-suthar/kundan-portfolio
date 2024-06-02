import Project1 from "../assets/movix.png"
import Project2 from "../assets/KnowYourUniverse.png"

const projects = [
    {
        id: 1,
        title: 'Movix',
        description: ' A Real time movie app to showcase all latest movies with their ratings.',
        imageUrl: Project1,
        gitUrl: "https://github.com/kk240/MovieDB",
        liveUrl: "https://cinematechs.vercel.app/",
        projectTechs: ["React", "Redux", "SCSS", "API"],

    },
    {
        id: 1,
        title: 'know your universe',
        description: 'Used Nasa API to showcase APOD images and space images captured and published by NASA',
        imageUrl: Project2,
        gitUrl: "https://github.com/kk240/NasaExplorer",
        liveUrl: "https://knowyouruniverse.vercel.app/",
        projectTechs: ["React", "API", "Tailwind"],
    },

    // Add more projects as needed
];

export default projects;
