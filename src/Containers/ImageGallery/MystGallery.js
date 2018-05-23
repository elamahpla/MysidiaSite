import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class MystGallery extends React.Component {
  render() { 
    const images = [
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house015.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house015.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house014.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house014.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house002.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house002.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house005.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house005.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house007.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house007.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house008.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house008.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house009.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house009.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house004.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house004.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house001.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house001.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house011.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house010.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house011.jpg',
        thumbnail: 'https://s3-us-west-2.amazonaws.com/mystassets/mysthousing/house011.jpg'
      }
    ]
 
    return (
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay="true"
        items={images} 
        thumbnailPosition='top'
        slideOnThumbnailHover={true}
      />
    );
  }
}

export default MystGallery;