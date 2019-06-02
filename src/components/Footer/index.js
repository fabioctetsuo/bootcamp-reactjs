import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ count }) => <p>Você tem {count} favoritos</p>;

const mapStateToProps = ({ favorites: { data } }) => ({
  count: data.length,
});

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Footer);
