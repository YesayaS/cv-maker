import uniqid from "uniqid";

export const templateData = {
  basicInfo: {
    name: "John doe",
    email: "johndoe@mail.com",
    phoneNumber: "1234567890",
  },
  educationInfo: [
    {
      degree: "Bachelor of Science",
      school: "London University",
      startDate: "09/2021",
      endDate: "09/2022",
      id: uniqid(),
    },
    // {
    //   degree: "Bachelor of Science",
    //   school: "London University",
    //   startDate: "09/2021",
    //   endDate: "09/2022",
    //   id: uniqid(),
    // },
  ],
  professionalInfo: [
    {
      companyName: "Example Inc",
      jobTitle: "Engineer",
      description: "description here",
      startDate: "09/2022",
      endDate: "current",
      id: uniqid(),
    },
  ],
};
