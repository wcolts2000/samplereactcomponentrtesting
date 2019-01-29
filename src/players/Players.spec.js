// import "jest-dom/extend-expect";
// import React from "react";
// import { fireEvent, render } from "react-testing-library";
// import Players from "./Players";

// describe("<Players />", () => {
//   it("renders the player name", () => {
//     // [ {id: 1, name: "Pedro Martinez"}]
//     const { getByTestId, debug, container } = render(<Players />);
//     // debug();
//     const title = getByTestId("title");

//     expect(title).toHaveTextContent("1");
//   });

//   describe("Select button", () => {
//     it("should select the player", () => {
//       const { getByText } = render(<Players />);

//       const selected = getByTestId(/selected-player/i);
//       const button = getByText(/select/i);
//       fireEvent.click(button);

//       expect(selected).toHaveTextContent(/pedro/i);
//     });
//   });
// });

// // import App from "../App";

// // describe("Player Component", () => {
// //   it("renders without crashing", () => {
// //     // const div = document.createElement("div");
// //     const { getByText } = render(<App />);
// //     // ReactDOM.render(<App />, div);
// //     // ReactDOM.unmountComponentAtNode(div);

// //     const anchor = getByText(/learn react/i);

// //     // expect(anchor.innerHTML).toBe('Learn React')
// //     expect(anchor).toHaveTextContent(/learn react/i);
// //   });
// // });

import "jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "react-testing-library";
import Players from "./Players";

describe("<Players/>", () => {
  it("renders the player name", () => {
    //[{id: 1, name: 'Petro Martinez'}]
    const { getByTestId, debug, container } = render(<Players />);

    const title = getByTestId("title");

    expect(title).toHaveTextContent("1");
  });

  describe("Select Button", () => {
    it("should select the player", () => {
      const { getByText, getByTestId } = render(<Players />);

      const selected = getByTestId("selected-player");
      const button = getByText(/select/i);
      fireEvent.click(button);

      expect(selected).toHaveTextContent(/pedro martinez/i);
    });
  });
});
