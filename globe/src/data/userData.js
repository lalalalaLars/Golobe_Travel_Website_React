import {
  profile_cover1,
  profile_cover2,
  profile_pic1,
  profile_pic2,
  visa,
} from "../assets";

const userData = [
  {
    id: 1,
    profilePicture: profile_pic1,
    cover: profile_cover1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password1",
    phoneNumber: "+45 12342255",
    address: "Street, City, Country",
    dateOfBirth: "05-06-1985",
    paymentMethod: [
      {
        accountNumber: "2345 9481 7431",
        regNumber: "3510",
        validDate: "05/27",
        brand: visa,
      },
    ],
  },
  {
    id: 2,
    profilePicture: profile_pic2,
    cover: profile_cover2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password2",
    phoneNumber: "+45 98765432",
    address: "123 Main St, Town, Country",
    dateOfBirth: "02-04-1972",
    paymentMethod: [
      {
        accountNumber: "1445 9185 9511",
        regNumber: "4115",
        validDate: "01/27",
        brand: visa,
      },
    ],
  },
];

export default userData;
