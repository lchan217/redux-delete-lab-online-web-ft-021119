import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'


class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      bands: state.bands
    };
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
