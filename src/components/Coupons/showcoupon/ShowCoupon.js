import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as matchActions from "../../../redux/actions/matchActions";
import UpdateMatch from "../updateMatch/UpdateMatch";
class ShowCoupon extends Component {
  state = {
    modalShow: false,
    matchId: "",
    matches: [],
  };
  componentDidMount() {
    this.props.getMatchs();
  }

  handleDelete = (id) => {
    this.props.deleteMatch(id);
  };

  render() {
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
                {this.props.matchs.map((item) => (
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
                          onClick={() => this.handleDelete(item._id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.setState({
                              modalShow: true,
                            });
                            this.setState({ matchId: item._id });
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
        {this.state.modalShow ? (
          <UpdateMatch
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
            matchid={this.state.matchId}
          ></UpdateMatch>
        ) : null}
      </div>
    );
  }
}
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
