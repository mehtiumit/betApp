import React from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";

const UpdateMatch = ({ ...props }) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Match
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <label htmlFor="league">League</label>
              <input type="text" className="form-control" id="League" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="date">Date</label>
              <input type="date" className="form-control" id="Date" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="FirstTeam">First Team</label>
              <input type="text" className="form-control" id="FirstTeam" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="SecondTeam">Second Team</label>
              <input type="text" className="form-control" id="SecondTeam" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="Rate">Rate</label>
              <input type="text" className="form-control" id="Rate" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="Guess">Guess</label>
              <input type="text" className="form-control" id="Guess" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="Comment">Comment</label>
              <input type="text" className="form-control" id="Comment" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="MatchState">Match State</label>
              <input type="text" className="form-control" id="MatchState" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="CouponState">Coupon State</label>
              <input type="text" className="form-control" id="CouponState" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="CouponComment">C.Comment</label>
              <input type="text" className="form-control" id="CouponComment" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="CouponRate">Coupon Rate</label>
              <input type="text" className="form-control" id="CouponRate" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="AddedBy">Added By</label>
              <input type="text" className="form-control" id="AddedBy" />
            </Col>
            <Col xs={6} md={4}>
              <label htmlFor="AddedBy">
                Gelen id:{props.matchdata.AddedBy}
                {":"}
                Gelen id{props.matchdata.AddedBy}
              </label>
              <input type="text" className="form-control" id="12312" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Update Data
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateMatch;
/*

import React, { Fragment } from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";

const UpdateMatch = ({ ...props }) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Match
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {props.matchdata.map((item) => (
              <Fragment key={item._id}>
                <Col xs={6} md={4}>
                  <label>League</label>
                  <input type="text" className="form-control" />
                </Col>
                <Col xs={6} md={4}>
                  <label>League</label>
                  <input type="text" className="form-control" />
                </Col>
                <Col xs={6} md={4}>
                  <label>League</label>
                  <input type="text" className="form-control" />
                </Col>
              </Fragment>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Update Data
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateMatch;




*/
