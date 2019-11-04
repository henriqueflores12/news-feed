class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        news: [],
        search: "",
        Date:"",
        
      };
    }
  
    click = () => {
      fetch(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.search}`
      )
        .then(res => res.json())
        .then(data => {
          console.log("***my first fetch data***", data.hits);
          if(data.hits.length !== 0){
            this.setState({ news: data.hits });
  
          }else{
            this.setState({ news: [{title: 'No Results'}] });
  
          }
        });
    };
  dateClick = () => {
    fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>X,created_at_i<Y`)
  
  .then(res => res.json())
  .then(data => { this.setState((data))
  
  })
  }
    handleChange= (e) =>{
      console.log("****this.state****")
        this.setState({search: e.target.value});
    }
    Date = (e) =>{
      console.log("****this.state****")
        this.setState({search:e.Date.target.value});
    }
  
  
    render() {
      console.log(this.state);
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Search /> */}
            <input ref="srch" onChange={this.handleChange} type="search" id="search" placeholder="Search..." />
           
            
            <button onClick={this.click}>submit</button>
            {this.state.news.map((news, i) => {
              return (
                <div key={i}>
                  <p className="author">{news.title}</p>
                  <a href={news.url} className="App-logo" alt="logo">
                    {news.url}
                  </a>
                </div>
              );
            })}
          </header>
        </div>
      );
    }
  }