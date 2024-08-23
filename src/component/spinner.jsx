import React, { Component } from 'react';
import loading from "../assets/spinner.gif"

export default class spinner extends Component {
  render() {
    return (
        <>
     <div className="text-center">
     <img src={loading} className='spinner' alt="loading" srcset="" width={100} height={100}/>
     </div>
     
      </>
    )
  }
}
