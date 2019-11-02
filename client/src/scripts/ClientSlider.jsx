import React from "react";
import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
// import { image } from "../assets/2.jpg";
import "../styles/ClientSlider.scss";

const noOfItems = 12;
const noOfCards = 3;
const noOfCards1 = 1;
const autoPlayDelay = 1200;
const chevronWidth = 10;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 200px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index}>{index + 1}</SlideItem>
));

export default class ClientSlider extends React.Component {
  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <React.Fragment>
        

        <Wrapper className="onPhone">
          <ItemsCarousel
            gutter={12}
            numberOfCards={noOfCards1}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={this.onChange}
            // rightChevron={<button className="btn btn-sm" >{">"}</button>}
            // leftChevron={<button className="btn btn-sm">{"<"}</button>}
            chevronWidth={chevronWidth}
            outsideChevron
            children={carouselItems}
          >
             <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>
            <div className="carouselCard">
              <img
                className="image_client"
                src={require("../assets/patel.png")}
                alt=""
              />              <br />

            </div>

            
          </ItemsCarousel>
        </Wrapper>
      </React.Fragment>
    );
  }
}
