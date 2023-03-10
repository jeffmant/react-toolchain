import React, { Component} from "react";
import "./App.css";

const ITEMS = [
  { label: "React", url: "https://reactjs.org/", img: "" },
  { label: "Webpack", url: "https://webpack.js.org/concepts/", img: "https://tinyurl.com/bdf3d3h6" },
  { label: "Babel", url: "https://babeljs.io/docs/", img: "https://tinyurl.com/msdwphkn" }
]

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="Card">
          
          <h3 className="CardTitle">
            React Toolchain
          </h3> 
          
          <hr className="hr" /> 

          <ul className="List">
            {
              ITEMS.map((item, key) => (
                <li key={key} className="ListItem">
                  <a href={item.url} target="_blank">
                    <img src={item.img} alt={`${item.label}`} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;