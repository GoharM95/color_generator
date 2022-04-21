import React from "react";
import "./SingleColor.css";

class SingleColor extends React.Component {
  state = { alert: false };

  // USAGE
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const { alert } = this.state;

    if (prevState.alert !== alert) {
      this.timeoutId = setTimeout(() => {
        this.setState({ alert: false });
      }, 3000);
    }
  }

  componentWillUnmount() {
    return () => clearTimeout(this.timeoutId);
  }

  /// isn't updating state of alert when I want it to
  handleColorClick = () => {
    const hexValue = `#${this.state.hexColor}`;

    this.setState({ alert: true });
    navigator.clipboard.writeText(hexValue);
  };

  render() {
    const { index, hexColor, rgb, weight, alert } = this.props;
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;

    return (
      <div
        className={`color ${index > 10 && "lightColor"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={this.handleColorClick}
      >
        <p>{weight}%</p>
        <p>{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </div>
    );
  }
}

export default SingleColor;

// import React from "react";
// import { useState, useEffect } from "react";
// import "./SingleColor.css";

// const SingleColor = ({ index, hexColor, rgb, weight }) => {
//   const [alert, setAlert] = useState(false);

//   const bcg = rgb.join(",");
//   const hexValue = `#${hexColor}`;

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setAlert(false);
//     }, 300000);
//     return () => clearTimeout(timeout);
//   }, [alert]);

//   return (
//     <div
//       className={`color ${index > 10 && "lightColor"}`}
//       style={{ backgroundColor: `rgb(${bcg})` }}
//       onClick={() => {
//         setAlert(true);
//         navigator.clipboard.writeText(hexValue);
//       }}
//     >
//       <p>{weight}%</p>
//       <p>{hexValue}</p>
//       {alert && <p className="alert">copied to clipboard</p>}
//     </div>
//   );
// };

// export default SingleColor;
