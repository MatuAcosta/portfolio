const path = '/assets/img/'
export  const technologies = [
    {   
        name: 'Angular',
        icon: `${path}angular.svg`
    }, 
    {
        name: 'Javascript',
        icon: `${path}javascript.svg`
    },
    {
        name: 'HTML',
        icon: `${path}html5.svg`
    },
    {
        name: 'CSS',
        icon: `${path}css.svg`
    },
    {
        name: 'NodeJS',
        icon: `${path}nodejs.svg`
    },
    {
        name: 'NestJS',
        icon: `${path}nestjs.svg`
    },
    {
        name: 'RabbitMQ',
        icon: `${path}rabbitmq.svg`
    },
    {
        name: 'MongoDB',
        icon: `${path}mongodb.svg`
    },
    {
        name: 'PostgreSQL',
        icon: `${path}postgresql.svg`
    }

]

export const socials = [
    {
        name: 'Linkedin',
        icon: `${path}linkedin.svg`,
        url: 'https://www.linkedin.com/in/matias-acosta-5a50041b5/'
    },
    {
        name: 'Github',
        icon: `${path}github.svg`,
        url: 'https://github.com/MatuAcosta?tab=repositories'
    },
    {
        name: 'Gmail',
        icon: `${path}gmail.svg`,
        url: 'mailto:matiaseacosta18@gmail.com'
    },
    {
        name: 'Resume',
        icon: `${path}cv.svg`,
        url: `cv_acostamatias.pdf`
    }
]

export const projects = [
    {   
        colortitleStyle: 'text-emerald-700',
        name: 'Pictopic - A simple image sharing platform',
        description: 'Pictopic is a simple image sharing platform that allows users to upload images and share them with the world about a topic choose by AI.',
        url: 'https://pictopic.vercel.app/home',
        github: 'https://github.com/MatuAcosta/pictopic',
        src: '/assets/img/pictopic.png',
        tecnologies: [{
            name: 'Angular',
            icon: '/assets/img/angular.svg'
        }, 
        {
            name: 'Tailwind',
            icon: '/assets/img/tailwindcss.svg'
        },
        {
            name: 'Firebase',
            icon: '/assets/img/firebase.svg'
        }
    ]}, 
    {
        colortitleStyle: 'text-lime-800',
        name: 'Cabañas Iberá - A website for a rural tourism business',
        description: 'Cabañas Iberá is a website for a rural tourism business located in the Iberá Wetlands, Corrientes, Argentina.',
        url: 'https://cabañasibera.com',
        github: '',
        src: '/assets/img/cabaniasibera.png',
        tecnologies: [{
            name: 'Angular',
            icon: '/assets/img/angular.svg'
        }, 
        {
            name: 'Tailwind',
            icon: '/assets/img/tailwindcss.svg'
        },
    ]
    }
]