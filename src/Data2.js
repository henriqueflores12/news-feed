// import { Component } from "react";
// import React from 'rect';
// class Data2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search:""
//     };
//   }

//   onSearch = () => {
//     fetch(
//       `http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.search}`
//     )
//       .then(res => res.json())
//       .then(data => {
//         console.log("***my first fetch data***", data.hits);
//         if(data.hits.length !== 0){
//           this.setState({ news: data.hits });

//         }else{
//           this.setState({ news: [{title: 'No Results'}] });

//         }
//       });
//   };
//   handleChange= (e) =>{
//     console.log("****this.state****")
//       this.setState({search: e.target.value});
//   }
    
//   render() {
//     console.log(this.state);
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img url={} className="App-logo" alt="logo" /> */}
//           {/* <Search /> */}
//           <input ref="srch" onChange={this.handleChange} type="search" id="search" placeholder="Search..." />
         
          
//           <button onClick={this.click}>submit</button>
//           {this.state.news.map((news, i) => {
//             return (
//               <div key={i}>
//                 <p className="author">{news.title}</p>
//                 <a href={news.url} className="App-logo" alt="logo">
//                   {news.url}
//                 </a>
//               </div>
//             );
//           })}
//         </header>
//       </div>
//     );
// }
// }
// export default Data2;            