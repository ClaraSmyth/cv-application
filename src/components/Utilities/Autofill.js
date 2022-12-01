import { faker } from '@faker-js/faker/locale/en_GB';

const autofill = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const location = faker.address.county();

  const firstNameRef1 = faker.name.firstName();
  const lastNameRef1 = faker.name.lastName();

  const firstNameRef2 = faker.name.firstName();
  const lastNameRef2 = faker.name.lastName();

  return {
    page: 1,

    userDetails: {
      firstName: firstName,
      lastName: lastName,
      jobTitle: 'Full Stack Web Developer',
      intro: faker.lorem.paragraph(3),
    },

    contactDetails: {
      location: location,
      phone: '00000000000',
      email: `${firstName + lastName}@email.com`,
      website: `${firstName + lastName}.com`,
      linkedin: firstName + lastName,
    },

    education: {
      qualification1: 'A Levels',
      issuer1: `${location} College`,
      fromDate1: '2006',
      toDate1: '2008',

      qualification2: 'UI / UX Design',
      issuer2: `${location} College`,
      fromDate2: '2008',
      toDate2: '2010',

      qualification3: 'Computer Science BSc',
      issuer3: `University of ${location}`,
      fromDate3: '2010',
      toDate3: '2014',
    },

    experience: {
      jobTitle1: 'Junior Web Developer',
      company1: 'BT',
      fromDate1: '2015',
      toDate1: '2016',
      desc1: faker.lorem.paragraph(3),

      jobTitle2: 'Front End Web Developer',
      company2: 'Amazon',
      fromDate2: '2016',
      toDate2: '2019',
      desc2: faker.lorem.paragraph(3),

      jobTitle3: 'Full Stack Web Developer',
      company3: 'Google',
      fromDate3: '2019',
      toDate3: 'Present',
      desc3: faker.lorem.paragraph(3),
    },

    skills: {
      skill1: 'HTML',
      skill2: 'CSS',
      skill3: 'SASS',
      skill4: 'JavaScript',
      skill5: 'React',
      skill6: 'NextJS',
      skill7: 'NodeJS',
      skill8: 'SQL',
    },

    references: {
      refName1: `${firstNameRef1} ${lastNameRef1}`,
      refPhone1: '00000000000',
      refEmail1: `${firstNameRef1 + lastNameRef1}@email.com`,
      refName2: `${firstNameRef2} ${lastNameRef2}`,
      refPhone2: '00000000000',
      refEmail2: `${firstNameRef2 + lastNameRef2}@email.com`,
    },

    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E",
    imagePosition: { x: 0.5, y: 0.5 },
    imageScale: 1,
    canvas: '',

    mobileClass: 'inactive',
  };
};

export default autofill;
