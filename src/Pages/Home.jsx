import React from "react";
import Hero from "../Components/Home-Components/Hero";
import Reviews from "../Components/Home-Components/Reviews";
import WhyChoose from "../Components/Home-Components/WhyChoose";
import OurMenu from "../Components/Home-Components/OurMenu";

import  { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return <h1 className="text-white">Something went wrong _ Error needs to be debugged.!!!</h1>;
    }

    // Render the children components if there is no error
    return this.props.children;
  }
}
const Home = () => {
  return (
    <div>
       <ErrorBoundary>
      <Hero />    
      <WhyChoose />
      <OurMenu />
      <Reviews />
      </ErrorBoundary> 
    </div>
  );
};

export default Home;
