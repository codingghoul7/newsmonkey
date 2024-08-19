import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  render() {

    


    return (

      <>
      <div className="container my-3">
      <h2>Top-News</h2>
      <div className='row'>
      <div className="col-md-4">
      <Newsitem card_title="cricket" card_des="lorem"/>
      </div>
      <div className="col-md-4">
      <Newsitem card_title="cricket" card_des="lorem"/>
      </div>
       
      <div className="col-md-4">
      <Newsitem card_title="cricket" card_des="lorem"/>
      </div>
      </div>
      
      </div>
      
      </>
    )
  }
}

export default News
