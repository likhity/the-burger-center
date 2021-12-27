import React from "react";
import PropTypes from "prop-types";
import Reveal from "react-reveal/Reveal";

export default class Image extends React.Component {
  render() {
    return (
      <Reveal effect={this.props.effect}>
        <div>
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={`image ${this.props.className}`}
          />
          {this.props.caption && (
            <span className="image-caption">{this.props.caption}</span>
          )}
        </div>
      </Reveal>
    );
  }
}

Image.defaultProps = {
  effect: "fade-in-up",
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
};
