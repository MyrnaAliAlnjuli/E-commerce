function Hero (){
    return(
        <>
        
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{width:'100vh',height:'90vh'}} src="https://i.pinimg.com/474x/02/f0/9b/02f09b4dd8e3bb1f44d0c4853e22168a.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  style={{width:'100vh',height:'90vh'}} src="https://i.pinimg.com/474x/0e/b3/96/0eb396371574cb196209eb789e8ac1cc.jpg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img style={{width:'100vh',height:'90vh'}} src="https://i.pinimg.com/474x/13/14/6c/13146c62bf5a9b75a9c2fe21cc90635c.jpg" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
} 
export default Hero;