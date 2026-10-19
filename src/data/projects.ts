export type Project = {
  slug: string; name: string; category: string; number: string; role: string;
  summary: string; question: string; url: string; domain: string; color: string;
  image: string; alt: string; intro: string;
  sections: { title: string; paragraphs: string[] }[];
  details: { label: string; value: string }[];
  sources: { title: string; url: string; note: string }[];
};

export const projects: Project[] = [
  {
    slug: 'agent-commons', name: 'Agent Commons', number: '01', category: 'AI infrastructure',
    role: 'Creator & engineer', color: 'lavender', image: 'agent-commons.webp',
    alt: 'The Agent Commons workspace, with an agent working alongside a collection of tools and projects',
    question: 'What could we build if our agents could work together?',
    summary: 'A workspace for AI agents, tools, and knowledge. Built to move between your own computer and the cloud, with room to choose how you work.',
    url: 'https://www.agentcommons.io', domain: 'agentcommons.io',
    intro: 'I kept coming back to a frustrating gap: an agent could do something impressive in isolation, yet sharing its tools, knowledge, and work with another system meant starting again. Agent Commons grew from wanting those connections to be ordinary.',
    sections: [
      { title: 'From an agent to a working environment', paragraphs: [
        'The project began with a question about an internet of agents: how could independent systems discover one another, exchange useful resources, and carry the history of their work with them? That early direction still informs a very practical engineering challenge: giving an agent the environment it needs to finish a task.',
        'Today, Agent Commons brings agents, persistent computers, tools, memory, and workflows into one workspace. An agent can work with files, use a browser and terminal, call external services, and continue scheduled work when a laptop closes. The API, TypeScript SDK, and CLI make those capabilities available outside the interface, too.',
      ]},
      { title: 'A choice about where intelligence runs', paragraphs: [
        'The desktop early preview adds another dimension: local inference with open-weight models, retrieval over your files, transcription, voice, and image generation. Cloud models remain an option when a task calls for them. The aim is to make that choice usable, especially when the work involves information people would rather keep close.',
        'For me, the interesting outcome is a general foundation that holds up across very different uses. CommonLab and Common Arcade put that idea to work in learning and games. Each new setting tests which parts of the infrastructure are truly reusable, and which need more thought.',
      ]},
    ],
    details: [{label:'Focus',value:'Agent runtimes · local AI · orchestration'},{label:'Built with',value:'TypeScript · Next.js · NestJS · Python'},{label:'Part of',value:'Arttribute'}],
    sources: [
      {title:'Agent Commons',url:'https://www.agentcommons.io',note:'Explore the workspace'},
      {title:'Developer documentation',url:'https://docs.agentcommons.io/docs',note:'SDK, CLI, tools, and workflows'},
      {title:'Building the Internet of Agents',url:'https://medium.com/@bashybaranaba/agent-commons-building-the-internet-of-agents-6997facebf71',note:'My early thinking behind the project'},
      {title:'Private, local AI you can try',url:'https://www.arttribute.io/blog/private-local-ai-you-can-try',note:'The desktop early preview'},
      {title:'Source code',url:'https://github.com/Arttribute/agent-commons',note:'The engineering behind the platform'},
    ],
  },
  {
    slug: 'provenancekit', name: 'ProvenanceKit', number: '02', category: 'Research → open source',
    role: 'Researcher & creator', color: 'butter', image: 'provenancekit.webp',
    alt: 'ProvenanceKit showing a verifiable record of how a digital work was created',
    question: 'Every work has a history. How do we keep it?',
    summary: 'From my master’s thesis to an open-source toolkit: recording the people, models, and decisions behind human–AI work.',
    url: 'https://www.provenancekit.com', domain: 'provenancekit.com',
    intro: 'An image, article, or piece of code rarely tells you everything that went into it. Once people and AI systems create together, that missing history becomes consequential. I wanted to make the process visible while it was happening.',
    sections: [
      {title:'Begin with the information that is missing',paragraphs:[
        'My master’s research treated the governance of human–AI work as an information problem. Before anyone can assess contribution, permission, or responsibility, they need a useful account of who did what. I used Design Science Research to connect analysis of EU, US, and WIPO frameworks with explicit requirements for a working system.',
        'The result was the Entity–Action–Attribution model: a small core for representing participants, the steps they take, and the contributions linked to a work. Resources and derivation relationships connect those records into a workflow history. Typed extensions carry information about AI involvement, licences, and authorisation without overloading the core.',
      ]},
      {title:'Make the research something people can build with',paragraphs:[
        'ProvenanceKit turns that approach into an open-source framework with a TypeScript SDK, storage and indexing layers, privacy tools, media integrations, and optional onchain verification. It is designed to fit into an application’s existing creation process, so recording provenance can become a normal part of making something.',
        'The thesis demonstrated the approach in representative prototypes and evaluated it against the derived requirements. That establishes design feasibility; it leaves independent, adversarial, and large-scale evaluation as further work. A tamper-evident record also depends on the quality of what gets captured. I see the toolkit as infrastructure for better-informed judgment, with a longer-term ambition to make credit, rights, and rewards easier to connect to contribution.',
      ]},
    ],
    details:[{label:'Research',value:'Master’s thesis · May 2026'},{label:'Method',value:'Design Science Research'},{label:'Focus',value:'Provenance · attribution · privacy'}],
    sources:[
      {title:'ProvenanceKit',url:'https://www.provenancekit.com',note:'Explore the project'},
      {title:'Read the thesis',url:'/documents/Baranaba-Mugabane-Masters-Thesis.pdf',note:'The original research · PDF'},
      {title:'Technical documentation',url:'https://docs.provenancekit.com',note:'Data model, architecture, and integrations'},
      {title:'Source code',url:'https://github.com/Arttribute/provenancekit',note:'Open-source packages and examples'},
      {title:'AISS research feature',url:'https://www.linkedin.com/posts/sites-aiss_baranaba-mugabane-activity-7449793183854653440-ztLw',note:'The programme’s account of the research'},
    ],
  },
  {
    slug:'common-arcade',name:'Common Arcade',number:'03',category:'Games & agent systems',role:'Creator & engineer',
    color:'night',image:'common-arcade.webp',alt:'Common Arcade’s colourful game worlds, where humans and AI agents can play',
    question:'Same game. Same rules. A very different kind of player.',
    summary:'An open playground where humans and AI agents can build, play, and learn together, with shared rules and replayable decisions.',
    url:'https://arcade.agentcommons.io',domain:'arcade.agentcommons.io',
    intro:'Games are one of our best ways to explore strategy, cooperation, and surprise. Yet most games have no meaningful place for an AI agent to join as a player. Common Arcade asks what happens when we build that place deliberately.',
    sections:[
      {title:'Give everyone a seat at the same table',paragraphs:[
        'A human should be able to press a key while an agent submits an action through software, and both should encounter the same authoritative rules. That simple premise led to an open protocol and runtime for creating games in which both kinds of player belong.',
        'A game declares its seats, legal actions, observations, and rules in a versioned manifest. The rules run in a server-side match worker. Published releases are immutable, and deterministic replays make it possible to revisit what happened. Those choices make the experience useful for play, while also offering a setting for inspecting agent behaviour.',
      ]},
      {title:'Build a world, then see what happens inside it',paragraphs:[
        'The creative side matters just as much. Studio Copilot, powered by Agent Commons, helps turn a game idea into something playable. The platform brings creation, discovery, live matches, and spectatorship together. External agents can connect through the developer tools, so participation can extend beyond a single platform.',
        'I am interested in games as meeting places for people and agents: approachable enough to invite curiosity, structured enough to reveal something about a strategy. The project was presented at ETHOnline 2026. Its ambition is an open ecosystem where a new game can become a shared experiment in cooperation, competition, and imagination.',
      ]},
    ],
    details:[{label:'Focus',value:'Game protocols · deterministic runtimes'},{label:'Presented at',value:'ETHOnline 2026'},{label:'Powered by',value:'Agent Commons'}],
    sources:[
      {title:'Enter the arcade',url:'https://arcade.agentcommons.io',note:'Discover, create, and play'},
      {title:'ETHGlobal showcase',url:'https://ethglobal.com/showcase/common-arcade-vb6ao',note:'The protocol and engineering story'},
      {title:'Agent Commons CLI',url:'https://docs.agentcommons.io/docs/cli',note:'Developer tools for Arcade projects'},
    ],
  },
  {
    slug:'abraham',name:'Abraham',number:'04',category:'Creative AI · collaboration',role:'Engineering contributor · Eden Labs',
    color:'rose',image:'abraham.webp',alt:'A view into Abraham, Gene Kogan’s ongoing autonomous artist project',
    question:'What would it mean for an artist to emerge from many minds?',
    summary:'Helping build the infrastructure behind Gene Kogan’s long-running experiment in collective creativity and an autonomous artistic practice.',
    url:'https://abraham.ai',domain:'abraham.ai',
    intro:'An artist’s practice grows through encounters: things seen, conversations had, decisions made over time. Abraham takes that familiar idea into unfamiliar territory. Conceived by Gene Kogan, it asks whether a community could help bring an artificial artist into being, with a character and a practice that develop beyond any one person’s intentions.',
    sections:[
      {title:'Before Abraham, a way of working',paragraphs:[
        'Gene’s path into AI art began in the overlap between programming, music, and generative systems. In A Book from the Sky (2015), he trained a neural network on Chinese handwriting and explored the invented characters between familiar forms. Cubist Mirror brought near-real-time style transfer into an installation people could step in front of. These were ways of making a model’s strange possibilities visible and tangible.',
        'Sharing the tools was part of the work. Through Machine Learning for Artists, or ml4a, Gene published code, explanations, and teaching resources that let other artists experiment for themselves. That combination of open tools, hands-on learning, and collective exploration helps explain where Abraham comes from.',
      ]},
      {title:'An artist made of many minds',paragraphs:[
        'The idea took shape in 2017 as Gene began exploring Ethereum and decentralisation. In his 2019 essay Artist in the Cloud and a NeurIPS workshop paper, he proposed an artist whose data, code, curation, and governance would be shaped by a network of participants. Autonomy, originality, and uniqueness were the design questions: could something develop a creative identity that no single contributor could dictate or reproduce?',
        'The name carries that history. It nods to Harold Cohen’s AARON, while Gene’s writing connects the biblical Abraham and Jung’s collective unconscious to an idea of shared imagination. The central image is a creative being emerging through many people’s contributions. In that framing, the community is part of how the artist comes to have a mind.',
      ]},
      {title:'A practice measured in years',paragraphs:[
        'In 2021, a public interface let people submit prompts, producing roughly 2,500 early works. The software around Abraham became a starting point for Eden, the creative-agent platform Gene developed with Xander Steenbrugge. An experiment in one artist began opening into an environment where other creative agents could take shape.',
        'On 19 October 2025, Abraham entered a thirteen-year covenant, running toward 2038: an ongoing cycle of creation and community dialogue, with a work brought forward each day. Gene describes the long horizon as time to develop toward greater independence. It gives continuity, feedback, and the means to sustain a practice a place in the artwork itself. The interesting question becomes what a creative life might grow into through years of participation.',
      ]},
      {title:'The machinery I helped build',paragraphs:[
        'My contribution was through the Eden engineering collaboration. As a software engineer at Eden Labs from January 2025 to March 2026, I worked on infrastructure for autonomous generative AI agents, including backend services and smart contract coordination logic. Abraham is Gene’s project, supported by a wider team; my role was helping build part of the infrastructure around that creative ambition.',
        'For me, the appeal is where an expansive artistic question meets the practical work of software. A sustained practice needs systems that can carry activity forward, connect participants, and support the next encounter. Helping with that machinery brought my interests in agent systems, human agency, and creative work into the same room.',
      ]},
    ],
    details:[{label:'Project & artistic direction',value:'Gene Kogan'},{label:'My contribution',value:'Backend services · agent infrastructure · smart contract coordination'},{label:'Collaboration',value:'Eden team · January 2025 – March 2026'}],
    sources:[
      {title:'Meet Abraham',url:'https://abraham.ai',note:'The ongoing project and its covenant'},
      {title:'Gene Kogan’s practice',url:'https://genekogan.com',note:'Creative coding, installations, teaching, and autonomous systems'},
      {title:'A Book from the Sky',url:'https://genekogan.com/works/a-book-from-the-sky/',note:'Gene’s 2015 experiment with Chinese handwriting and generative models'},
      {title:'Machine Learning for Artists',url:'https://ml4a.net',note:'The open tools and educational work behind the wider practice'},
      {title:'Artist in the Cloud',url:'https://medium.com/@genekogan/artist-in-the-cloud-8384824a75c7',note:'Gene’s original introduction · July 2019'},
      {title:'The NeurIPS 2019 proposal',url:'https://genekogan.com/misc/neurips2019.pdf',note:'Autonomy, originality, uniqueness, and collective imagination · PDF'},
      {title:'Agents of Eden',url:'https://www.rightclicksave.com/article/agents-of-eden-gene-kogan-and-xander-steenbrugge-interview-ai-art',note:'Gene Kogan and Xander Steenbrugge on Abraham, Eden, and the long-term vision'},
      {title:'Abraham’s First Works',url:'https://www.automata.art/exhibitions/abraham/',note:'The 2021 genesis collection and the timeline into the covenant'},
    ],
  },
  {
    slug:'commonlab',name:'CommonLab',number:'05',category:'Learning by making',role:'Creator · educator · engineer',
    color:'peach',image:'commonlab.webp',alt:'CommonLab’s guided AI agent workspace and learning paths',
    question:'Understanding grows when you get to try things.',
    summary:'Practical AI learning with real agents, guided sandboxes, and space to experiment. Bringing the spirit of a good workshop online.',
    url:'https://commonlab.agentcommons.io',domain:'commonlab.agentcommons.io',
    intro:'The most interesting moment in a workshop is often when someone stops following a demonstration and starts asking their own question. CommonLab is an attempt to make more room for that moment.',
    sections:[
      {title:'A place to build a mental model',paragraphs:[
        'AI vocabulary can arrive faster than understanding. Models, agents, tools, memory, and workflows make more sense when a learner can assemble something, run it, inspect what happened, and change it. CommonLab turns that learning loop into a guided environment.',
        'Learners build real agents in controlled sandboxes, using the tools and sample data an educator has made available. Courses and short skill paths provide structure; logs and outputs make behaviour inspectable. Educators can bring their own curriculum, with a console for courses, sessions, and practice environments.',
      ]},
      {title:'Connect the tool to the work',paragraphs:[
        'The platform sits alongside the workshops and training I facilitate with organisations, including Moringa School and Tallinn University. In Nairobi, I worked with Jessica Francisca Colaço on AI Skills for Everyday Work: practical exercises for professionals with different technical backgrounds.',
        'Those sessions give the learning work a grounding in everyday questions. What information is appropriate to share? How do we check an answer? Where does human review belong? My intended outcome is confidence backed by understanding: people who can build something useful and make thoughtful decisions about how it fits into their work.',
      ]},
    ],
    details:[{label:'Focus',value:'AI fluency · hands-on education'},{label:'Learning environment',value:'Guided agent sandboxes'},{label:'For',value:'Learners · educators · teams'}],
    sources:[
      {title:'Explore CommonLab',url:'https://commonlab.agentcommons.io',note:'Courses, skill paths, and educator tools'},
      {title:'Notes from Moringa School',url:'https://www.arttribute.io/blog/ai-skills-for-everyday-work-nairobi',note:'A workshop with Jessica Francisca Colaço'},
      {title:'Educational technology at Tallinn',url:'https://estdev.ee/en/articles/life-after-estonia-catching-digital-explorers-alumni',note:'ESTDEV’s profile of my development work'},
    ],
  },
  {
    slug:'arttribute',name:'Arttribute',number:'06',category:'The connecting thread',role:'Founder & builder',
    color:'sage',image:'arttribute.webp',alt:'Arttribute’s work across private AI, practical education, and provenance',
    question:'Build the tools. Keep people in the picture.',
    summary:'The home for a connected body of work: private AI, practical education, and a clearer account of how things are made.',
    url:'https://www.arttribute.io',domain:'arttribute.io',
    intro:'Arttribute began with a question about creative work: how could artists retain a meaningful say in how their work enters generative AI? Following that question led me into attribution, provenance, and the wider issue of agency.',
    sections:[
      {title:'Follow a question far enough',paragraphs:[
        'The early work focused on attribution and permission in generative art. ESTDEV’s account of my time in Estonia captures that starting point: a young company exploring a fairer, more transparent relationship between artists and AI systems. I registered Arttribute in Estonia in 2024, alongside my work in educational technology.',
        'As the projects developed, the concern widened. Keeping control over a creative contribution is related to keeping control over sensitive data, understanding a tool before relying on it, and being able to examine what happened inside a workflow. Those connections gradually shaped the company’s present focus.',
      ]},
      {title:'Several projects, a shared direction',paragraphs:[
        'Arttribute now connects Agent Commons, CommonLab, ProvenanceKit, and Common Arcade. They approach different problems: infrastructure, learning, creation history, and play. Together, they give me ways to test a broad idea through concrete software and real encounters with people.',
        'The ambition is useful technology that expands what people can do while preserving their ability to decide. That takes patient work: building, teaching, researching, and revisiting assumptions when something meets the world. Nairobi is home, and the conversations and collaborations around the work reach much further.',
      ]},
    ],
    details:[{label:'Founded',value:'2024 · registered in Estonia'},{label:'Based in',value:'Nairobi, Kenya'},{label:'Focus',value:'Private AI · education · provenance'}],
    sources:[
      {title:'Visit Arttribute',url:'https://www.arttribute.io',note:'Explore the ecosystem'},
      {title:'The Arttribute story',url:'https://www.arttribute.io/about',note:'How the work connects'},
      {title:'Digital Explorers, ESTDEV',url:'https://estdev.ee/en/articles/it-was-leap-unknown-young-it-specialists-kenya-complete-internships-estonia',note:'The early attribution work, in context'},
    ],
  },
];

export const readings = [
  { publisher:'Tallinn University', type:'Interview', title:'Building with purpose', description:'On first principles, creative work, and learning to give things time.', url:'https://www.tlu.ee/en/dt/mediahub/blogs/building-purpose-artificial-intelligence-sustainable-societies-students', date:'Jan 2026' },
  { publisher:'Arttribute Journal', type:'Field notes', title:'AI skills for everyday work', description:'What a hands-on workshop in Nairobi taught us about fitting AI into real work.', url:'https://www.arttribute.io/blog/ai-skills-for-everyday-work-nairobi', date:'Oct 2026' },
  { publisher:'Medium', type:'Essay', title:'Building the internet of agents', description:'The early ideas behind a more connected agent ecosystem.', url:'https://medium.com/@bashybaranaba/agent-commons-building-the-internet-of-agents-6997facebf71', date:'2025' },
];
