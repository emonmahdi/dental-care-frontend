// import React from "react";

// const Button = ({ children, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-primary py-3 px-8 text-secondary hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300 ease-in-out cursor-pointer uppercase font-bold text-sm"
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] py-3 px-8 text-white hover:opacity-90 rounded-lg transition-all duration-300 ease-in-out cursor-pointer uppercase font-bold text-sm"
    >
      {children}
    </button>
  );
};

export default Button;
