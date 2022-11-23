import React, { Component } from 'react';

class Preview extends Component {
  render() {
    const { userDetails, contactDetails, education, experience, skills, references } = this.props.details;
    return (
      <div className="preview-container">
        <div className="preview-sidebar">
          <div className="image-placeholder"></div>

          <div>
            <p>{contactDetails.location}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.website}</p>
          </div>

          <div>
            <h2>Skills</h2>
            <p>{skills.skill1}</p>
            <p>{skills.skill2}</p>
            <p>{skills.skill3}</p>
            <p>{skills.skill4}</p>
            <p>{skills.skill5}</p>
            <p>{skills.skill6}</p>
            <p>{skills.skill7}</p>
            <p>{skills.skill8}</p>
          </div>

          <div>
            <h2>References</h2>
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
          <p>{userDetails.jobTitle}</p>
        </div>

        <div className="preview-main">
          <div className="preview-intro">
            <h2>Introduction</h2>
            <p>{userDetails.intro}</p>
          </div>

          <div className="preview-education">
            <h2>Education</h2>
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
            <h2>Experience</h2>
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
