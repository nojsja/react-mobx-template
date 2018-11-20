import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { postData } from 'app/utils/request.js';

import './startup.css';

// 批量引入所有图片(可以指定所有图片类型)
// const requireContext = require.context('resources/install', true, /^\.\/.*\.(jpg|png)$/);
// const requireContext = require.context('resources/startup', true, /.*/);
// requireContext.keys().map(requireContext);

@inject('pub') @observer
class StartupPage extends React.Component {
  static propTypes = {
    pub: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    // axios
    //   .post('http://10.0.6.203:3000/cors/test')
    //   .then((response) => {
    //     console.log(response.code);
    //     console.log(response.data);
    //     console.log(response.headers);
    //   })
    //   .catch((error) => {
    //     console.log('axios error: ', error);
    //   });
    postData({}, '/cors/test').then((rsp) => {
      console.log('postData: ', rsp);
    }, (err) => {
      console.log('postData: ', err);
    });
  }

  render() {
    return (
      <div>
        StartupPage
      </div>
    );
  }
}
export default StartupPage;
