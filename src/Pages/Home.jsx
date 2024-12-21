import React from "react";
import { Link } from "react-router-dom";
import SaleImage from "../assets/Sales.jpg";
import Book from "../assets/Books.jpg";
function HomePage() {
  return (
    <div className="w-auto h-auto bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${SaleImage})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome to Ecommerce</h1>
            <p className="py-6 text-lg">
              Discover the best deals on amazing products. Shop the latest
              trends and enjoy exclusive offers.
            </p>
            <Link to="/shop" className="btn btn-primary text-xl">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12 bg-gray-800">
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-48"
                src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww"
                alt="Category 1"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Electronics</h2>
              <Link to="/shop/electronics" className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-48"
                src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?cs=srgb&dl=pexels-kowalievska-1126993.jpg&fm=jpg"
                alt="Category 2"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Fashion</h2>
              <Link to="/shop/fashion" className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-48"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH1z_rbyDfehoCLE11XW7OlKbXG8dUMT3Eg&s"
                alt="Category 3"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Home Appliances</h2>
              <Link to="/shop/home-appliances" className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-48" src={Book} alt="Category 4" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Books</h2>
              <Link to="/shop/books" className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-12 bg-gray-700">
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {/* Product Card */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full  h-60"
                src="https://iplanet.one/cdn/shop/files/iPhone_14_Plus_Blue_PDP_Image_Position-1A__WWEN_20fc3205-e675-4d4e-88d8-8cb06e5ccded.jpg?v=1691140387"
                alt="Product 1"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">
                Apple iPhone 14
                Plus 
              </h2>
              <p className="text-gray-500">$999.99</p>
              <Link to="/product/1" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full  h-60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuLO9ZCWyfFc8PXQIvuTsesybJ-n8IGr0Uw&s" alt="Product 2" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Wireless Headphones</h2>
              <p className="text-gray-500">$79.99</p>
              <Link to="/product/2" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full  h-60" src="https://m.media-amazon.com/images/I/71AFF16jooL._AC_UF1000,1000_QL80_.jpg" alt="Product 3" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Laptop</h2>
              <p className="text-gray-500">$899.99</p>
              <Link to="/product/3" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full  h-60" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=90&crop=false" alt="Product 4" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Smartwatch</h2>
              <p className="text-gray-500">$199.99</p>
              <Link to="/product/4" className="btn btn-primary">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
