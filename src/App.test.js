import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

describe("App Component", () => {
  let app;
  beforeEach(() => {
    app = setup({
      twitterHref:
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    });
  });
  it("TwitterHref prop should be present in app Component", () => {
    const twitterHref = app.props;
    expect(twitterHref).not.toBeNull();
  });

  it("Should Render 2 buttons", () => {
    const buttons = app.find(".button");
    expect(buttons.length).toBe(2);
  });
});
