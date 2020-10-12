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

/*

import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import * as matchActions from "../../../redux/actions/matchActions";
import UpdateMatch from "../updateMatch/UpdateMatch";

const ShowCoupon = ({ matchs, getMatchs, deleteMatch }) => {
  useEffect(() => {
    getMatchs();
  }, []);

  const handleDelete = (id) => {
    deleteMatch(id);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [matchId, setMatchId] = React.useState("");
  return (
    <div>
      <div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">League</th>
                <th scope="col">Date</th>
                <th scope="col">FirstTeam</th>
                <th scope="col">SecondTeam</th>
                <th scope="col">Guess</th>
                <th scope="col">Rate</th>
                <th scope="col">Comment</th>
                <th scope="col">Match State</th>
                <th scope="col">CouponState</th>
                <th scope="col">CouponComment</th>
                <th scope="col">CouponRate</th>
                <th scope="col">AddedBy</th>
                <th scope="col">CouponDate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {matchs.map((item, index) => (
                <Fragment key={item._id}>
                  <tr>
                    {item.Coupon.map((td) => (
                      <Fragment key={td._id}>
                        <td>{td.League}</td>
                        <td>{td.Date}</td>
                        <td>{td.FirstTeam}</td>
                        <td>{td.SecondTeam}</td>
                        <td>{td.Guess}</td>
                        <td>{td.Rate}</td>
                        <td>{td.Comment}</td>
                        <td>{td.MatchState}</td>
                      </Fragment>
                    ))}
                    <td>{item.CouponState}</td>
                    <td>{item.CouponComment}</td>
                    <td>{item.CouponRate}</td>
                    <td>{item.AddedBy}</td>
                    <td>{item.CouponDate}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setModalShow(true);
                          setMatchId(item._id);
                        }}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalShow ? (
        <UpdateMatch
          show={modalShow}
          onHide={() => setModalShow(false)}
          matchid={matchId}
        ></UpdateMatch>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    matchs: state.getMatchReducer.matchs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMatchs: () => dispatch(matchActions.getMatchs()),
    deleteMatch: (matchId) => dispatch(matchActions.deleteMatchs(matchId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCoupon);

















*/
