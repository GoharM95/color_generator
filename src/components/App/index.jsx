// import React from "react";
// import "./App.css";

// import Values from "values.js";
// import SingleColor from "../SingleColor";

// class App extends React.Component {
//   state = { colors: new Values("#f15025").all(10), color: "", error: false };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { color } = this.state;

//     try {
//       let colors = new Values(color).all(10);
//       this.setState({ colors });
//     } catch (error) {
//       this.setState({ error: true });
//     }
//   };

//   render() {
//     const { colors, color, error } = this.state;
//     return (
//       <>
//         <h3>color generator</h3>
//         <div className="form">
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               placeholder="#f15025"
//               value={color}
//               onChange={(e) => this.setState({ color: e.target.value })}
//               className={`${error ? "error" : null} `}
//             />
//             <button>submit</button>
//           </form>
//         </div>
//         <div className="colors">
//           {colors.map((color, index) => (
//             <SingleColor
//               key={index}
//               {...color}
//               index={index}
//               hexColor={color.hex}
//             />
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// export default App;

import React from "react";
import "./App.css";

import Values from "values.js";
import SingleColor from "../SingleColor";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setColors(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <h3>color generator</h3>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null} `}
          />
          <button>submit</button>
        </form>
      </div>
      <div className="colors">
        {colors.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </div>
    </>
  );
};

export default App;
