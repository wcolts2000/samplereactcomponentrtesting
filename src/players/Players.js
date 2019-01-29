import React, { Component } from "react";

export default class Players extends Component {
  state = {
    players: [{ id: 1, name: "Pedro Martinez" }, { id: 2, name: "Kai Lopez" }],
    selected: ""
  };

  selectPlayer = player => {
    this.setState({ selected: player.name });
  };

  render() {
    return (
      <>
        <div data-testid="selected-player">{this.state.selected}</div>
        {this.state.players.map(player => (
          <div key={player.id} className="player">
            <div data-testid="title">{player.id}</div>
            <div>{player.name}</div>
            <button
              onClick={() => {
                this.selectPlayer(player);
              }}
            >
              Select
            </button>
          </div>
        ))}
      </>
    );
  }
}
