import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';

import NxSmoothScroll from 'next-smooth-scroll';
import 'next-debounce';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onScrollEnd: PropTypes.func,
    onScroll: PropTypes.func,
    rate: PropTypes.number,
  };

  static defaultProps = {
    rate: 4,
    value: false,
    onChange: noop,
    onScroll: noop,
    onScrollEnd: noop,
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  };

  componentDidMount() {
    const { value } = this.props;
    this._checkVisible = nx.debounce(this.checkVisible, 50, this);
    !value && (
      this._scrollRes = NxDomEvent.on(window, 'scroll', this._checkVisible)
    );
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  componentWillUnmount() {
    this._scrollRes && this._scrollRes.destroy();
  }

  checkVisible(inEvent) {
    const { onScroll, onChange } = this.props;
    const value = window.pageYOffset > 100;
    onScroll(inEvent);
    this.setState({ value }, () => {
      onChange({ target: { value } });
    });
  }

  _onClick = (inEvent) => {
    const { rate, onScrollEnd } = this.props;
    NxSmoothScroll.easeout(0, rate, () => {
      onScrollEnd();
    });
  };

  render() {
    const { className, value, rate, onScroll, onScrollEnd, ...props } = this.props;
    return (
      <button
        data-visible={this.state.value}
        onClick={this._onClick}
        className={classNames('react-to-top', className)}
        {...props}
      />
    );
  }
}
