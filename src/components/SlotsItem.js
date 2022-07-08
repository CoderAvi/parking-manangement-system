import React, { Component } from "react";
import PropTypes from "prop-types";

class SlotsItem extends Component {
  constructor() {
    super();
    this.state = {
      title: "book",
      name: "",
    };
  }

  getStyle = () => {
    return {
      background: this.props.slot.booked ? "Green" : "White",
    };
  };
  onChange = (n) => this.setState({ name: n });
  getName = () => {
    const n = prompt("Enter Your Name");
    this.onChange(n);
    this.props.updateName.bind(this, this.props.slot.id);
  };

  changeText = () => {
    if (!this.props.slot.booked) {
      this.setState({ title: "Booked" });
      this.getName();
    } else {
      this.setState({ title: "Book" });
    }
  };

  render() {
    // const { } = this.props.slot
    return (
      <>
        <div className="Slots">
          <div className="Slot-head">ParkingSlot</div>
          <div className="Line"></div>
          <button
            label
            style={this.getStyle()}
            id="Book-slot"
            onClick={this.changeText}
          >
            <input
              type="checkbox"
              className="Chkbx"
              onChange={this.props.markBooked.bind(this, this.props.slot.id)}
            />
            {this.state.title}
          </button>
          {this.state.name}
        </div>
      </>
    );
  }
}

SlotsItem.propTypes = {
  slot: PropTypes.object.isRequired,
};

export default SlotsItem;
