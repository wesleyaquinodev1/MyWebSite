interface ExperienceJob {
    company: string;
    role: string;
    period: string;
    location: string;
}

const portugueseJobs: ExperienceJob[] = [
    {
        company: 'G4F',
        role: 'Cargo: Desenvolvedor Full Stack',
        period: 'mai. de 2024 - Atual · 2 anos 7 meses',
        location: 'Brasília, Distrito Federal, Brasil · Híbrido'
    },
    {
        company: 'Apae Brasil',
        role: 'Cargo: Assistente de TI',
        period: 'mar. de 2024 - abr. de 2024 · 2 meses',
        location: 'Brasília, Distrito Federal, Brasil · No local'
    },
    {
        company: 'CFC - Conselho Federal de Contabilidade (CFC)',
        role: 'Cargo: Programador de software · Estágio',
        period: 'jun. de 2022 - mar. de 2024 · 1 ano 10 meses',
        location: 'Brasília, Distrito Federal, Brasil · No local'
    },
    {
        company: 'Freelance',
        role: 'Desenvolvedor web freelancer',
        period: 'jan. de 2023 - dez. de 2023 · 1 ano',
        location: ''
    },
    {
        company: 'CTFinancy Software Jurídico',
        role: 'Cargo: Suporte técnico · Estágio',
        period: 'dez. de 2020 - dez. de 2021 · 1 ano 1 mês',
        location: 'Brasília, Distrito Federal, Brasil · No local'
    }
];

const englishJobs: ExperienceJob[] = [
    {
        company: 'G4F',
        role: 'Position: Full Stack Developer',
        period: 'May 2024 - Present · 2 years 7 months',
        location: 'Brasília, Federal District, Brazil · Hybrid'
    },
    {
        company: 'Apae Brasil',
        role: 'Position: IT Assistant',
        period: 'Mar 2024 - Apr 2024 · 2 months',
        location: 'Brasília, Federal District, Brazil · On-site'
    },
    {
        company: 'CFC - Conselho Federal de Contabilidade (CFC)',
        role: 'Position: Software Developer · Internship',
        period: 'Jun 2022 - Mar 2024 · 1 year 10 months',
        location: 'Brasília, Federal District, Brazil · On-site'
    },
    {
        company: 'Freelance',
        role: 'Freelance Web Developer',
        period: 'Jan 2023 - Dec 2023 · 1 year',
        location: ''
    },
    {
        company: 'CTFinancy Software Jurídico',
        role: 'Position: Technical Support · Internship',
        period: 'Dec 2020 - Dec 2021 · 1 year 1 month',
        location: 'Brasília, Federal District, Brazil · On-site'
    }
];


export const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
            skills: 'Habilidades',
            education: 'Formação',
            contact: 'Contatos',
            language: 'Selecionar idioma',
            theme: 'Alternar tema'
        },
        hero: {
            greeting: 'Olá, eu sou',
            role: 'Desenvolvedor',
            roleComplement: 'Full Stack',
            description: 'Desenvolvedor de software com formação em Ciência da Computação e foco na criação de aplicações web, sistemas e soluções digitais.',
            projects: 'Ver Projetos',
            contact: 'Entrar em Contato',
            resume: 'Baixar currículo',
            photoAlt: 'Wesley Aquino, Desenvolvedor Full Stack',
            github: 'GitHub de Wesley Aquino',
            linkedin: 'Perfil de Wesley Aquino no LinkedIn'
        },

        about: {
            eyebrow: 'Sobre mim',
            title: 'Uma jornada movida por tecnologia',
            paragraph1: 'Sou formado em Ciência da Computação e atuo como desenvolvedor Full Stack, com experiência em criar soluções web eficientes, seguras e escaláveis.',
            paragraph2: 'Acredito no poder da tecnologia para resolver problemas reais e melhorar a vida das pessoas.',
            pillars: [
                {
                    title: 'Desenvolvimento Full Stack',
                    description: 'Do front ao back, com foco em qualidade.'
                },
                {
                    title: 'Soluções Reais',
                    description: 'Transformando necessidades em produtos digitais.'
                },
                {
                    title: 'Boas Práticas',
                    description: 'Código limpo, seguro e escalável.'
                }
            ]
        },
        experience: {
            title: 'Experiência',
            jobs: portugueseJobs
        },
        projects: {
            eyebrow: 'Projetos',
            titleStart: 'Projetos que',
            titleEnd: 'mostram na prática',
            description: 'Soluções reais desenvolvidas do protótipo ao deploy, com foco em performance, responsividade e experiência do usuário.',
            badge: 'Landing Page',
            projectTitle: 'AAMS Assessoria e Consultoria',
            projectDescription: 'Landing page institucional com prototipação no Figma, responsividade e otimização para SEO.',
            access: 'Acessar'
        },

        skills: {
            eyebrow: 'Stack Tecnológica',
            title: 'Minhas Habilidades',
            description: 'Tecnologias e ferramentas que utilizo no dia a dia para construir aplicações completas, escaláveis e seguras.',
            frontend: 'Front-end',
            backend: 'Back-end',
            database: 'Banco de Dados',
            infrastructure: 'Infraestrutura',
            tools: 'Ferramentas & Produtividade'
        },
        education: {
            title: 'Formação',
            subtitle: 'Minha trajetória acadêmica',
            current: 'Em andamento',
            currentPeriod: 'abr. de 2024 – dez. de 2026',
            currentDegree: 'Pós-graduação Lato Sensu em Segurança Cibernética',
            currentInstitution: 'UniCEUB - Centro Universitário de Brasília',
            completed: 'Concluído',
            completedDegree: 'Bacharelado em Ciência da Computação',
            completedInstitution: 'Universidade Paulista (UNIP)'
        },
        contact: {
            eyebrow: 'Contato',
            title: 'Vamos conversar?',
            description: 'Estou aberto a novas oportunidades, projetos e conexões na área de tecnologia.',
            form: {
                subject: 'Assunto',
                name: 'Nome completo',
                email: 'Seu e-mail',
                work: 'Oportunidade de Trabalho',
                project: 'Novo Projeto / Freelance',
                networking: 'Networking / Conexão',
                other: 'Outro assunto',
                message: 'Mensagem',
                submit: 'Enviar mensagem',
                emailSubject: 'Novo contato via Portfólio!'
            }
        },
        footer: {
            description: 'Desenvolvedor Full Stack formado em Ciência da Computação. Criando aplicações web modernas, seguras e escaláveis com .NET e Angular.',
            navigation: 'NAVEGAÇÃO',
            home: 'Início',
            about: 'Sobre mim',
            skills: 'Habilidades',
            projects: 'Projetos',
            contact: 'Contato',
            connect: 'CONECTE-SE',
            download: 'Baixar Currículo',
            copyright: 'Todos os direitos reservados.',
            developedBy: 'Desenvolvido por',
            backToTop: 'Voltar ao topo'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            education: 'Education',
            contact: 'Contact',
            language: 'Select language',
            theme: 'Toggle theme'
        },
        hero: {
            greeting: 'Hello, I am',
            role: 'Full Stack',
            roleComplement: 'Developer',
            description: 'Software developer with a Computer Science degree, focused on building web applications, systems and digital solutions.',
            projects: 'View Projects',
            contact: 'Get in Touch',
            resume: 'Download Resume',
            photoAlt: 'Wesley Aquino, Full Stack Developer',
            github: 'Wesley Aquino on GitHub',
            linkedin: 'Wesley Aquino on LinkedIn'
        },
        about: {
            eyebrow: 'About me',
            title: 'A journey driven by technology',
            paragraph1: 'I hold a degree in Computer Science and work as a Full Stack Developer, with experience building efficient, secure and scalable web solutions.',
            paragraph2: 'I believe in the power of technology to solve real-world problems and improve people’s lives.',
            pillars: [
                {
                    title: 'Full Stack Development',
                    description: 'From frontend to backend, with a focus on quality.'
                },
                {
                    title: 'Real Solutions',
                    description: 'Turning needs into digital products.'
                },
                {
                    title: 'Best Practices',
                    description: 'Clean, secure and scalable code.'
                }
            ]
        },
        experience: {
            title: 'Experience',
            jobs: englishJobs
        },
        projects: {
            eyebrow: 'Projects',
            titleStart: 'Projects that',
            titleEnd: 'showcase my work',
            description: 'Real-world solutions developed from prototype to deployment, focusing on performance, responsiveness and user experience.',
            badge: 'Landing Page',
            projectTitle: 'AAMS Assessoria e Consultoria',
            projectDescription: 'Corporate landing page featuring Figma prototyping, responsive design and SEO optimization.',
            access: 'Visit Website'
        },
        skills: {
            eyebrow: 'Technology Stack',
            title: 'My Skills',
            description: 'Technologies and tools I use daily to build complete, scalable and secure applications.',
            frontend: 'Front-end',
            backend: 'Back-end',
            database: 'Database',
            infrastructure: 'Infrastructure',
            tools: 'Tools & Productivity'
        },
        education: {
            title: 'Education',
            subtitle: 'My academic background',
            current: 'In progress',
            currentPeriod: 'Apr 2024 – Dec 2026',
            currentDegree: 'Postgraduate Specialization in Cybersecurity',
            currentInstitution: 'UniCEUB - University Center of Brasília',
            completed: 'Completed',
            completedDegree: 'Bachelor of Computer Science',
            completedInstitution: 'Universidade Paulista (UNIP)'
        },
        contact: {
            eyebrow: 'Contact',
            title: 'Let’s talk?',
            description: 'I am open to new opportunities, projects and connections in the technology industry.',
            form: {
                subject: 'Subject',
                name: 'Full name',
                email: 'Your email',
                work: 'Job Opportunity',
                project: 'New Project / Freelance',
                networking: 'Networking',
                other: 'Other',
                message: 'Message',
                submit: 'Send message',
                emailSubject: 'New contact via Portfolio!'
            }
        },
        footer: {
            description: 'Full Stack Developer with a degree in Computer Science. Building modern, secure and scalable web applications with .NET and Angular.',
            navigation: 'NAVIGATION',
            home: 'Home',
            about: 'About me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            connect: 'CONNECT',
            download: 'Download Resume',
            copyright: 'All rights reserved.',
            developedBy: 'Developed by',
            backToTop: 'back to top'
        }
    }
} as const;

export type Language = keyof typeof translations;