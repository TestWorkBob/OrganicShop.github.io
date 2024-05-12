import React from 'react';
import Slider from 'react-slick';
import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainPage.css';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import BestSellers from './components/BestSellers';
import SeasonalPicks from './components/SeasonalPicks';
import RecipesTips from './components/RecipesTips';
import NewsletterSignup from './components/NewsletterSignup';
import Testimonials from './components/Testimonials';
import ContactSocial from './components/ContactSocial';

function MainPage() {
  // Настройки для карусели
  const settings = {
    dots: true,
    arrows: true, // This will show the arrows
    prevArrow: <SamplePrevArrow />, // Use your customized previous arrow
    nextArrow: <SampleNextArrow />, // Use your customized next arrow
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Enables centered view with partial prev/next slides
    centerPadding: '60px', // Adds padding to either side of the slide
  };

  return (
    <div className="main-page">
      <h2>Featured Products</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="slide">
            <img src="images/image1.jpg" alt="Description" />
            <div className="slide-text">
              <h3>Title or Description for Image 1</h3>
              <p>Here you can add detailed product description or advertising slogan.</p>
            </div>
          </div>
          <div className="slide">
            <img src="images/image2.jpg" alt="Description" />
            <div className="slide-text">
              <h3>Title or Description for Image 2</h3>
              <p>Here you can add detailed product description or advertising slogan.</p>
            </div>
          </div>
          <div className="slide">
            <img src="images/image3.jpg" alt="Description" />
            <div className="slide-text">
              <h3>Title or Description for Image 3</h3>
              <p>Here you can add detailed product description or advertising slogan.</p>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <AboutUs />
      <WhyChooseUs />
      <BestSellers />
      <SeasonalPicks />
      <RecipesTips />
      <NewsletterSignup />
      <Testimonials />
      <ContactSocial />
      {/* You may include more components or sections as needed */}
    </div>
  );
}

export default MainPage;
