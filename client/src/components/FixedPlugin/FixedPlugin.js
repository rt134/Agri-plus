/*eslint-disable*/
// import React, { Component } from "react";
// // nodejs library to set properties for components
// import PropTypes from "prop-types";
// // nodejs library that concatenates classes
// import classnames from "classnames";

// export default function FixedPlugin(props) {
//   const [classes, setClasses] = React.useState("dropdown show");
//   const [bg_checked, setBg_checked] = React.useState(true);
//   const [bgImage, setBgImage] = React.useState(props.bgImage);
//   const handleClick = () => {
//     props.handleFixedClick();
//   };
//   return (
//     <div
//       className={classnames("fixed-plugin", {
//         "rtl-fixed-plugin": props.rtlActive,
//       })}
//     >
//       <div id="fixedPluginClasses" className={props.fixedClasses}>
//         <div onClick={handleClick}>
//           <i className="fa fa-cog fa-2x" />
//         </div>
//         <ul className="dropdown-menu">
//           <li className="header-title">SIDEBAR FILTERS</li>
//           <li className="adjustments-line">
//             <a className="switch-trigger">
//               <div>
//                 <span
//                   className={
//                     props.bgColor === "blue"
//                       ? "badge filter badge-blue active"
//                       : "badge filter badge-blue"
//                   }
//                   data-color="blue"
//                   onClick={() => {
//                     props.handleColorClick("blue");
//                   }}
//                 />
                
//               </div>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// FixedPlugin.propTypes = {
//   bgImage: PropTypes.string,
//   handleFixedClick: PropTypes.func,
//   rtlActive: PropTypes.bool,
//   fixedClasses: PropTypes.string,
//   bgColor: PropTypes.oneOf(["blue"]),
//   handleColorClick: PropTypes.func,
//   handleImageClick: PropTypes.func,
// };
