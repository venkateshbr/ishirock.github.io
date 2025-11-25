import { Component, OnInit } from '@angular/core';

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}

interface Education {
    degree: string;
    school: string;
    year: string;
}

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    standalone: false
})
export class CvComponent implements OnInit {

    name = 'Venkatesh Ramakrishnaiah';
    title = 'Senior Software Engineer';
    email = 'venkatesh.br@example.com'; // Placeholder
    linkedin = 'linkedin.com/in/venkateshbr';
    location = 'Bengaluru, India';

    summary = `Experienced software engineer with a passion for building scalable web applications. 
  Expertise in Angular, TypeScript, and modern frontend technologies. 
  Proven track record of delivering high-quality software solutions.`;

    skills: string[] = [
        'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
        'Node.js', 'RxJS', 'Git', 'CI/CD', 'Agile Methodologies'
    ];

    experience: Experience[] = [
        {
            role: 'Senior Software Engineer',
            company: 'Tech Company Inc.',
            period: '2020 - Present',
            description: [
                'Led development of key features for the main product platform.',
                'Mentored junior developers and conducted code reviews.',
                'Optimized application performance, reducing load times by 40%.'
            ]
        },
        {
            role: 'Software Engineer',
            company: 'Innovative Solutions Ltd.',
            period: '2017 - 2020',
            description: [
                'Developed responsive web applications using Angular and Material Design.',
                'Collaborated with UX designers to implement pixel-perfect interfaces.',
                'Implemented automated testing strategies using Jasmine and Karma.'
            ]
        }
    ];

    education: Education[] = [
        {
            degree: 'Bachelor of Engineering in Computer Science',
            school: 'Visvesvaraya Technological University',
            year: '2013 - 2017'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
