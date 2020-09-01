import React, { Component } from 'react';
import PropTypes  from 'prop-types';


export  class  ColoredHeadingOne extends Component  {
 

  static  PropTypes = {

    text:PropTypes.string,
    color:PropTypes.string
  };
render(){
  const {text , color } = this.props

return <h1 style = {{color }}>
  {text}
  
</h1>;


}

}

export  class  ColoredHeadingTwo extends Component  {
 

  static  PropTypes = {

    text:PropTypes.string,
    color:PropTypes.string
  };
render(){
  const {text , color } = this.props

return <h1 style = {{color }}>
  {text}
  
</h1>;


}

}
