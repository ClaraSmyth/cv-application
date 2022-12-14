import React, { Component } from 'react';
import UserDetails from './components/UserDetails';
import ContactDetails from './components/ContactDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import References from './components/References';
import Theme from './components/Theme';
import Image from './components/Image';
import Preview from './components/Preview';
import { TransformComponent, TransformWrapper } from '@pronestor/react-zoom-pan-pinch';
import { BsEyeFill } from 'react-icons/bs';
import autofill from '../Utilities/Autofill';

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
      linkedin: '',
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

    theme: {
      primaryColour: '#804b9b',
      headerColour: '#e0d9e3',
      sidebarColour: '#c8c4ca',
      mainColour: '#e6e6e6',
      baseColour: '#FFFFFF',
      fontColour: '#000000',
    },

    image: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
    imagePosition: { x: 0.5, y: 0.5 },
    imageScale: 1,
    canvas: '',

    mobileClass: 'inactive',
  };

  // Updates a value in state
  updateValue = (name, value) => {
    this.setState({ [name]: value });
  };

  // Updates the form details in state
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

  // Autofills all fields in state
  autofillState = (e) => {
    e.preventDefault();
    const data = autofill();
    this.setState(data);
  };

  // Gets default scale for the transform component
  getScale = () => {
    const width = (1 / 1000) * (window.innerWidth - 32);
    const height = (1 / 1414) * (window.innerHeight - 32);
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

  // Updates Mobile class in state
  updateMobileClass = (e) => {
    e.preventDefault();
    const { mobileClass } = this.state;
    this.setState({ mobileClass: mobileClass === 'active' ? 'inactive' : 'active' });
  };

  // Window resize code
  setResizeRef = (resize) => (this.resize = resize);

  resizeWindow = () => {
    if (this.resize) {
      this.resize.centerView(this.getScale());
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  switchPage = () => {
    const details = this.state;
    const { page } = this.state;

    switch (page) {
      default:
        return (
          <UserDetails
            details={details.userDetails}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            autofillState={this.autofillState}
          />
        );
      case 2:
        return (
          <ContactDetails
            details={details.contactDetails}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 3:
        return (
          <Education
            details={details.education}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 4:
        return (
          <Experience
            details={details.experience}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 5:
        return (
          <Skills
            details={details.skills}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 6:
        return (
          <References
            details={details.references}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 7:
        return (
          <Image
            image={details.image}
            imagePosition={details.imagePosition}
            imageScale={details.imageScale}
            updateImage={this.updateImage}
            updateValue={this.updateValue}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 8:
        return (
          <Theme
            details={details.theme}
            updateDetails={this.updateDetails}
            updateValue={this.updateValue}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
    }
  };

  render() {
    const details = this.state;
    return (
      <div className={`form-container ${details.mobileClass}`}>
        {this.switchPage()}

        <TransformWrapper
          ref={this.setResizeRef}
          initialScale={this.getScale()}
          minScale={0.3}
          maxScale={2}
          centerOnInit
        >
          <TransformComponent wrapperClass="transform-wrapper" contentClass="transform-content">
            <Preview details={details} />
          </TransformComponent>
        </TransformWrapper>

        <button className="close-preview" onClick={this.updateMobileClass}>
          Preview <BsEyeFill></BsEyeFill>
        </button>
      </div>
    );
  }
}

export default Form;
