import React, { useState } from "react";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    alert("Thank you for your review!");
    setFormData({
      name: "",
      service: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm mt-8">
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
        Write a Review
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm text-gray-700">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block mb-1 font-medium">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Choose one</option>
            <option value="Teeth Cleaning">Teeth Cleaning</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Braces Adjustment">Braces Adjustment</option>
            <option value="Dental Checkup">Dental Checkup</option>
            <option value="Tooth Extraction">Tooth Extraction</option>
          </select>
        </div>

        <div>
          <label htmlFor="rating" className="block mb-1 font-medium">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            required
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block mb-1 font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            required
            rows={3}
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Share briefly..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mt-2 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
