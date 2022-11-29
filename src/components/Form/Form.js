import React, { Component } from 'react';
import UserDetails from './components/UserDetails';
import ContactDetails from './components/ContactDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import References from './components/References';
import Image from './components/Image';
import Preview from './components/Preview';
import { TransformComponent, TransformWrapper } from '@pronestor/react-zoom-pan-pinch';

class Form extends Component {
  state = {
    page: 1,

    userDetails: {
      firstName: 'Clara',
      lastName: 'Smyth',
      jobTitle: 'Frontend Web Developer',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    },

    contactDetails: {
      location: 'Northern Ireland',
      phone: '00000000000',
      email: 'not-a-real-email@email.com',
      website: 'not-a-real-website.com',
    },

    education: {
      qualification1: 'Computer Science',
      issuer1: 'Random School and College',
      fromDate1: '2004',
      toDate1: '2008',

      qualification2: 'Business Management',
      issuer2: 'University of Random Subjects, UK',
      fromDate2: '2008',
      toDate2: '2012',

      qualification3: 'Multimedia and Creative Technology',
      issuer3: 'University of Random Subjects, UK',
      fromDate3: '2012',
      toDate3: '2016',
    },

    experience: {
      jobTitle1: 'Web and UX Designer',
      company1: 'Random Design Studio LTD.',
      fromDate1: '2016',
      toDate1: '2017',
      desc1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',

      jobTitle2: 'UI UX Designer',
      company2: 'Random Company Name',
      fromDate2: '2017',
      toDate2: '2018',
      desc2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',

      jobTitle3: 'Full Stack Web Developer',
      company3: 'Really Long Pointless Random Company Name',
      fromDate3: '2018',
      toDate3: 'Present',
      desc3:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    },

    skills: {
      skill1: 'Javascript',
      skill2: 'React',
      skill3: 'HTML',
      skill4: 'CSS',
      skill5: 'SASS',
      skill6: 'Jest',
      skill7: 'ESLint',
      skill8: 'Prettier',
    },

    references: {
      refName1: 'John Smith',
      refPhone1: '00000000000',
      refEmail1: 'not-a-real-email@email.com',
      refName2: 'Jane Doe',
      refPhone2: '00000000000',
      refEmail2: 'not-a-real-email@email.com',
    },

    originalImage: 'test',
  };

  // state = {
  //   page: 1,

  //   userDetails: {
  //     firstName: '',
  //     lastName: '',
  //     jobTitle: '',
  //     intro: '',
  //   },

  //   contactDetails: {
  //     location: '',
  //     phone: '',
  //     email: '',
  //     website: '',
  //   },

  //   education: {
  //     qualification1: '',
  //     issuer1: '',
  //     fromDate1: '',
  //     toDate1: '',

  //     qualification2: '',
  //     issuer2: '',
  //     fromDate2: '',
  //     toDate2: '',

  //     qualification3: '',
  //     issuer3: '',
  //     fromDate3: '',
  //     toDate3: '',
  //   },

  //   experience: {
  //     jobTitle1: '',
  //     company1: '',
  //     fromDate1: '',
  //     toDate1: '',
  //     desc1: '',

  //     jobTitle2: '',
  //     company2: '',
  //     fromDate2: '',
  //     toDate2: '',
  //     desc2: '',

  //     jobTitle3: '',
  //     company3: '',
  //     fromDate3: '',
  //     toDate3: '',
  //     desc3: '',
  //   },

  //   skills: {
  //     skill1: '',
  //     skill2: '',
  //     skill3: '',
  //     skill4: '',
  //     skill5: '',
  //     skill6: '',
  //     skill7: '',
  //     skill8: '',
  //   },

  //   references: {
  //     refName1: '',
  //     refPhone1: '',
  //     refEmail1: '',
  //     refName2: '',
  //     refPhone2: '',
  //     refEmail2: '',
  //   },
  // };

  // Updates the details in state
  updateDetails = (page, input) => (e) => {
    this.setState((prevState) => ({ [page]: { ...prevState[page], [input]: e.target.value } }));
  };

  // Updates form to next page
  nextPage = (e) => {
    e.preventDefault();
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  // Updates form to previous page
  prevPage = (e) => {
    e.preventDefault();
    const { page } = this.state;
    this.setState({ page: page - 1 });
  };

  // Gets default scale for the transform component
  getScale = () => {
    const width = (1 / 700) * (window.innerWidth - 32);
    const height = (1 / 989.8) * (window.innerHeight - 32);
    return Math.min(width, height);
  };

  // Updates image in state
  updateImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Saves the image as a canvas
  saveCanvas = (canvas) => {
    this.setState({ canvas: canvas });
  };

  render() {
    const details = { ...this.state };
    const { page } = this.state;

    switch (page) {
      default:
        return (
          <div className="form-container">
            <UserDetails details={details.userDetails} updateDetails={this.updateDetails} nextPage={this.nextPage} />

            <TransformWrapper initialScale={this.getScale()} minScale={0.3} maxScale={2} centerOnInit>
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 2:
        return (
          <div className="form-container">
            <ContactDetails
              details={details.contactDetails}
              updateDetails={this.updateDetails}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 3:
        return (
          <div className="form-container">
            <Education
              details={details.education}
              updateDetails={this.updateDetails}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 4:
        return (
          <div className="form-container">
            <Experience
              details={details.experience}
              updateDetails={this.updateDetails}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 5:
        return (
          <div className="form-container">
            <Skills
              details={details.skills}
              updateDetails={this.updateDetails}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 6:
        return (
          <div className="form-container">
            <References
              details={details.references}
              updateDetails={this.updateDetails}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
      case 7:
        return (
          <div className="form-container">
            <Image
              details={details.image}
              updateImage={this.updateImage}
              saveCanvas={this.saveCanvas}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />

            <TransformWrapper
              className="transform-container"
              initialScale={this.getScale()}
              minScale={0.3}
              maxScale={2}
              centerOnInit
            >
              <TransformComponent wrapperClass="transform-wrapper">
                <Preview details={details} />
              </TransformComponent>
            </TransformWrapper>
          </div>
        );
    }
  }
}

export default Form;
