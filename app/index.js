import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Image from "./components/Image";
import { BsChevronDown } from "react-icons/bs";
import CountUp from "react-countup";

import "./css/App.css";
import { Reveal } from "react-reveal";

import CowSvg from "./assets/cow.svg";
import BurgerBread from "./assets/burger-bread.svg";
import CheeseSvg from "./assets/cheese.svg";
import TomatoSvg from "./assets/tomato.svg";
import LettuceSvg from "./assets/lettuce.svg";
import MouthWateringSvg from "./assets/mouth-watering.svg";
import { InView } from "react-intersection-observer";
// import BurgerSvg from "./assets/burger.svg";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="full-screen-header">
          <Nav />
          <Reveal effect="fade-in-down">
            <h1 className="landing-title__main-title">
              Hand crafted <div className="highlight">artisan made</div>{" "}
              burgers. Each patty grilled to
              <div className="highlight">perfection</div>.
            </h1>
          </Reveal>
          <Reveal effect="fade-in-up">
            <a className="btn landing__learn-more" href="#about">
              Learn More
            </a>
          </Reveal>
          <BsChevronDown color="#fff" size={50} className="down-arrow" />
        </header>
        <section className="section about-us" id="about">
          <Image
            src="https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="San Fransico Restaurant"
            caption="Photo by Brett Sayles from Pexels"
            className="about-us"
          />
          <div className="section-content about-us">
            <Reveal effect="fade-in-down">
              <h2 className="content-title about-us">
                We've been making burgers for San Franscico since 1976.
              </h2>
            </Reveal>
            <Reveal effect="fade-in-left">
              <span className="accent-block"></span>
            </Reveal>
            <Reveal effect="fade-in-up">
              <p>
                When Ronald Bergman founded the establishment 45 years ago,
                we've been the de facto burger joint for the city of SFO.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="section served-count">
          <div className="burgers-served">
            Around
            <Reveal effect="fade-in-up">
              <h2 className="burgers-served-count">
                <CountUp
                  formattingFn={(number) => number.toLocaleString()}
                  start={50431178}
                  end={50599998}
                  duration={60}
                />
              </h2>
            </Reveal>
            Burgers Served Since 1976.
          </div>
          <span className="accent-block-vertical-white-thin"></span>
          <div className="customers-served">
            Over
            <Reveal effect="fade-in-down">
              <h2 className="customers-served-count">
                <CountUp
                  formattingFn={(number) => number.toLocaleString()}
                  start={44999550}
                  end={45000000}
                  duration={60}
                />
              </h2>
            </Reveal>
            Customers Served Since 1976.
          </div>
        </section>
        <section className="section success">
          <div className="section-content success">
            <Reveal effect="fade-in-down">
              <h2 className="content-title">
                Our success lies in our secret chicken and beef patty formulas.
              </h2>
            </Reveal>
            <Reveal effect="fade-in-left">
              <span className="accent-block align-self-right"></span>
            </Reveal>
            <Reveal effect="fade-in-up">
              <p>
                Bergman founded The Burger Center because he wanted to
                revitalize the chicken burger. He worked for 7 years on his
                masterpiece recipe.
              </p>
              <p>
                When the first customers tried it out, they were{" "}
                <span className="highlight">stunned</span>.
              </p>
              <p>
                34 San Franscisco burger joints subsequently went out of
                business.
              </p>
            </Reveal>
          </div>
          <Image
            src="https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="San Franscisco Chicken Burger"
            caption="Photo by Eiliv Aceron from Pexels"
            className="image"
          />
        </section>
        <section className="section meat">
          <Reveal effect="fade-in-up">
            <h2 className="section-title">
              It all starts with how we grow the meat.
            </h2>
          </Reveal>
          <Reveal effect="fade-in-left">
            <span className="accent-block-sm"></span>
          </Reveal>
          <div className="flex">
            <div className="section-content">
              <Reveal effect="fade-in-left">
                <h2>All of our meat is grown fresh and organic.</h2>
              </Reveal>
              <Reveal effect="fade-in-right">
                <h2>
                  Our cows and chickens were given 100% organic feed and forage
                  and allowed to roam freely just as they would in their natural
                  environment.
                </h2>
              </Reveal>
              <p>
                So you'll be tasting the finest meat, how it was meant to be
                tasted.
              </p>
            </div>
            <CowSvg className="cow-svg" />
          </div>
        </section>
        <section className="section bread">
          <Reveal effect="fade-in-up">
            <h2 className="section-title">Then the bread.</h2>
          </Reveal>
          <Reveal effect="fade-in-left">
            <span className="accent-block-sm"></span>
          </Reveal>
          <div className="flex">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`svg-div ${
                    inView ? "burger-bread-animation" : ""
                  }`}
                >
                  <BurgerBread />
                </div>
              )}
            </InView>
            <div className="section-content">
              <Reveal effect="fade-in-left">
                <h2 className="content-title">
                  We have all the breads that your heart could ever desire.
                </h2>
              </Reveal>
              <Reveal effect="fade-in-right">
                <h2 className="content-title">
                  Ciabatta Rolls, Sesame Seeds Buns, Brioche Rolls, etc.
                </h2>
              </Reveal>
              <Reveal effect="fade-in-up">
                <p>We custom make all the breads.</p>
                <p>
                  "The bread is one of the main reasons I love this burger so
                  much."
                </p>
                <p style={{ float: "right", margin: 0 }}>
                  - Jessica Adams, loyal customer
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="section cheese">
          <Reveal effect="fade-in-up">
            <h2 className="section-title">Our cheese is also first class.</h2>
          </Reveal>
          <Reveal effect="fade-in-left">
            <span className="accent-block-sm"></span>
          </Reveal>
          <div className="flex">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`svg-div ${
                    inView ? "burger-bread-animation" : ""
                  }`}
                >
                  <CheeseSvg />
                </div>
              )}
            </InView>
            <div className="section-content">
              <Reveal effect="fade-in-left">
                <h2 className="content-title mb-2">
                  It is 100% organic as well, made from the same, ethically
                  raised cows.
                </h2>
              </Reveal>
              <Reveal effect="fade-in-up">
                <p>"Jessica, stop. The cheese is definitely better."</p>
                <p style={{ float: "right", margin: 0 }}>
                  - Donald Adams, loyal customer
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="section vegetables">
          <Reveal effect="fade-in-up">
            <h2 className="section-title">
              Have you heard about our{" "}
              <span className="highlight">super organic</span> vegetables?
            </h2>
          </Reveal>
          <Reveal effect="fade-in-left">
            <span className="accent-block-sm"></span>
          </Reveal>
          <div className="flex">
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`svg-div ${inView ? "fade-in-left" : ""}`}
                >
                  <TomatoSvg />
                </div>
              )}
            </InView>
            <div className="section-content">
              <Reveal effect="fade-in-left">
                <h2 className="content-title">Our tomatoes? 100% organic.</h2>
              </Reveal>
            </div>
          </div>
          <div className="flex">
            <div className="section-content">
              <Reveal effect="fade-in-left">
                <h2 className="content-title">
                  Oh, and our lettuce? You guessed it. Organic{" "}
                  <span className="highlight">AF</span>.
                </h2>
              </Reveal>
            </div>
            <InView>
              {({ inView, ref, entry }) => (
                <div
                  ref={ref}
                  className={`svg-div ${inView ? "fade-in-right" : ""}`}
                >
                  <LettuceSvg />
                </div>
              )}
            </InView>
          </div>
        </section>
        <section className="section order-now">
          <InView>
            {({ inView, ref, entry }) => (
              <div
                ref={ref}
                className={`svg-div mouth-watering-svg ${
                  inView ? "fade-in-up" : ""
                }`}
              >
                <MouthWateringSvg />
              </div>
            )}
          </InView>
          <Reveal effect="fade-in-up">
            <h2 className="section-title">Is your mouth watering?</h2>
            <h2 className="section-title">Are you rich?</h2>
            <h2 className="section-title">
              If you answered yes to both questions, what are waiting for?
            </h2>
          </Reveal>
          <Reveal effect="fade-in-up">
            <a href="#menu" className="btn btn-large order-btn">
              Order Now!
            </a>
          </Reveal>
        </section>
        <footer className="footer">
          <ul className="footer-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <p>Copyright © {new Date().getFullYear()} The Burger Center, LLC.</p>
        </footer>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
