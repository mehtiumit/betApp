import React, { useEffect, Fragment } from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
import * as matchActions from "../../../redux/actions/matchActions";
import { connect } from "react-redux";

const UpdateMatch = ({ match, getMatch, postMatch, ...props }) => {
  useEffect(() => {
    getMatch(props.matchid);
  }, []);

  const [postData, setPostData] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
                        className="form-control"
                        name="League"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Date</label>
                      <input
                        type="Date"
                        className="form-control"
                        onChange={handleChange}
                        name="Date"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>First Team</label>
                      <input
                        type="text"
                        className="form-control"
                        name="FirstTeam"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>SecondTeam</label>
                      <input
                        type="text"
                        className="form-control"
                        name="SecondTeam"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Guess</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Guess"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Rate</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="Rate"
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Comment</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Comment"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <label>Match State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="MatchState"
                        onChange={handleChange}
                      />
                    </Col>
                  </Fragment>
                ))}
                <Col xs={6} md={4}>
                  <label>Coupon State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponState"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>C.Comment</label>
                  <input
                    type="text"
                    className="form-control"
                    value={item.CouponComment}
                    onChange={handleChange}
                    name="CouponComment"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Coupon Rate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponRate"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Added By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="AddedBy"
                    defaultValue={match.AddedBy}
                    onChange={handleChange}
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
            console.log("match data", match);
            setPostData(match);
            console.log("Post Data", postData);

            postMatch(props.matchid, postData);
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
    postMatch: (matchId, postData) =>
      dispatch(matchActions.updateMatch(matchId, postData)),
  };
};
const mapStateToProps = (state) => {
  return {
    match: state.getMatchReducer.singleMatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMatch);
