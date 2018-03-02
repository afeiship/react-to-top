import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';

import 'next-smooth-scroll';
import 'next-debounce';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    onScrollEnd: PropTypes.func,
    onScroll: PropTypes.func,
    throttle: PropTypes.number,
    offset: PropTypes.number,
    rate: PropTypes.number,
  };

  static defaultProps = {
    offset: 50,
    rate: 0.8,
    value: false,
    throttle: 50,
    onChange: noop,
    onScroll: noop,
    onScrollEnd: noop,
  };
  /*===properties end===*/

  componentDidMount() {
    const { value, throttle } = this.props;
    this._checkVisible = nx.debounce(this.checkVisible, throttle, this);
    !value && (
      this._scrollRes = NxDomEvent.on(window,'scroll', this._checkVisible)
    );
  }

  componentWillUnmount(){
    this._scrollRes && this._scrollRes.destroy();
  }

  checkVisible(inEvent) {
    const { onScroll, onChange, offset } = this.props;
    const target = { value: window.pageYOffset > parseInt(offset) };
    onScroll( inEvent );
    onChange({ target });
  }

  _onClick = e => {
    const { onScrollEnd } = this.props;
    nx.smoothScroll(0, this.props.rate, ()=>{
      onScrollEnd();
    });
  };

  render(){
    const { className, value, rate, offset, throttle,  onScroll, onScrollEnd, ...props } = this.props;
    return (
      <button data-visible={value} onClick={this._onClick} {...props} className={classNames('react-to-top',className)} />
    );
  }
}
