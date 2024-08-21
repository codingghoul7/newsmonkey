import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Button from 'react-bootstrap/Button';

export class News extends Component {


   
  articles = [
       
    {
       
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Mariella Moon",
        "title": "Oregon's Right to Repair bill is now a law",
        "description": "Oregon Governor Tina Kotek has signed the state's Right to Repair bill into law, and it even comes with a provision that potentially makes it stronger than California's and Minnesota's versions. It's the first to prohibit (PDF) a practice called \"parts pairin…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_995af128-b5ec-4888-baec-f6bc4a40f9bc",
        "urlToImage": null,
        "publishedAt": "2024-03-28T06:49:55Z",
        "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },

    {
       
        "source": {
            "id": null,
            "name": "heise online"
        },
        "author": "Eike Kühl",
        "title": "Sprachmodell MM1: Apples kleiner KI-Moment",
        "description": "Bislang hat Apple bei künstlicher Intelligenz keine großen Schlagzeilen gemacht. Das könnte sich mit neuen Einblicken in die hauseigene Forschung nun ändern.",
        "url": "https://www.heise.de/hintergrund/Sprachmodell-MM1-Apples-kleiner-KI-Moment-9668765.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/3/9/7/4/apple_logo_mj-81216545d880f461.png",
        "publishedAt": "2024-03-28T07:00:00Z",
        "content": "Über Apples Pläne in Sachen künstlicher Intelligenz (KI) gab es zuletzt ebenso viele Gerüchte wie offene Fragen. Bei öffentlichen Auftritten wie der hauseigenen Entwicklerkonferenz WWDC bevorzugte Ap… [+4190 chars]"
    },
   
    {
       
        "source": {
            "id": null,
            "name": "heise online"
        },
        "author": "Frank Schräer",
        "title": "Googles nächte Pixel-Smartphones im Herbst angeblich in drei Display-Größen",
        "description": "Neben Pixel 9 und 9 Pro soll auch ein Pixel 9 Pro XL kommen, die beiden größeren Modelle mit selbem Kameramodul. Auch das äußere Design ändert sich angeblich.",
        "url": "https://www.heise.de/news/Googles-naechte-Pixel-Smartphones-im-Herbst-angeblich-in-drei-Display-Groessen-9669531.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/4/3/9/0/Pixel_8-43a180571811785d.webp",
        "publishedAt": "2024-03-28T03:30:00Z",
        "content": "Im Herbst 2024 wird die nächste Smartphone-Generation von Google erwartet, aber diese soll einige signifikante Änderungen zu den momentan erhältlichen Pixel 8 und Pixel 8 Pro mitbringen. Nicht nur da… [+2992 chars]"
    },
   
    {
       
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Chip Loder)",
        "title": "How to open an Apple Maps URL from a screenshot in macOS",
        "description": "The macOS Photos app uses AI to detect details like addresses in images. Here's how to open the addresses in Apple Maps.Apple MapsIf you've ever browsed maps online in a web browser, such as to use mapping sites like MapQuest, you may have taken screenshots o…",
        "url": "https://appleinsider.com/inside/apple-maps/tips/how-to-open-an-apple-maps-url-from-a-screenshot-in-macos",
        "urlToImage": "https://photos5.appleinsider.com/gallery/59053-120544-lede-maps-1-xl.jpg",
        "publishedAt": "2024-03-28T02:57:41Z",
        "content": "Apple Maps\r\nThe macOS Photos app uses AI to detect details like addresses in images. Here's how to open the addresses in Apple Maps.\r\nIf you've ever browsed maps online in a web browser, such as to u… [+5476 chars]"
    },
   
    {
       
        "source": {
            "id": null,
            "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Christine McKee)",
        "title": "Deals: Apple's M3 MacBook Air (10-core GPU, 16GB RAM, 512GB SSD) drops to $1,329",
        "description": "B&H's exclusive flash deals knock $170 off Apple's new M3 MacBook Air in the popular 10-core GPU, 16GB RAM, 512GB SSD spec, delivering the lowest price on record.To snap up the exclusive $170 discount, shop through this activation link from a desktop or lapto…",
        "url": "https://appleinsider.com/articles/24/03/28/deals-apples-m3-macbook-air-10-core-gpu-16gb-ram-512gb-ssd-drops-to-1329",
        "urlToImage": "https://photos5.appleinsider.com/gallery/59120-120666-m3-macbook-air-exclusive-deals-bh-xl.jpg",
        "publishedAt": "2024-03-28T02:05:36Z",
        "content": "B&amp;H's exclusive flash deals knock $170 off Apple's new M3 MacBook Air in the popular 10-core GPU, 16GB RAM, 512GB SSD spec, delivering the lowest price on record.\r\nTo snap up the exclusive $170 d… [+1817 chars]"
    }]




  constructor(){
    super();
    console.log("Hello I am a constructor from news");
    this.state={
      articles:[],
      loading:false,
      Page:1
    }
    }

async componentDidMount(){
 let url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8e8d672f09ba45048a86e2482f0efbcd";
 let data = await fetch(url);
 let parsedData = await data.json()
 this.setState({
  articles: parsedData.articles,
 })
 console.log(parsedData)

}

handlePreClick(){
console.log("pre")
}


handleNextClick(){
  console.log("next")
}

  render() {

    return (

      <>
      <div className="container my-3">
      <h2>Top-News</h2>


      <div className='row'>

      {this.state.articles.map((e)=>{
        return<div className="col-md-4 my-4" key={e.url}>
      <Newsitem card_title={(e.title).length >= 10? e.title.slice(0,40) : e.title} card_des={(e.description).length >= 10? e.description.slice(0,200): e.description} imgurl={e.urlToImage} newsurl={e.url}/>
      </div>
 
      
  
})}
      
      </div>

      <div className="container d-flex justify-content-between">

      <Button variant="primary" onClick={this.handlePreClick}> &larr;Prev</Button>{' '}
      <Button variant="primary"  onClick={this.handleNextClick}>Next &rarr;</Button>{' '}
      </div>
      
      </div>
   
      
   
      </>
    )
  }
}

export default News
