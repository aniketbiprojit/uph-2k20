import React, { Component } from 'react';
import Nav from './Nav';
import upper from '../assets/uph.png';
// import upper1 from "../assets/uph1.png"
// import upper3 from '../assets/uph-3.png';
import upper4 from "../assets/uph-4.png"

export default class Upper extends Component {
  render() {
    return (
      <section className="main Upper">
        <Nav />
        <div className="dabba">
          <div className="inner row">
            <div className="dabbaUpper onPc">
              <img className="imageUpper" src={upper} alt="" />
            </div>
            <div className="dabbaUpper1 onPhone">
              <img className="imageUpper1" src={upper4} alt="" />
            </div>
            <div className="scroll col-4">
              <div className="inner onPc">
                <p className="text">
                  Scroll down <br /> to know more
                </p>
              </div>
              <div className="inner onPhone">
                <button className="btn registerPhone "> <a href="https://www.uphoria.co.in/form"><p className="text1">Register</p></a></button>
              </div>
            </div>
            <div className="dates  col-7">
              <div className="light">
                Bennett University's <br /> Cultural Fest{' '}
              </div>
              {/* <br/> */}
              <div className="heavy">
                {' '}
                <div className="up">14-16</div> FEB{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
