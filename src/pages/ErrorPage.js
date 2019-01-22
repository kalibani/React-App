import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../styles/ErrorPage.scss';

class Error404 extends React.Component {
  componentWillMount

  render() {
    const { returnToHome } = this.props;
    return (
      <div className="error-page">
        <h1>Halaman tidak ditemukan!</h1>
        <p>Mohon maaf, halaman yang Anda cari tidak ditemukan.</p>
        <button onClick={returnToHome} type="button" className="btn custom-btn large btn-primary">
        Kembali ke beranda
        </button>
      </div>
    );
  }
}

Error404.propTypes = {
  returnToHome: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  returnToHome: () => (dispatch) => {
    dispatch(push('/'));
  }
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error404);
