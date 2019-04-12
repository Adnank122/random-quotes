// @ts-check
import React, { Component } from "react";
import "./App.scss";
import quotes from "./quotes";
import colors from "./colors";

class App extends Component {
  state = {
    color: "",
    quote: {}
  };

  getRandom = collection => {
    const index = Math.floor(Math.random() * (collection.length - 1));
    const value = collection[index];
    return value;
  };

  changeState = cb => {
    const color = this.getRandom(colors);
    const quote = this.getRandom(quotes);

    this.setState(() => {
      return { color, quote };
    }, cb);
  };

  componentDidMount() {
    this.changeState();
  }

  handleClick = () => {
    this.changeState(() => {
      document.body.style.backgroundColor = this.state.color;
    });
  };

  render() {
    const { author, quote } = this.state.quote;
    const styles = {
      color: this.state.color
    };

    return (
      <div id="wrapper" style={styles}>
        <div id="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left" />
            <span id="text">{quote} </span>
            <i className="fa fa-quote-right" />
          </div>
          <div className="quote-author">
            - <span id="author"> {author}</span>
          </div>
          <div className="buttons">
            <a
              className="button"
              style={{ background: this.state.color }}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              href="abc.com"
            >
              <i className="fab fa-twitter" />
            </a>
            <button
              className="button"
              id="new-quote"
              onClick={this.handleClick}
              style={{ color: "#fff", backgroundColor: this.state.color }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
