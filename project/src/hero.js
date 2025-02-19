import React from "react";

function HeroSection() {
  return (
    <section className="flex justify-between items-center px-10 py-20 bg-gray-50">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          Experience Miami Like a Local at Our Homestay
        </h1>
        <p className="text-gray-600 mb-6">
          You will feel right at home during your stay with us.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-teal-500 text-white rounded">
            Book Your Stay
          </button>
          <span className="text-lg font-semibold">(406) 555–0121</span>
        </div>
      </div>
      <img src="https://th.bing.com/th/id/OIP.ZNSThx3lUTRXPBQqk6PVAAHaE9?rs=1&pid=ImgDetMain" alt="Homestay" className="w-1/2 rounded-lg" />
    </section>
  );
}

export default HeroSection;
