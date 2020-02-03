import React, { Component } from "react";
import { PdfMultiViewer } from 'react-pdfjs-multi';
import 'react-pdfjs-multi/dist/react-pdfjs-multi.css';
class Events extends Component {
  state = {};
  render() {
    const pdfFiles = [
        'Uphoria2020final.pdf'
      ]; 
    return (
      <div>
      <PdfMultiViewer pdfs={pdfFiles} />
      </div>
    );
  }
}
export default Events;
