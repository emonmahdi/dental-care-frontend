import React from 'react';

const SectionTitle = ({ subtitle, title, textAlign = "center" }) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlign] || "text-center";

  return (
    <div className={`mb-8 ${alignmentClass}`}>
      <p className="text-primary text-sm md:text-base font-medium uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
