import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

class Theme extends Component {
  onSave = (e) => {
    e.preventDefault();
    domtoimage.toBlob(document.getElementById('save-node')).then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'CV.png');
      } else {
        FileSaver.saveAs(blob, 'CV.png');
      }
    });
  };

  changeTheme = (colour) => (e) => {
    e.preventDefault();
    this.props.updateValue('themeColour', colour);
  };

  render() {
    return (
      <form className="form">
        <h2 className="form-title">Theme</h2>

        <label>Presets</label>
        <div className="preset-container">
          <button className="default-theme" onClick={this.changeTheme('default')}></button>
          <button className="red-theme" onClick={this.changeTheme('red')}></button>
          <button className="green-theme" onClick={this.changeTheme('green')}></button>
          <button className="blue-theme" onClick={this.changeTheme('blue')}></button>
          <button className="black-theme" onClick={this.changeTheme('black')}></button>
        </div>

        <div className="form-nav">
          <button onClick={this.props.prevPage}>Prev</button>
          <button onClick={this.onSave}>Save</button>
        </div>
      </form>
    );
  }
}

export default Theme;
