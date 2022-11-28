import React, { Component } from 'react';
import UserDetails from './components/UserDetails';
import ContactDetails from './components/ContactDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import References from './components/References';
import Preview from './components/Preview';
import { TransformComponent, TransformWrapper } from '@pronestor/react-zoom-pan-pinch';

class Form extends Component {
  state = {
    page: 1,

    userDetails: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      intro: '',
    },

    contactDetails: {
      location: '',
      phone: '',
      email: '',
      website: '',
    },

    education: {
      qualification1: '',
      issuer1: '',
      fromDate1: '',
      toDate1: '',

      qualification2: '',
      issuer2: '',
      fromDate2: '',
      toDate2: '',

      qualification3: '',
      issuer3: '',
      fromDate3: '',
      toDate3: '',
    },

    experience: {
      jobTitle1: '',
      company1: '',
      fromDate1: '',
      toDate1: '',
      desc1: '',

      jobTitle2: '',
      company2: '',
      fromDate2: '',
      toDate2: '',
      desc2: '',

      jobTitle3: '',
      company3: '',
      fromDate3: '',
      toDate3: '',
      desc3: '',
    },

    skills: {
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      skill6: '',
      skill7: '',
      skill8: '',
    },

    references: {
      refName1: '',
      refPhone1: '',
      refEmail1: '',
      refName2: '',
      refPhone2: '',
      refEmail2: '',
    },
  };

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
    }
  }
}

export default Form;
