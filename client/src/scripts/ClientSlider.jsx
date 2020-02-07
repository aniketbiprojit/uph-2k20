import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import brewhouse from '../assets/brewhouse.png';
import campusbloggers from '../assets/campusbloggers.png';
import cornitos from '../assets/cornitos.png';
import dubeat from '../assets/dubeat.png';
import duexpress from '../assets/duexpress.png';
import ed from '../assets/ed.png';
import emoi from '../assets/emoi.png';
import intercell from '../assets/intercell.png';
import microsoft from '../assets/microsoft.png';
import ohcampus from '../assets/ohcampus.png';
import pizzasquare from '../assets/pizzasquare.png';
import theeducationtree from '../assets/theeducationtree.png';

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
              <img className="image_client" src={brewhouse} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={campusbloggers} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={cornitos} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={dubeat} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={duexpress} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={ed} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={emoi} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={intercell} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={microsoft} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={ohcampus} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={pizzasquare} alt="" /> <br />
            </div>
            <div className="carouselCard">
              <img className="image_client" src={theeducationtree} alt="" /> <br />
            </div>
          </ItemsCarousel>
        </Wrapper>
      </React.Fragment>
    );
  }
}
