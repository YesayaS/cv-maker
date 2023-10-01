import "../templateData";
import { templateData } from "../templateData";

describe("Template data", () => {
  test("basic info", () => {
    const basicInfo = templateData.basicInfo;
    const expectBasicInfo = {
      fullName: "John doe",
      email: "johndoe@mail.com",
      phoneNumber: "1234567890",
    };
    expect(basicInfo).toEqual(expectBasicInfo);
  });
});
