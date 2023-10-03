import uniqid from "uniqid";

export const templateData = {
  basic: {
    name: "John doe",
    email: "johndoe@mail.com",
    phoneNumber: "1234567890",
  },
  education: {
    degree: "Bachelor of Science",
    school: "London University",
    description: "description here",
    startDate: "09/2021",
    endDate: "09/2022",
    id: uniqid(),
  },
  experience: {
    companyName: "Example Inc",
    jobTitle: "Engineer",
    description: "description here",
    startDate: "09/2022",
    endDate: "current",
    id: uniqid(),
  },
};
