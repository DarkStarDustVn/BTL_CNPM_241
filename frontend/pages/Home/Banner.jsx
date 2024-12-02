import React from "react";

const Banner = () => {
  return (
    <div className="bg-green-300 p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">SÁCH HAY GIÁ RẺ - TỰU TRƯỜNG VUI VẺ</h2>
      <div className="flex justify-center space-x-4">
        <img
          src="/path/to/banner1.jpg"
          alt="Banner 1"
          className="w-1/4 rounded"
        />
        <img
          src="/path/to/banner2.jpg"
          alt="Banner 2"
          className="w-1/4 rounded"
        />
        <img
          src="/path/to/banner3.jpg"
          alt="Banner 3"
          className="w-1/4 rounded"
        />
      </div>
    </div>
  );
};

export default Banner;