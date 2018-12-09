import React from 'react';
import PropTypes from 'prop-types';

import './homepage.scss';

export default class Homepage extends React.Component {
  static propTypes = {
    content: PropTypes.string,
  }

  static defaultProps = {
    content: 'Hello World!',
  }

  state = {}

  render() {
    const { content } = this.props;
    return (
      <div>
        <span>
          {content}
        </span>
      </div>
    );
  }
}
