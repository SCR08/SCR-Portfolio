import MovieBanner from '../../assets/Movie-Banner.png';
import Solar1 from '../../assets/Solar1.png';
import BankHero from '../../assets/BankHero.png';
import CategoryStudio from '../../assets/category-studio.png';

export const projectsData = [
        {
            id: 1,
            image: CategoryStudio,
            title: "Category Studio",
            category: "Engineering",
            description: "A React and TypeScript visual builder for composing, previewing, saving, and exporting responsive category sections.",
            tags: ["React 19", "TypeScript", "Vite", "Supabase", "Automated tests"],
            links: [
                { label: "Open live app", url: "https://os-template-platform.netlify.app/", primary: true },
                { label: "View source", url: "https://github.com/SCR08/category-template-builder" },
            ],
        },

        {
            id: 2,
            image: MovieBanner,
            title: "Movie Theater App",
            category: "UX Design",
            description: "A mobile-first cinema discovery and ticketing concept developed through research, flows, wireframes, and interactive prototyping.",
            tags: ["UX research", "User flows", "Wireframes", "Prototype"],
            links: [{ label: "View UX case study", url: "https://drive.google.com/file/d/1CBwRy9ENPs_rq98pz6M05mwlWGeUVRe7/view?usp=drive_link", primary: true }],
        },

        {
            id: 3,
            image: Solar1,
            title: "Solar Farm for Social Good",
            category: "UX Design",
            description: "A responsive social-good concept focused on making clean-energy information easier to understand and act on.",
            tags: ["Responsive UX", "Accessibility", "Information architecture"],
            links: [{ label: "View UX case study", url: "https://drive.google.com/file/d/15S8p1A2rq6lyHON7mnGCj_axRKpc_-Y0/view?usp=drive_link", primary: true }],
        },

        {
            id: 4,
            image: BankHero,
            title: "Bank Website Concept",
            category: "UX Design",
            description: "A banking website concept exploring clearer navigation, trust signals, and accessible paths to common customer tasks.",
            tags: ["Web UX", "Prototyping", "Usability"],
            links: [{ label: "View UX case study", url: "https://drive.google.com/file/d/19e5R8swyfeHhITJAkuiJ-k6cHeeJAznW/view?usp=drive_link", primary: true }],
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
        name: 'UX Design',
    },
];
