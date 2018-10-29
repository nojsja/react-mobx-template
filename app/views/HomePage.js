import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';

import StartupPage from './startup/StartupPage';

import { history } from '../App';

// 批量引入所有图片(可以指定所有图片类型)
// const requireContext = require.context('resources/install', true, /^\.\/.*\.(jpg|png)$/);
// const requireContext = require.context('resources/public', true, /.*/);
// requireContext.keys().map(requireContext);

@inject('pub') @observer
class HomePage extends Component {
  static propTypes = {
    pub: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
    this.lastActiveItem = null;
  }

  /* ------------------- react event ------------------- */


  componentDidMount() {

  }

  componentWillUnmount() {

  }

  /* ------------------- page event ------------------- */

  handleItemClick = (ev, { name }) => {
  }

  /* ------------------- page render ------------------- */

  render() {
    const { pub, match } = this.props;
    const { checkPassword } = pub;

    return (
      <div className="container-router">
        HomePage

        <div className={`container-router-right ${rightToggleClass}`}>

          <Route path={`${match.path}startup`} component={StartupPage} />

        </div>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
