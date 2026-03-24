import Home from "./Home";
function Product (props) {
var mydata =props.data

    return (
       <>
    
				   <div className="product-section">
			<div className="container">
				<div className="row">

				<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
						<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" className="btn">Explore</a></p>
					</div> 
					
			{
				mydata.map((d,id)=>(
		<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="cart.html">
							<img src={d.Productimage} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">{d.Productname}</h3>
							<strong className="product-price">{d.Productprice}</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
				))
			}
						</div>
			</div>
		</div>
				
					
		
			
       </>
    );
}
export default Product;