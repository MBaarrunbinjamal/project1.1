import Home from "./Home";
function Product (props) {
    return (
       <>
    
				
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a className="product-item" href="cart.html">
							<img src={props.Productimage} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">{props.Productname}</h3>
							<strong className="product-price">{props.Productprice}</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
				
					
		
			
       </>
    );
}
export default Product;