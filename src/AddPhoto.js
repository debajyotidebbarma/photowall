import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const Link = elements.Link.value;
    const description = elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: Link,
    };

    if (Link && description) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
  }

  render() {
    return (
      <div>
        {/* <h1>Photowall</h1> */}
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="Link" />
            <input type="text" placeholder="description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
