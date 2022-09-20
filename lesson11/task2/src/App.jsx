import React from "react";
import Dialog from "./Dialog.jsx";

class App extends React.Component {
  state = {
    isOpen: false,
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">
          Show dialog
        </button>

        <Dialog isOpen={this.state.isOpen} onClose={this.closeDialog} title="Recommendation">
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
