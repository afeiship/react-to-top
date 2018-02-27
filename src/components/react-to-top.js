import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';


export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    offset: PropTypes.number,
    speed: PropTypes.number,
  };

  static defaultProps = {
    offset: 50,
    speed: 0.8,
    value: false,
    onChange: noop
  };
  /*===properties end===*/

  componentDidMount() {
    this._scrollRes = NxDomEvent.on(window,'scroll', this.checkVisible.bind(this));
  }

  componentWillUnmount(){
    this._scrollRes.destroy();
  }

  scrollTo = e => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.scrollTo);
      window.scrollTo(0, this.props.speed * currentScroll);
    }
  }

  checkVisible() {
    this.props.onChange({
      target:{
        value: window.pageYOffset > parseInt(this.props.offset)
      }
    })
  }

  _onClick = e =>{
    this.scrollTo();
  };

  render(){
    const { className, value, speed, ...props } = this.props;
    return (
      <button data-visible={value} onClick={this._onClick} {...props} className={classNames('react-to-top',className)} />
    );
  }
}
