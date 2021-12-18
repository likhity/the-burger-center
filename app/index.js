import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Image from "./components/Image";
import { BsChevronDown } from "react-icons/bs";
import CountUp from "react-countup";

import "./css/App.css";
import { Reveal } from "react-reveal";

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
              <h1 className="content-title about-us">
                We've been making burgers for San Franscico since 1976.
              </h1>
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
              <h1 className="burgers-served-count">
                <CountUp
                  formattingFn={(number) => number.toLocaleString()}
                  start={50431178}
                  end={50599998}
                  duration={60}
                />
              </h1>
            </Reveal>
            Burgers Served Since 1976.
          </div>
          <span className="accent-block-vertical-white-thin"></span>
          <div className="customers-served">
            Over
            <Reveal effect="fade-in-down">
              <h1 className="customers-served-count">
                <CountUp
                  formattingFn={(number) => number.toLocaleString()}
                  start={44999550}
                  end={45000000}
                  duration={60}
                />
              </h1>
            </Reveal>
            Customers Served Since 1976.
          </div>
        </section>
        <section className="section success">
          <div className="section-content success">
            <Reveal effect="fade-in-down">
              <h1 className="content-title">
                Our success lies in our secret chicken and beef patty formulas.
              </h1>
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
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
