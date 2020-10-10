import React, { useEffect, Fragment } from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
import * as matchActions from "../../../redux/actions/matchActions";
import axios from "../../../axios/axios";
import { connect } from "react-redux";

const UpdateMatch = ({ match, getMatch, ...props }) => {
  useEffect(() => {
    getMatch(props.matchid);
  }, []);

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
            {match.map((item) => (
              <Fragment key={item._id}>
                {item.Coupon.map((ci) => (
                  <Fragment key={ci._id}>
                    <Col xs={6} md={4}>
                      <label>League</label>
                      <input
                        type="text"
                        defaultValue={ci.League}
                        className="form-control"
                        id="League"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Date</label>
                      <input
                        type="text"
                        defaultValue={ci.Date}
                        className="form-control"
                        id="Date"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>First Team</label>
                      <input
                        type="text"
                        className="form-control"
                        id="FirstTeam"
                        defaultValue={ci.FirstTeam}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>SecondTeam</label>
                      <input
                        type="text"
                        className="form-control"
                        id="SecondTeam"
                        defaultValue={ci.SecondTeam}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Guess</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ci.Guess}
                        id="Guess"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Rate</label>
                      <input
                        type="text"
                        defaultValue={ci.Rate}
                        className="form-control"
                        id="Rate"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Comment</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ci.Comment}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Match State</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={ci.MatchState}
                      />
                    </Col>
                  </Fragment>
                ))}
                <Col xs={6} md={4}>
                  <label>Coupon State</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.CouponState}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>C.Comment</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.CouponComment}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Coupon Rate</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.CouponRate}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Coupon State</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.AddedBy}
                  />
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
        <Button
          variant="success"
          onClick={() => {
            console.log(match);
          }}
        >
          Update Data
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMatch: (matchId) => dispatch(matchActions.getMatchById(matchId)),
  };
};
const mapStateToProps = (state) => {
  return {
    match: state.getMatchReducer.singleMatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMatch);