import React, { useState } from "react";
import { Camera, Cpu, Network } from "lucide-react";
import client1 from "../assets/images/my client Kim's Residence.jpg";
import client2 from "../assets/images/Kos Royani 2 m19 MB.jpeg";
import client3 from "../assets/images/cove.jpg";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("welcome");

  // Fungsi untuk mengirim data form ke WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const service = formData.get("service");
    const message = formData.get("message");

    const finalMessage = `Name: ${userName}\nEmail: ${userEmail}\nService: ${service}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/6285694719227?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "welcome":
        return (
          <section className="h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-20 transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-30 transform translate-x-10 translate-y-10"></div>
            <h1 className="text-5xl font-extrabold text-white mb-4 z-10 drop-shadow-lg">Welcome to Peritech Solutions</h1>
            <p className="text-lg text-white mb-6 z-10 drop-shadow-md">Empowering Your Technology Needs with Professional Solutions</p>
            <button onClick={() => setActiveTab("contact")} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition z-10">
              Learn More
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 z-10">
              <div className="flex flex-col items-center">
                <Camera className="text-white w-12 h-12 mb-4" />
                <p className="text-white font-semibold">CCTV Installation</p>
              </div>
              <div className="flex flex-col items-center">
                <Cpu className="text-white w-12 h-12 mb-4" />
                <p className="text-white font-semibold">Computer Services</p>
              </div>
              <div className="flex flex-col items-center">
                <Network className="text-white w-12 h-12 mb-4" />
                <p className="text-white font-semibold">Networking</p>
              </div>
            </div>
          </section>
        );
      case "about":
        return (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center">
              <h3 className="text-4xl font-bold mb-6 text-gray-800">About Us</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Peritech Solutions, we deliver top-tier technology services tailored to your needs. Our team is committed to innovation, excellence, and building lasting partnerships based on trust.
              </p>
              {/* Tambahan Visi dan Misi */}
              <div className="mt-10">
                <h4 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h4>
                <p className="text-lg text-gray-600 mb-8">
                  To become the leading provider of innovative technology solutions, empowering businesses and individuals to achieve their goals through reliable, efficient, and cutting-edge services.
                </p>
                <h4 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h4>
                <ul className="text-lg text-gray-600 space-y-4 mb-12">
                  <li>1. Deliver high-quality and customized technology services for every client.</li>
                  <li>2. Build long-term partnerships through trust, professionalism, and innovation.</li>
                  <li>3. Provide solutions that enhance productivity and security for businesses and individuals alike.</li>
                  <li>4. Continuously adapt and grow in line with technological advancements.</li>
                </ul>
              </div>
              {/* Daftar Client */}
              <div className="mt-16">
                <h4 className="text-3xl font-bold text-blue-600 mb-8">Our Clients</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Client 1 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <img src={client1} alt="Client 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <h5 className="text-xl font-bold text-gray-800">Kims Residence</h5>
                    <p className="text-gray-600 text-center">"Providing reliable CCTV installation and maintenance services, along with expert networking solutions to ensure seamless connectivity for small business owners."</p>
                  </div>
                  {/* Client 2 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <img src={client2} alt="Client 2" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <h5 className="text-xl font-bold text-gray-800">Kost Royani 2 19 MB</h5>
                    <p className="text-gray-600 text-center">"Providing reliable CCTV installation and maintenance services, along with expert networking solutions to ensure seamless connectivity for small business owners."</p>
                  </div>
                  {/* Client 3 */}
                  <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <img src={client3} alt="Client 3" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <h5 className="text-xl font-bold text-gray-800">Kosan Cove</h5>
                    <p className="text-gray-600 text-center">Providing reliable CCTV installation and maintenance services, along with expert networking solutions to ensure seamless connectivity for small business owners.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "services":
        return (
          <section className="bg-white py-20">
            <div className="container mx-auto text-center">
              <h3 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-2xl font-bold mb-4 text-blue-600">Service CCTV</h4>
                  <p className="text-gray-600">High-quality CCTV installation and maintenance tailored to secure your environment.</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-2xl font-bold mb-4 text-blue-600">Service Network</h4>
                  <p className="text-gray-600">Innovative networking solutions for seamless and reliable connectivity.</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                  <h4 className="text-2xl font-bold mb-4 text-blue-600">Service Computer</h4>
                  <p className="text-gray-600">Comprehensive computer repair and trusted sales services to meet all your tech needs.</p>
                </div>
              </div>
            </div>
          </section>
        );
      case "contact":
        return (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto text-center">
              <h3 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h3>
              <p className="text-gray-600 mb-8">Have questions? Get in touch with us via WhatsApp!</p>
              <form className="max-w-lg mx-auto" onSubmit={sendToWhatsApp}>
                <input type="text" placeholder="Your Name" name="user_name" className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Your Email" name="user_email" className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <select name="service" className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="CCTV Service">CCTV Service</option>
                  <option value="Networking Service">Networking Service</option>
                  <option value="Computer Service">Computer Service</option>
                </select>
                <textarea placeholder="Your Message" name="message" className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
<<<<<<< HEAD
          {/* Judul/Logo Perusahaan */}
          <h1 className="text-2xl font-bold">Pritech Solutions</h1>
          {/* Navigasi */}
=======
          <h1 className="text-2xl font-bold">Peritech Solutions</h1>
>>>>>>> d3b2367 (Update)
          <nav>
            <ul className="flex flex-col md:flex-row mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8">
              <li>
                <button onClick={() => setActiveTab("welcome")} className={`hover:underline cursor-pointer ${activeTab === "welcome" ? "font-bold underline" : ""}`}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("about")} className={`hover:underline cursor-pointer ${activeTab === "about" ? "font-bold underline" : ""}`}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("services")} className={`hover:underline cursor-pointer ${activeTab === "services" ? "font-bold underline" : ""}`}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("contact")} className={`hover:underline cursor-pointer ${activeTab === "contact" ? "font-bold underline" : ""}`}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow pt-20">{renderContent()}</main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2025 Peritech Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
