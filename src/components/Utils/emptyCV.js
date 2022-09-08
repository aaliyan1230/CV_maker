import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/empty_avatar.png";

const exampleCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
  certification: [
    {
      id: uuidv4(),
      name: '',
      source: '',
      date: '',
      link: '',
    },
  ],
  skills: [
    {
      id: uuidv4(),
      name: ''
    }
  ],
  
};

export default exampleCV;
