import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';
import 'next-smooth-scroll';


export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    offset: PropTypes.number,
    rate: PropTypes.number,
  };

  static defaultProps = {
    offset: 50,
    rate: 0.8,
    value: false,
    onChange: noop
  };
  /*===properties end===*/

  componentDidMount() {
    const { value } = this.props;
    !value && (
      this._scrollRes = NxDomEvent.on(window,'scroll', this.checkVisible.bind(this))
    );
  }

  componentWillUnmount(){
    this._scrollRes && this._scrollRes.destroy();
  }

  checkVisible() {
    const { onChange, offset } = this.props;
    onChange({
      target:{
        value: window.pageYOffset > parseInt(offset)
      }
    })
  }

  _onClick = e =>{
    nx.smoothScroll(0,this.props.rate);
  };

  render(){
    const { className, value, rate, offset, ...props } = this.props;
    return (
      <button data-visible={value} onClick={this._onClick} {...props} className={classNames('react-to-top',className)} />
    );
  }
}
