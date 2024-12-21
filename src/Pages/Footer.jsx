import React from 'react';

function Footer() {
    
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Ecommerce. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#privacy-policy" className="text-gray-400 hover:text-white mx-3">Privacy Policy</a>
          <a href="#terms-of-service" className="text-gray-400 hover:text-white mx-3">Terms of Service</a>
          <a href="#contact-us" className="text-gray-400 hover:text-white mx-3">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
