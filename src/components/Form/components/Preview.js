import React, { Component } from 'react';

class Preview extends Component {
  headerCheck = (obj, name) => {
    if (Object.values(obj).some((value) => value)) {
      return <h2>{name}</h2>;
    }
  };

  render() {
    const { userDetails, contactDetails, education, experience, skills, references } = this.props.details;
    return (
      <div className="preview-container">
        <div className="preview-sidebar">
          <div className="image-placeholder"></div>

          <div>
            {this.headerCheck(contactDetails, 'Contact')}
            <p>{contactDetails.location}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.website}</p>
          </div>

          <div className="preview-skills">
            {this.headerCheck(skills, 'Skills')}
            <p>{skills.skill1}</p>
            <p>{skills.skill2}</p>
            <p>{skills.skill3}</p>
            <p>{skills.skill4}</p>
            <p>{skills.skill5}</p>
            <p>{skills.skill6}</p>
            <p>{skills.skill7}</p>
            <p>{skills.skill8}</p>
          </div>

          <div className="preview-references">
            {this.headerCheck(references, 'References')}
            <div>
              <p>{references.refName1}</p>
              <p>{references.refPhone1}</p>
              <p>{references.refEmail1}</p>
            </div>
            <div>
              <p>{references.refName2}</p>
              <p>{references.refPhone2}</p>
              <p>{references.refEmail2}</p>
            </div>
          </div>
        </div>

        <div className="preview-header">
          <p>{userDetails.firstName}</p>
          <p>{userDetails.lastName}</p>
          {userDetails.jobTitle ? <p>{userDetails.jobTitle}</p> : ''}
        </div>

        <div className="preview-main">
          <div className="preview-intro">
            {this.headerCheck(userDetails.intro, 'Introduction')}
            <p>{userDetails.intro}</p>
          </div>

          <div className="preview-education">
            {this.headerCheck(education, 'Education')}
            <div>
              <p>{education.qualification1}</p>
              <p>{education.issuer1}</p>
              <p>
                {education.fromDate1}
                {education.toDate1}
              </p>
            </div>
            <div>
              <p>{education.qualification2}</p>
              <p>{education.issuer2}</p>
              <p>
                {education.fromDate2}
                {education.toDate2}
              </p>
            </div>
            <div>
              <p>{education.qualification3}</p>
              <p>{education.issuer3}</p>
              <p>
                {education.fromDate3}
                {education.toDate3}
              </p>
            </div>
          </div>

          <div className="preview-experience">
            {this.headerCheck(experience, 'Experience')}
            <div>
              <p>{experience.company1}</p>
              <p>{experience.jobTitle1}</p>
              <p>
                {experience.fromDate1}
                {experience.toDate1}
              </p>
              <p>{experience.desc1}</p>
            </div>
            <div>
              <p>{experience.company2}</p>
              <p>{experience.jobTitle2}</p>
              <p>
                {experience.fromDate2}
                {experience.toDate2}
              </p>
              <p>{experience.desc2}</p>
            </div>
            <div>
              <p>{experience.company3}</p>
              <p>{experience.jobTitle3}</p>
              <p>
                {experience.fromDate3}
                {experience.toDate3}
              </p>
              <p>{experience.desc3}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
