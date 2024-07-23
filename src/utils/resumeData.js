import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { WebOutlined } from '@mui/icons-material';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default{
    name: "Muhammad Abdulah",
    title: "Computer Science Graduate",
    birthday : "December 7th 2000",
    Email: "theabdulah.office@gmail.com",
    Address:'BufferZone, Karachi, Pakistan.',
    Botim: '+92 3162045955',
    

    socials: {

        Linkedin:{
            link:"https://www.linkedin.com/in/muhammad-abdullah-6484541a8/",
            text:"MyLinkedin",
            icon: <LinkedInIcon/>

        },
        Github:{
            link:"https://github.com/Muhammad-Abdullah-w/",
            text:"MyGithub",
            icon: <GithubIcon/>
        },
        Facebook:{
            link:"https://medium.com/@theabdullah.office",
            text:"MyBlogs",
            icon: <BookIcon/>

        },
        TryHackme:{
            link:"https://tryhackme.com/p/XerxesZypo",
            text:"TryHackMe",
            icon: <CloudQueueIcon color='red'/>

        },

    },

    About:'My career objective is to become an expert in cybersecurity engineering. While I have a solid foundation in front-end web development, I am also specialize in performing vulnerability analysis of web applications. My professional journey includes cloud-related experience and certifications, and I am deeply passionate about cybersecurity. Since 2022, I have been actively involved in cybersecurity activities, reflecting my deep commitment to this field. Graduated in 2024 with a Bachelor’s degree in Computer Science from FAST National University of Computer and Emerging Sciences, I am 23 years old and I am eager to contribute my academic and practical experiences to the ever-evolving tech landscape.',
    experiences: [

        {
            title:"Trainee Vulnerability Assessment and Penetration Testing",
            company:'AshreiTech',
            date:'Dec 2023 - Feb 2024',
            Description:'Hands on Experience on multiple web security tools'
        },

        {
            title:"Intern, Information Technology Department",
            company:'Sui Southern Gas Company',
            date:'Jun 2023 - July 2023',
            Description:'Assisted in the configuration of Firewalls, Router and Switches'

        },

        {
            title:"Teacher Assistant",
            company:'Fast National University of Computer and Emerging Science',
            date:'Aug 2022 - May 2023',
            Description:'Courses "Data Structure" and "Computer Organization and Assembly Language".'
        }

    ],


    education: [

        {
            title:"Bachelor of Science in Computer Science",
            institute:'FAST National University of Computer and Emerging Science',
            date:'Aug 2019 - June 2024',
            Grade:'B (3.07/4.0)',
            Description:'Information System Audit and Control, Information Security, Intro to Cloud Computing,\
            Computer Networks and Web Programming.'
        },

        {
            title:"Higher Secondary School",
            institute:'Govt. College For Men Nazimabad',
            date:'Jun 2017 - Sep 2019',
            Grade:'A-One',
            Description:'Pre-Eng' 

        },

        {
            title:"Secondary School",
            institute:'F. F. Public School Buffer Zone',
            date:'April 2015 - June 2017',
            Grade:'A-One',
            Description:'Pre-Eng' 
        }

    ],

    services:[
        {
            title: "Web Developing",
            icon:<WebOutlined/>,
            description:"Experienced front-end developer"
        },
        
        {
            title: "InfoSec Consultancy",
            icon:<SecurityIcon/>,
            description:"Providing info or guide to Individuals or Organizations about InfoSec procedures for their operations "
        },

        {
            title: "WebApp Security Testing",
            icon:<BugReportIcon/>,
            description:"Testing the security of web applications against latest attacks, tools and techniques"
            
        },

        {
            title: "Cloud Consultancy",
            icon:<CloudDoneIcon/>,
            description:"Providing info or guide to Individuals or Organizations about Cloud procedures for their operations"
            
        },


            
    ],

    skills:[
        {
            title:'Programming',
            description: [
                "ReactJS","Material UI","Python","C/C++","Java"
            ]
        },
        {
            title:'Cybersecurity',
            description: [
                "Vulnerability Assessment","OSINT"
            ]
        },

        {
            title:'Others',
            description: [
                "Devices Configuration", "Technical Documentation"
            ]
        }
    ],
    certificates:[
        {
            tag:'Cybersecurity',
            caption:'TryHackMe',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD6Fl6VBGl2AqHCFKLvxQr21D5pjMR71f5w&s',
            description:'Click the below icon to view my profile of TryHackMe in which I have completed 39 rooms.',
            links:[
                { link:'https://tryhackme.com/p/XerxesZypo', icon: <WorkspacePremiumIcon/> }
            ]

        },
        
        {
            tag:'Content Writing',
            caption:'My Blogs',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKYk2LEUKYVT6UtjG3hZwYyPD6SHVz918mg&s',
            description:'Click the below icon to view my blogs on Medium.',
            links:[
                { link:'https://medium.com/@theabdullah.office', icon: <WorkspacePremiumIcon/> }
            ]

        },

                   
        {
            tag:'Cybersecurity',
            caption:'Penetration Testing, Incident Response and Forensics',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbialYIwdQrwmX7mPOXKLY45VntvmfLq0nMg&s',
            description:'Click the below icon to view my certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/RL53EAQ4MBKL', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Programming',
            caption:'ReactJS',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqSwXQE9onxwY__FyuOMjYKoM8AaCukPcDQ&s',
            description:'Certification of React Basics. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/certificate/BZ4SLBEAUCBL', icon: <WorkspacePremiumIcon/> }
            ]

        },

        {
            tag:'Cloud Computing',
            caption:'Cloud Practitioner Essentials',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcUZNRONjFQplFMKLMepyQbPnhy7TfkijKg&s',
            description:'Certification of AWS Cloud Practitioner Essentials. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/records/RLC8YSM2A8Z4', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Cybersecurity',
            caption:'Splunk Search Expert',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KzkI_9sBiquysZLoAUWBbl2OzSz-nLefJw&s',
            description:'Certification of Splunk Search Expert 101 and 102. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/HWHTRRA85VTL', icon: <ArrowOutwardIcon/> },
                { link:'https://www.coursera.org/account/accomplishments/verify/J2G6WTKBR54M', icon: <ArrowOutwardIcon/> }
            ]

        },
        {
            tag:'Programming',
            caption:'Python',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2To8E0k0NeOfRqgWOwPje8tHwNtQOStw2w&s',
            description:'Certification of Python programming Language. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/9MFATTDDMKUP', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Cybersecurity',
            caption:'Google Cybersecurity',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPr_Z_BpBa8C3s7rBZdRwFKVZOHqRYUbxQQ&s',
            description:'Certification of Google Cybersecurity. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/professional-cert/35VA53WRT4RD', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Cloud Computing',
            caption:'Intro to Networking & Cloud Computing',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNm_7GeTnmI-9U_69QM-3YEQppAS0ogeaPA&s',
            description:'Microsoft Certification of Introduction to Networking and Cloud Computing. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/YDKWU8QDVEZB', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Programming',
            caption:'HTML and CSS in depth',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQEF2XXwt44laODjvpEpvgUlajKbkdmBeEw&s',
            description:'Meta Certification of HTML and CSS in depth. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/AJHEVBHTP3KK', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Cybersecurity',
            caption:'Ethical Hacking Essentials (EHE)',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJzIuEgFdruC3TFpZeYT4FYL4foBbqg0DuQ&s',
            description:'EC Council Certification of Ethical Hacking Essentials (EHE). Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/9YM2DW2RNCQF', icon: <WorkspacePremiumIcon/> }
            ]

        },
        {
            tag:'Cloud Computing',
            caption:'DevOps on AWS',
            image:'https://imageio.forbes.com/specials-images/imageserve/60f1e792c7e89f933811814c/DevOps-concept/960x0.jpg?format=jpg&width=960',
            description:'Certification: "DevOps on AWS: Code, Build, and Test". Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/verify/PE8Q3YK3E372', icon: <WorkspacePremiumIcon/> }
            ]

        },


        {
            tag:'Cybersecurity',
            caption:'Cybersecurity Analyst',
            image:'https://logodix.com/logo/511062.jpg',
            description:'Certification of IBM Cybersecurity Analyst. Click the below icon to view the certificate.',
            links:[
                { link:'https://www.coursera.org/account/accomplishments/specialization/certificate/VC6C4HCYCNC5', icon: <WorkspacePremiumIcon/> }
            ]

        }
        
    ]


}