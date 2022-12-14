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

  changePreset = (theme) => (e) => {
    e.preventDefault();
    this.props.updateValue('theme', {
      primaryColour: this.themes[theme][0],
      headerColour: this.themes[theme][1],
      sidebarColour: this.themes[theme][2],
      mainColour: this.themes[theme][3],
      baseColour: this.themes[theme][4],
      fontColour: this.themes[theme][5],
    });
  };

  themes = {
    default: ['#804b9b', '#e0d9e3', '#c8c4ca', '#e6e6e6', '#FFFFFF', '#000000'],
    red: ['#b94646', '#e4d7d7', '#cac4c4', '#e6e6e6', '#FFFFFF', '#000000'],
    green: ['#5a9c4a', '#dae4d7', '#c5cac4', '#e6e6e6', '#FFFFFF', '#000000'],
    blue: ['#2f88bc', '#d7e0e4', '#c4c8ca', '#e6e6e6', '#FFFFFF', '#000000'],
    black: ['#000000', '#dedede', '#c7c7c7', '#e6e6e6', '#FFFFFF', '#000000'],
  };

  render() {
    return (
      <form className="form">
        <h2 className="form-title">Theme</h2>

        <h3>Presets</h3>
        <div className="presetTheme-container">
          <button onClick={this.changePreset('default')} style={{ '--clr-three': this.themes.default[0] }}></button>
          <button onClick={this.changePreset('red')} style={{ '--clr-three': this.themes.red[0] }}></button>
          <button onClick={this.changePreset('green')} style={{ '--clr-three': this.themes.green[0] }}></button>
          <button onClick={this.changePreset('blue')} style={{ '--clr-three': this.themes.blue[0] }}></button>
          <button onClick={this.changePreset('black')} style={{ '--clr-three': this.themes.black[0] }}></button>
        </div>

        <h3>Custom</h3>
        <div className="customTheme-container">
          <div>
            <label htmlFor="primaryColourInput">Accent</label>
            <input
              id="primaryColourInput"
              name="primaryColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'primaryColour')}
              value={this.props.details['primaryColour']}
            />
          </div>

          <div>
            <label htmlFor="baseColourInput">Base</label>
            <input
              id="baseColourInput"
              name="baseColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'baseColour')}
              value={this.props.details['baseColour']}
            />
          </div>

          <div>
            <label htmlFor="fontColourInput">Font</label>
            <input
              id="fontColourInput"
              name="fontColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'fontColour')}
              value={this.props.details['fontColour']}
            />
          </div>

          <div>
            <label htmlFor="mainColourInput">Body</label>
            <input
              id="mainColourInput"
              name="mainColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'mainColour')}
              value={this.props.details['mainColour']}
            />
          </div>

          <div>
            <label htmlFor="headerColourInput">Header</label>
            <input
              id="headerColourInput"
              name="headerColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'headerColour')}
              value={this.props.details['headerColour']}
            />
          </div>

          <div>
            <label htmlFor="sidebarColourInput">Sidebar</label>
            <input
              id="sidebarColourInput"
              name="sidebarColourInput"
              type="color"
              onChange={this.props.updateDetails('theme', 'sidebarColour')}
              value={this.props.details['sidebarColour']}
            />
          </div>
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
