

constructor(){
super();
console.log("This is Raushan Here")

this.state={
  loading:false,
articles:[],
  page: 1
}


}

async componentDidMount(){
    let url=`https://newsapi.org/v2/everything?q=apple&from=2024-03-28&to=2024-03-28&sortBy=popularity&apiKey=8e8d672f09ba45048a86e2482f0efbcd&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles })
}


handlePrevClick= async()=>{


    let url= `https://newsapi.org/v2/everything?q=apple&from=2024-03-28&to=2024-03-28&sortBy=popularity&apiKey=8e8d672f09ba45048a86e2482f0efbcd&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalResults: parsedData.totalResult })

   

    this.setState({
        page: this.state.page - 1
    })
}

handleNextClick= async()=>{

    if(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)){

    }else{

    let url= `https://newsapi.org/v2/everything?q=apple&from=2024-03-28&to=2024-03-28&sortBy=popularity&apiKey=8e8d672f09ba45048a86e2482f0efbcd&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.url);
    this.setState({articles: parsedData.articles })

    this.setState({
        page: this.state.page + 1
    })
}
}


  render() {
    return (
      
      <div className="container my-4">
      <Spinner/>
      <h1>News</h1>
      <div className="row">
     
     {this.state.articles.map((element)=>{
        return(
        <div className="col-md-4" key={element.url}>
        
        <NewsItem title={element.title.length >=45 ? `${element.title.slice(0,45)}... more`: element.title} description={element.description.slice(0,88)} image={element.urlToImage} newsUrl={element.url}/>
        </div>
        
        )
        
     })}
    


      
      </div>
      <div className="container d-flex justify-content-between">
      
      <button type="button" disabled={this.state.page <=1} className="btn btn-dark btn-space-between" onClick={this.handlePrevClick}>Previous</button>
      <button type="button"  disabled={this.state.page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

      </div>
      
      </div>

      
     
    
    )
  }