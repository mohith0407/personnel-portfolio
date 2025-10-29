import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Laptop, GraduationCap, School } from 'lucide-react';
import { 
    FaReact, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaNodeJs, 
    FaFigma, 
    FaGitAlt
} from 'react-icons/fa';
import { 
    SiNextdotjs, 
    SiTailwindcss, 
    SiTypescript, 
    SiRedux,
    SiExpress, 
    SiSqlite,  
    SiMongodb, 
    SiApachekafka, 
    SiDocker,  
    SiAmazonwebservices,
    SiCplusplus 
} from 'react-icons/si';
const contactInfo = [
    { icon: FiMail, title: 'Email Me', detail: 'mohithknl@gmail.com', href: 'mailto:mohithknl@gmail.com' },
    { icon: FiPhone, title: 'Call Me', detail: '+91 7396289316', href: 'tel:+91 7396289316' },
    { icon: FiMapPin, title: 'Location', detail: 'Kurnool, Andhra Pradesh, India', href: 'https://www.google.com/maps/place/Kurnool,+Andhra+Pradesh' },
];
const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohith-hanumanthkar-0407raj/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/mohith0407', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://x.com/HMohithraj', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://www.instagram.com/mohith_raj0407', label: 'Instagram' },
];

const education = [
    {
        year: '2021 - 2025',
        icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
        title: 'Bachelor of Technology - Computer Science',
        desc: 'SRM University AP',
    },
    {
        year: '2019 - 2021',
        icon: <Laptop className="w-6 h-6 text-amber-500" />,
        title: 'Intermediate - MPC',
        desc: 'Narayana Junior College',
    },
    {
        year: '2018 - 2019',
        icon: <School className="w-6 h-6 text-amber-500" />,
        title: 'High School',
        desc: 'Narayana Group Of Schools',
    },
];
const projects_data = [
  {
    number: '01',
    title: 'Doctor Appointment App',
    description: 'A full-stack healthcare platform that allows patients to book, reschedule, and manage appointments with doctors in real time. Features secure authentication, role-based dashboards for doctors and patients, and integrated payment and notification systems for a seamless experience.',
    tags: ['ReactJs', 'Tailwind CSS', 'Azure SQL', 'Azure Functions', 'NodeJs','Express'],
    liveLink: '#',
    githubLink: 'https://github.com/mohith0407/doctor-appointment-using-azurehttps://github.com/mohith0407/doctor-appointment-using-azure',
  },
  {
    number: '02',
    title: 'EduNoww(E-learning)',
    description: 'An interactive LMS that enables students to enroll in courses, while admin can manage content, upload materials, and monitor performance. Built for scalability, accessibility, and smooth content delivery.',
    tags: ['React', 'Redux', 'MongoDB', 'NodeJs','Express'],
    liveLink: 'http://edunoww.onrender.com',
    githubLink: 'https://github.com/mohith0407/EduNoww',
  },
  {
    number: '03',
    title: 'ChatUpp',
    description: 'Built a real-time chat system supporting instant one-to-one messaging. Implemented efficient message delivery across multiple servers.',
    tags: ['Next.js', 'TailwindCSS', 'Sass', 'Websocket','NodeJs','Express'],
    liveLink: '#',
    githubLink: 'https://github.com/mohith0407/ChatUpp',
  },
];

const skills = [
    { name: 'React', icon: FaReact, color: 'text-sky-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-500' },
    { name: 'SQL', icon: SiSqlite, color: 'text-blue-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-800' },
    { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-400' },
    // { name: 'Azure', icon: SiMicrosoftazure, color: 'text-blue-500' },
    { name: 'Kafka', icon: SiApachekafka, color: 'text-gray-900' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
];

export { contactInfo, socialLinks,education,projects_data,skills};