import React, { Component } from 'react';
import '../App.css';
import { Modal, Carousel, Image } from 'react-bootstrap';


function ShowModal (props)  {
  return (
    <Modal show={true} onHide={props.closeModal}>
      {console.log(props.picsToRender)}
      <Carousel>
        {props.picsToRender.map((pic) => {
          return (
            <Carousel.Item key={pic.url}>
              <Image responsive width={"100%"} alt={pic.alt} src={pic.url} />
              <Carousel.Caption id="caption">
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