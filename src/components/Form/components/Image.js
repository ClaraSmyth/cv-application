import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';

class Image extends Component {
  handleZoom = (e) => {
    this.props.updateImageInfo('imageScale', e.target.value / 50);
    this.onClickSave();
  };

  handlePositionChange = (position) => {
    this.props.updateImageInfo('imagePosition', position);
    this.onClickSave();
  };

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      // const canvasScaled = this.editor.getImageScaledToCanvas();

      this.props.updateImageInfo('canvas', canvas.toDataURL());
    }
  };

  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <form className="form">
        <h2 className="form-title">Image</h2>

        <AvatarEditor
          ref={this.setEditorRef}
          image={this.props.image}
          width={250}
          height={250}
          border={0}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={this.props.imageScale}
          rotate={0}
          position={this.props.imagePosition}
          borderRadius={500}
          className={'image-editor'}
          onImageReady={this.onClickSave}
          onPositionChange={this.handlePositionChange}
        />

        <div className="slider-container">
          <input className="slider" type="range" min="25" max="100" defaultValue="62" onChange={this.handleZoom} />
        </div>

        <input
          className="image-input"
          id="imageInput"
          name="imageInput"
          type="file"
          onChange={this.props.updateImage}
        />
        <label className="image-label" htmlFor="imageInput">
          Upload
        </label>

        <div className="form-nav">
          <button onClick={this.props.prevPage}>Prev</button>
        </div>
      </form>
    );
  }
}

export default Image;
