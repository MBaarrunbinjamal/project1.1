

function Shop(props) {
var mydata=	props.data
	return (
		<>

			<div className="untree_co-section product-section before-footer-section">
				<div className="container">
					<div className="row">

{
	mydata.map((d,id)=>(

						<div className="col-12 col-md-4 col-lg-3 mb-5">
							<a className="product-item" href="#">
								<img src={d.Productimage} className="img-fluid product-thumbnail" />
								<h3 className="product-title">{d.Productname}</h3>
								<strong className="product-price">{d.Productprice}</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
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
export default Shop;