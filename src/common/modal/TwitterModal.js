import React from 'react';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import { Modal, Button } from "react-bootstrap";
function TwitterModal(props) {
    return (
        <div>
             <Modal
                {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Twitter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="realDonaldTrump"
  options={{height: 400}}
/>
        </Modal.Body>
        <Button className="btn btn-danger" onClick={props.onHide}>
            Close
          </Button>
      </Modal>
        </div>
    );
}

export default TwitterModal;