import { v4 as uuidv4 } from 'uuid'
import examplePhoto from '../../assets/gilfoyle.jpg'

const exampleCV = {
  personalInfo: {
    firstName: 'Bertram',
    lastName: 'Gilfoyle',
    title: 'Systems Engineer',
    photo: examplePhoto,
    address: 'Example Street 10',
    phoneNumber: '123456789',
    email: 'bertram@gilfoyle.com',
    description:
    'I’m a Universal Soldier with experience and a strong knowledge of any ever invented programming language. I worked alone and have experience of working in team. My skill are now pretty good but It-industry rapidly changes and I need every year discover new technologies. Although all programming languages have its pros & cons but I see that JS is the future. "Сильное заяление " as in Russia it is said',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Systems Engineer',
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      from: '2016',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Systems Architect',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
    },
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Technology',
      city: 'Oklahoma',
      degree: 'Master',
      subject: 'Computer Architecture',
      from: '2008',
      to: '2010',
    },
    {
      id: uuidv4(),
      universityName: 'University of Design Art',
      city: 'New York',
      degree: 'Bachelor',
      subject: 'Computer Science',
      from: '2005',
      to: '2008',
    },
    
  ],
  certification: [
    {
      id: uuidv4(),
      name: 'MTA-9881-Programming In Rust',
      source: 'Microsoft',
      date: 'June 2018',
      link: '',
    },
    {
      id: uuidv4(),
      name: 'CLD-6969-Cloud Architect',
      source: 'AWS',
      date: 'August 2021',
      link: '',
    },
  ],
  skills: [
    {
      id: uuidv4(),
      name: 'System Architecture'
    },
    {
      id: uuidv4(),
      name: 'FullStack Dev'
    },
  ],
}

export default exampleCV
