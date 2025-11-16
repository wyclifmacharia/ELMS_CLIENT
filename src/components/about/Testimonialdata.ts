import story1 from '../../assets/images/story1.webp';
import story2 from '../../assets/images/story2.webp';

type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
};

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: 'John Doe',
        role: 'HR Manager',
        image: story1,
        content: 'The Employee Leave Management System has made handling leave requests seamless. Approvals, tracking, and managing records are now faster and more accurate.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'Software Engineer',
        image: story2,
        content: 'Applying for leave is now so easy. I can track my requests, view my leave balance, and get updates instantly without needing to contact HR.',
    },
    {
        id: 3,
        name: 'Michael Brown',
        role: 'UI/UX Designer',
        image: story1,
        content: 'I love how clean and intuitive the system is. The dashboard makes it easy to see upcoming leave days and check request status at a glance.',
    },
    {
        id: 4,
        name: 'Emily Davis',
        role: 'QA Analyst',
        image: story2,
        content: 'The ELMS has helped our team stay organized. Tracking approvals and ensuring leave compliance is now a smooth and error-free process.',
    },
    {
        id: 5,
        name: 'David Wilson',
        role: 'Team Lead',
        image: story1,
        content: 'Reviewing and approving leave requests is now effortless. The platform gives a clear overview of team availability, preventing workflow interruptions.',
    },
    {
        id: 6,
        name: 'Sophia Lee',
        role: 'HR Administrator',
        image: story2,
        content: 'Managing employee leave records used to be time-consuming. With ELMS, everything is automated, accessible, and well-organized.',
    },
];
