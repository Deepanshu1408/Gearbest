import React from "react";
import "../Banner/Banner.css";
import Product from "../Product_Cards/Product";
const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://uidesign.gbtcdn.com/GB/image/5741/en-1920x420.jpg"
        className="bannerImage"
        alt=""
      />
      <div className="heading1">
        <h1 className="heading">Lii 3C Store</h1>
      </div>
      <div className="productBanner">
        <Product
          id="1"
          title="Hair Clipper"
          price={78}
          discounted_Price={36.34}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPraY3vxybWzJbRjdwP5zTyyyDOOIeYcJ7I1GFiua162JAaNWyqeGw5Cj3VEDH7uWBINbAQ&usqp=CAc"
        />
        <Product
          id="2"
          title="Tissot Watch"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdYo_IlIh-i42BCgJ1cz3DYymDgBNZrHO4qhiBjzlMro_wCS-kHsXSt_VPw&usqp=CAc"
        />
        <Product
          id="3"
          title="Apple Iphone 12"
          price={999}
          discounted_Price={950.67}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEaPQmC5XfvsTjRvuIqaDV8vrchd8V8zV8gO71cudCt_D-Nflz-N978aYE3gVzyBXEUyBXf8m&usqp=CAc"
        />

        <Product
          id="4"
          title="Jaquar Perfume"
          price={79.99}
          discounted_Price={37.79}
          rating={5}
          image="https://m.media-amazon.com/images/I/41MwWmjz-QL._AC_SY200_.jpg"
        />
        <Product
          id="5"
          title="Nikon Camera"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYSTL1R-bNcBsneuSm5zKs4ZtIBn6Wkg-oiKVD-h0iyN4MCxicaVvlfe7ag&usqp=CAc"
        />
        <Product
          id="5"
          title="Apple Watch Series 6"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBZK6C1Sesc8tTYThtUevD8s_rnTfi67v9YfyZHwn1V7sSWC8LkCkIugIIZ_3YnP6y1V2vWA&usqp=CAc"
        />
      </div>
      <div className="productBanner">
        <Product
          id="9"
          title="Apple Airpods Pro"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://m.media-amazon.com/images/I/31gtbqaQ1nL._AC_SY200_.jpg"
        />
        <Product
          id="10"
          title=" Thermometer"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15913/134d55a4ad50.jpg_400x400.jpg"
        />
        <Product
          id="11"
          title="Xiomi Earbuds"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6561660415148015616/16000/179104c0a857.jpg_400x400.jpg"
        />
        <Product
          id="12"
          title="Smart Band"
          price={36.99}
          discounted_Price={13.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6561660415148015616/15681/a62d8ed15cf0.jpg_400x400.jpg"
        />
        <Product
          id="13"
          title="Smart Camera"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6561660415148015616/16000/da08731f2371.jpg_400x400.jpg"
        />
        <Product
          id="2"
          title="Router"
          price={29.99}
          discounted_Price={22.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6584863980780195840/16003/5f8e66b645c1.jpg_400x400.jpg"
        />
      </div>
      <div className="heading2">
        <h1 className="heading_2">Niche Alerts Store</h1>
      </div>
      <div className="productBanner2">
        <Product
          id="1"
          title="Hair Clipper"
          price={78}
          discounted_Price={36.34}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPraY3vxybWzJbRjdwP5zTyyyDOOIeYcJ7I1GFiua162JAaNWyqeGw5Cj3VEDH7uWBINbAQ&usqp=CAc"
        />
        <Product
          id="2"
          title="Tissot Watch"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdYo_IlIh-i42BCgJ1cz3DYymDgBNZrHO4qhiBjzlMro_wCS-kHsXSt_VPw&usqp=CAc"
        />
        <Product
          id="3"
          title="Apple Iphone 12"
          price={999}
          discounted_Price={950.67}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEaPQmC5XfvsTjRvuIqaDV8vrchd8V8zV8gO71cudCt_D-Nflz-N978aYE3gVzyBXEUyBXf8m&usqp=CAc"
        />

        <Product
          id="4"
          title="Jaquar Perfume"
          price={79.99}
          discounted_Price={37.79}
          rating={5}
          image="https://m.media-amazon.com/images/I/41MwWmjz-QL._AC_SY200_.jpg"
        />
        <Product
          id="2"
          title="Hand Washer"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://gloimg.gbtcdn.com/storage/item/6584863980780195840/16091/9b60e04fc67d.jpg_400x400.jpg"
        />
        <Product
          id="5"
          title="Go Pro Camera"
          price={79.99}
          discounted_Price={25.79}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8huoRoPXqUreWExMq0-zaDblrvqrwlFF7osoh5wFNCwgLvI_pUNtoNpx6GYfchxpoSMWUQk4j&usqp=CAc"
        />
      </div>
      <div>
        <h1 className="footer">End of the Page</h1>
      </div>
    </div>
  );
};

export default Banner;
