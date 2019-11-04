import { Component } from "react";
import React from "react";
import logo from "./Newsfeed.png";
import "./App.css";
// import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      search: ""
    };
  }
  click = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=...")
      .then(res => res.json())
      .then(data => {
        console.log("***my first fetch data***", data);
        this.setState({ news: data.hits });
      });
  };
  onSearch = () => {
    fetch(
      `http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.search}`
    )
      .then(res => res.json())
      .then(data => {
        console.log("***my first fetch data***", data.hits);
        if (data.hits.length !== 0) {
          this.setState({ news: data.hits });
        } else {
          this.setState({ news: [{ title: "No Results" }] });
        }
      });
  };
  handleChange = e => {
    console.log("****this.state****");
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.click}>click here to see list of news</button>
          <p>or serch by author</p>
          <input
            ref="srch"
            onChange={this.handleChange}
            type="search"
            id="search"
            placeholder="Search..."
          />
          <button onClick={this.onSearch}>serch by author</button>
          {this.state.news.map((news, i) => {
            return (
              <div key={i}>
                <div className="hits">
                  {" "}
                  <p className="title">{news.hits}</p>
                </div>

                <div className="title">
                  <a href={news.title} className="App-logo" alt="logo">
                    {news.title}
                  </a>
                </div>

                <div className="created">
                  {" "}
                  <a href={news.created_at} className="App-logo" alt="logo">
                    {news.created_at}
                  </a>
                </div>

                <div className="url">
                  <a href={news.url} className="App-logo" alt="logo">
                    {news.url}
                  </a>
                </div>
                <div className="author">
                  <a href={news.author} className="App-logo" alt="logo">
                    author-> {news.author}
                  </a>
                </div>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
