import Project1 from "../assets/movix.png"
import Project2 from "../assets/KnowYourUniverse.png"

const projects = [
    {
        id: 1,
        title: 'Movix',
        description: ' At New Era Tech, I have been responsible for supporting and resolving client-reported issues on existing projects, ensuring smooth functionality and user experience. I worked on developing new solutions using the SharePoint API and contributed to various React projects, building dynamic user interfaces. My role also involved collaborating with cross-functional teams to deliver robust and high-quality frontend solutions.',
        imageUrl: Project1,
        gitUrl: "https://github.com/kk240/MovieDB",
        liveUrl: "https://cinematechs.vercel.app/",
        projectTechs: ["React", "Redux", "SCSS", "API"],

    },
    {
        id: 1,
        title: 'know your universe',
        description: 'During my time at Inought Sportech, I gathered client requirements, proposed solutions, and developed frontend systems that met their needs. I was responsible for building user interfaces based on design guidelines, integrating APIs to ensure seamless backend-frontend communication, and optimizing existing code for better performance. Additionally, I played a key role in improving the user experience through thoughtful UI/UX enhancements.',
        imageUrl: Project2,
        gitUrl: "https://github.com/kk240/NasaExplorer",
        liveUrl: "https://knowyouruniverse.vercel.app/",
        projectTechs: ["React", "API", "Tailwind"],
    },

    // Add more projects as needed
];

export default projects;
