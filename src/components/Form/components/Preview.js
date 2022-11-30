import React, { Component } from 'react';
import { BsGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill, BsGlobe, BsLinkedin } from 'react-icons/bs';

class Preview extends Component {
  addHeader = (obj, name) => {
    if (Object.values(obj).some((value) => value)) {
      return <h2>{name}</h2>;
    }
  };

  addPara = (obj) => {
    if (obj) return <p>{obj}</p>;
  };

  addDate = (obj, obj2) => {
    return (
      <p>
        {obj ? obj : ''}
        {obj && obj2 ? ' - ' : ''}
        {obj2 ? obj2 : ''}
      </p>
    );
  };

  addIcon = (obj, icon) => {
    if (obj) return <div>{icon}</div>;
  };

  render() {
    const { userDetails, contactDetails, education, experience, skills, references, canvas } = this.props.details;
    return (
      <div className="preview-container">
        <div className="preview-sidebar">
          <img className="image-placeholder" src={canvas} alt=""></img>

          <div className="preview-contact">
            {this.addHeader(contactDetails, 'Contact')}
            {this.addIcon(contactDetails.location, <BsGeoAltFill></BsGeoAltFill>)}
            {this.addPara(contactDetails.location)}

            {this.addIcon(contactDetails.phone, <BsFillTelephoneFill></BsFillTelephoneFill>)}
            {this.addPara(contactDetails.phone)}

            {this.addIcon(contactDetails.email, <BsFillEnvelopeFill></BsFillEnvelopeFill>)}
            {this.addPara(contactDetails.email)}

            {this.addIcon(contactDetails.website, <BsGlobe></BsGlobe>)}
            {this.addPara(contactDetails.website)}

            {this.addIcon(contactDetails.linkedin, <BsLinkedin></BsLinkedin>)}
            {this.addPara(contactDetails.linkedin)}
          </div>

          <div className="preview-skills">
            {this.addHeader(skills, 'Skills')}
            {this.addPara(skills.skill1)}
            {this.addPara(skills.skill2)}
            {this.addPara(skills.skill3)}
            {this.addPara(skills.skill4)}
            {this.addPara(skills.skill5)}
            {this.addPara(skills.skill6)}
            {this.addPara(skills.skill7)}
            {this.addPara(skills.skill8)}
          </div>

          <div className="preview-references">
            {this.addHeader(references, 'References')}
            <div>
              {this.addPara(references.refName1)}
              {this.addPara(references.refPhone1)}
              {this.addPara(references.refEmail1)}
            </div>
            <div>
              {this.addPara(references.refName2)}
              {this.addPara(references.refPhone2)}
              {this.addPara(references.refEmail2)}
            </div>
          </div>
        </div>

        <div className="preview-header">
          {this.addPara(userDetails.firstName)}
          {this.addPara(userDetails.lastName)}
          {this.addPara(userDetails.jobTitle)}
        </div>

        <div className="preview-main">
          <div className="preview-intro">
            {this.addHeader(userDetails.intro, 'Introduction')}
            {this.addPara(userDetails.intro)}
          </div>

          <div className="preview-education">
            {this.addHeader(education, 'Education')}
            <div>
              {this.addPara(education.qualification1)}
              {this.addPara(education.issuer1)}
              {this.addDate(education.fromDate1, education.toDate1)}
            </div>
            <div>
              {this.addPara(education.qualification2)}
              {this.addPara(education.issuer2)}
              {this.addDate(education.fromDate2, education.toDate2)}
            </div>
            <div>
              {this.addPara(education.qualification3)}
              {this.addPara(education.issuer3)}
              {this.addDate(education.fromDate3, education.toDate3)}
            </div>
          </div>

          <div className="preview-experience">
            {this.addHeader(experience, 'Experience')}
            <div>
              {this.addPara(experience.company1)}
              {this.addPara(experience.jobTitle1)}
              {this.addDate(experience.fromDate1, experience.toDate1)}
              {this.addPara(experience.desc1)}
            </div>
            <div>
              {this.addPara(experience.company2)}
              {this.addPara(experience.jobTitle2)}
              {this.addDate(experience.fromDate2, experience.toDate2)}
              {this.addPara(experience.desc2)}
            </div>
            <div>
              {this.addPara(experience.company3)}
              {this.addPara(experience.jobTitle3)}
              {this.addDate(experience.fromDate3, experience.toDate3)}
              {this.addPara(experience.desc3)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
