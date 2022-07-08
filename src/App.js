import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Slots from "./components/Slots";
import Header from "./layout/Header";
import AddSlots from "./components/AddSlots";
import "./App.css";

class App extends Component {
  //updating book status
  markBooked = (id) => {
    this.setState({
      slots: this.state.slots.map((slot) => {
        if (slot.id === id) {
          slot.booked = !slot.booked;
        }
        return slot;
      }),
    });
  };

  updateName = (name, id) => {
    this.setState({
      slots: this.state.slots.map((slot) => {
        if (slot.id === id) {
          slot.name = name;
          console.log(this.state.slots.name);
        }
        return slot;
      }),
    });
  };
  SlotsItem = (name) => {
    console.log(name);
  };

  render() {
    console.log(this.state.slots);
    return (
      <div className="App">
        <Header />

        <AddSlots />
        <div id="Parking">
          <Slots
            slots={this.state.slots}
            markBooked={this.markBooked}
            updateName={this.updateName}
            SlotsItem={this.SlotsItem}
          />
        </div>
      </div>
    );
  }
  state = {
    slots: [
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },

      {
        id: uuidv4(),
        name: "",
        booked: false,
      },
    ],
  };
}

export default App;
