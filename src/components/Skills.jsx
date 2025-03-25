const Skills = {
    CoreTechnologies: [
        {
            skill: "HTML",
            description: "Semantic HTML, Accessibility",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
            skill: "CSS",
            description: "Styling, Flexbox, Grid, Preprocessors like SASS/LESS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "JavaScript",
            description: "ES6+, DOM Manipulation, Event Handling",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
    ],
    FrameworksAndLibraries: [
        {
            skill: "React.js",
            description: "Components, Hooks, State Management",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
            skill: "Vue.js",
            description: "Reactive Data Binding, Vuex",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
    ],
    VersionControl: [
        {
            skill: "Git",
            description: "Basic Commands, GitHub/GitLab",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
        },
    ],
    responsiveDesign: [
        {
            skill: "Media Queries",
            description: "Creating responsive layouts",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "Flexbox & Grid",
            description: "Advanced layout techniques",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "Mobile-First Design",
            description: "Designing for mobile devices first",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
    ],
    testing: [
        {
            skill: "Jest",
            description: "Unit/Integration Testing",
            logo: "https://jestjs.io/img/jest.png",
        },
    ],
    performanceOptimization: [
        {
            skill: "Lazy Loading",
            description: "Loading resources only when needed",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "Code Splitting",
            description: "Splitting code into smaller bundles",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "Caching Strategies",
            description: "Implementing browser caching strategies",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
    ],
    apisAndDataHandling: [
        {
            skill: "RESTful APIs",
            description: "Fetching and sending data using Fetch or Axios",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
            skill: "GraphQL",
            description: "Querying data efficiently using Apollo Client or Relay",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
        },
    ],
    progressiveWebApps: [
        {
            skill: "Service Workers",
            description: "Offline capabilities and background sync",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rW6Ad-5KzV4baP64vix0zMCzPOttRpQ8ew&s",
        },
    ],
    softSkills: [
        {
            skill: "Problem-Solving",
            description: "Debugging and troubleshooting",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmuQbn5-CYuJx2krF28s_7y6e1qWBoi0BvA&s",
        },
        {
            skill: "Communication",
            description: "Collaborating with designers, backend developers, and stakeholders",
            logo: "https://static.vecteezy.com/system/resources/previews/020/361/253/non_2x/communication-icon-collaboration-illustration-sign-cooperation-symbol-teamwork-logo-vector.jpg",
        },
        {
            skill: "Continuous Learning",
            description: "Keeping up with new technologies and best practices",
            logo: "https://static.vecteezy.com/system/resources/previews/011/478/955/non_2x/continuous-learning-blue-gradient-concept-icon-trendy-skill-to-put-in-resume-abstract-idea-thin-line-illustration-lifelong-education-isolated-outline-drawing-vector.jpg",
        },
    ],
    tools: [
        {
            skill: "Code Editors (VS Code, Sublime Text)",
            description: "Tools for writing and editing code",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        },
        {
            skill: "Design Tools (Figma, Sketch, Adobe XD)",
            description: "Tools for designing user interfaces",
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
    ],
    additionalSkills: [
        {
            skill: "TypeScript",
            description: "Adding static types to JavaScript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        },
        {
            skill: "WebSockets",
            description: "Real-time communication between client and server",
            logo: "data:image/png;base64,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",
        },
    ],
};

export default Skills;