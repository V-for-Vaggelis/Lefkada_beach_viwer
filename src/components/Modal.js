import React from 'react';
import '../App.css';
import { Modal, Carousel, Image } from 'react-bootstrap';


function ShowModal (props)  {
  return (
    <Modal show={true} onHide={props.closeModal}>
      <Carousel>
        {props.picsToRender.map((pic) => {
          // just a narrow image I want to avoid
          if (pic === "https://farm3.staticflickr.com/2889/33761682621_6d48304f67_z.jpg") {
            return ;
          }
          return (
            <Carousel.Item key={pic}>
              <Image responsive width={"100%"} alt={`A picture of ${props.beach}`} src={pic} />
              <Carousel.Caption id="caption">
                <h3 id="beach-header">{props.beach} Leukada</h3>
                <a id="flickr-link" href="https://www.flickr.com/">www.flickr.com</a>
              </Carousel.Caption>
            </Carousel.Item>
          )}
    )}
    </Carousel>
    </Modal>
  )
}

export default ShowModal
