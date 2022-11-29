import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';

class Image extends Component {
  onClickSave = (e) => {
    e.preventDefault();
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas();

      this.props.saveCanvas(canvas.toDataURL());
    }
  };

  setEditorRef = (editor) => (this.editor = editor);

  render() {
    return (
      <form className="form">
        <h2 className="form-title">Image</h2>

        <input id="imageInput" name="imageInput" type="file" onChange={this.props.updateImage} />

        <AvatarEditor
          ref={this.setEditorRef}
          image={this.props.details}
          width={250}
          height={250}
          border={0}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
          borderRadius={500}
        />

        <button onClick={this.onClickSave}>Confirm</button>

        <div className="form-nav">
          <button onClick={this.props.prevPage}>Prev</button>
        </div>
      </form>
    );
  }
}

export default Image;
