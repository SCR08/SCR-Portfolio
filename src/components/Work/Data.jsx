import MovieBanner from '../../assets/Movie-Banner.png';
import Expandingcards from '../../assets/Expandingcards.png';
import Solar1 from '../../assets/Solar1.png';
import BankHero from '../../assets/BankHero.png';
import Coding1 from '../../assets/Coding1.png';
import CategoryStudio from '../../assets/category-studio.png';

export const projectsData = [
        {
            id: 1,
            image: CategoryStudio,
            title: "Category Studio",
            category: "Engineering",
            description: "A React and TypeScript visual builder for composing, previewing, saving, and exporting responsive category sections.",
            tags: ["React 19", "TypeScript", "Vite", "Supabase", "Automated tests"],
            url: "https://github.com/SCR08/category-template-builder",
            linkLabel: "View repository",
            external: true,
        },

        {
            id: 2,
            image: Coding1,
            title: "Multi-Site Migration Program",
            category: "Case Study",
            description: "A repeatable implementation approach used across 40+ retail websites, balancing speed, accessibility, SEO, and responsive quality.",
            tags: ["CMS migration", "WCAG", "SEO", "Lighthouse", "Cross-functional"],
            url: "#case-study",
            linkLabel: "Read case study",
            external: false,
        },

        {
            id: 3,
            image: Expandingcards,
            title: "Lead Magnet Workflow System",
            category: "Implementation",
            description: "A standardized process for delivering 17+ responsive GoHighLevel form and CRM automation workflows across client accounts.",
            tags: ["GoHighLevel", "CRM", "Forms", "Responsive QA", "Workflow design"],
            url: "#contact",
            linkLabel: "Discuss the approach",
            external: false,
        },

        {
            id: 4,
            image: MovieBanner,
            title: "Movie Theater App",
            category: "UX Design",
            description: "A mobile-first cinema discovery and ticketing concept developed through research, flows, wireframes, and interactive prototyping.",
            tags: ["UX research", "User flows", "Wireframes", "Prototype"],
            url: "https://drive.google.com/file/d/1CBwRy9ENPs_rq98pz6M05mwlWGeUVRe7/view?usp=drive_link",
            linkLabel: "View UX case study",
            external: true,
        },

        {
            id: 5,
            image: Solar1,
            title: "Solar Farm for Social Good",
            category: "UX Design",
            description: "A responsive social-good concept focused on making clean-energy information easier to understand and act on.",
            tags: ["Responsive UX", "Accessibility", "Information architecture"],
            url: "https://drive.google.com/file/d/15S8p1A2rq6lyHON7mnGCj_axRKpc_-Y0/view?usp=drive_link",
            linkLabel: "View UX case study",
            external: true,
        },

        {
            id: 6,
            image: BankHero,
            title: "Bank Website Concept",
            category: "UX Design",
            description: "A banking website concept exploring clearer navigation, trust signals, and accessible paths to common customer tasks.",
            tags: ["Web UX", "Prototyping", "Usability"],
            url: "https://drive.google.com/file/d/19e5R8swyfeHhITJAkuiJ-k6cHeeJAznW/view?usp=drive_link",
            linkLabel: "View UX case study",
            external: true,
        },

];

export const projectsNav = [
    {
        name: 'All',
    },

    {
        name: 'Engineering',
    },

    {
        name: 'Case Study',
    },

    {
        name: 'Implementation',
    },

    {
        name: 'UX Design',
    },
];
