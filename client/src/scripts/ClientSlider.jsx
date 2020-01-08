import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import sterling from '../assets/sterling.png';
import airtel from '../assets/airtel.png';
import kia from '../assets/kia.png';
import indus from '../assets/indus.png';
import ics from '../assets/ics.png';
import monster from '../assets/monster.png';
import reverb from '../assets/reverb.png';
import rolls from '../assets/rolls.png';
import toi from '../assets/toi.png';
import nike from '../assets/nike.png';
import jio from '../assets/jio.png';

// import { image } from "../assets/2.jpg";
import '../styles/ClientSlider.scss';

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
              <img className="image_client" src={sterling} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={airtel} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={kia} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={indus} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={ics} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={monster} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={reverb} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={rolls} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={toi} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={nike} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={jio} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={airtel} alt="" /> <br />
            </div>
          </ItemsCarousel>
        </Wrapper>
      </React.Fragment>
    );
  }
}
