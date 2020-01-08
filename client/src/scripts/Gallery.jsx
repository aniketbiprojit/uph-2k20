import React, { Component } from 'react';
import ImageMasonry from 'react-masonry-component';
import '../styles/Gallery.scss';

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="Gallery1">
        <span className="heading headingGallery  link--kukuri">Gallery</span>
        <div className="GalleryOuter">
          <ImageMasonry
            numCols={3}
            // containerWidth={'680px'}
            animate={true}
            scrollable={true}
          >
            <img
              src="https://images.unsplash.com/photo-1574154894072-18ba0d48321b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1577648884063-1d3d1477b8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1577042816206-2e85c23f2392?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1577648884063-1d3d1477b8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1577648884063-1d3d1477b8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
              className="masonryImage"
            />

            <img
              src="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1574154894072-18ba0d48321b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="masonryImage"
            />
            <img
              src="https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              alt=""
              className="masonryImage"
            />
          </ImageMasonry>
        </div>
      </div>
    );
  }
}

export default Gallery;
