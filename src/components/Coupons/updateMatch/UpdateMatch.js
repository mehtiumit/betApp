import React, { Fragment, Component } from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
import * as matchActions from "../../../redux/actions/matchActions";
import axios from "../../../axios/axios";
import { connect } from "react-redux";

class UpdateMatch extends Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  state = {};
  async componentDidMount() {
    await axios.get(`/getBetById/${this.props.matchid}`).then((res) => {
      console.log("Single Match", res.data[0].Coupon[0].League);
      this.setState({
        AddedBy: res.data[0].AddedBy,
        CouponRate: res.data[0].CouponRate,
        CouponComment: res.data[0].CouponComment,
        CouponState: res.data[0].CouponState,
        League: res.data[0].Coupon[0].League,
        Date: res.data[0].Coupon[0].Date,
        FirstTeam: res.data[0].Coupon[0].FirstTeam,
        SecondTeam: res.data[0].Coupon[0].SecondTeam,
        Rate: res.data[0].Coupon[0].Rate,
        Guess: res.data[0].Coupon[0].Guess,
        Comment: res.data[0].Coupon[0].Comment,
        State: res.data[0].Coupon[0].State,
        MatchState: res.data[0].Coupon[0].MatchState,
      });
    });
  }
  handleUpdate = () => {
    this.props.postmatch(this.props.matchid, this.state);
    this.props.onHide();
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      League,
      Date,
      FirstTeam,
      SecondTeam,
      Rate,
      MatchState,
      Comment,
      Guess,
      CouponState,
      CouponComment,
      CouponRate,
      AddedBy,
    } = this.state;
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Match
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Fragment>
                <Fragment>
                  <Col xs={6} md={4}>
                    <label>League</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={League}
                      name="League"
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Date</label>
                    <input
                      type="Date"
                      className="form-control"
                      onChange={this.handleChange}
                      defaultValue={Date}
                      name="Date"
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>First Team</label>
                    <input
                      type="text"
                      className="form-control"
                      name="FirstTeam"
                      defaultValue={FirstTeam}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>SecondTeam</label>
                    <input
                      type="text"
                      className="form-control"
                      name="SecondTeam"
                      defaultValue={SecondTeam}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Guess</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Guess"
                      defaultValue={Guess}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Rate</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      name="Rate"
                      defaultValue={Rate}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Comment</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Comment"
                      onChange={this.handleChange}
                      defaultValue={Comment}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <label>Match State</label>
                    <input
                      type="text"
                      className="form-control"
                      name="MatchState"
                      defaultValue={MatchState}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Fragment>
                <Col xs={6} md={4}>
                  <label>Coupon State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponState"
                    defaultValue={CouponState}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>C.Comment</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    defaultValue={CouponComment}
                    name="CouponComment"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Coupon Rate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CouponRate"
                    defaultValue={CouponRate}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <label>Added By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="AddedBy"
                    defaultValue={AddedBy}
                    onChange={this.handleChange}
                  />
                </Col>
              </Fragment>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={() => {
              this.props.onHide();
            }}
          >
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              this.handleUpdate();
            }}
          >
            Update Data
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    postmatch: (matchId, postData) =>
      dispatch(matchActions.updateMatch(matchId, postData)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateMatch);
