import Product from "./Product";
import Choose from "./Choose";
import Help from "./Help";
import Popular from "./Popular";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
function Home () {
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
        <Product Productname="Nordic Chair" Productprice="$50.00" Productimage="images/product-1.png" />
              <Product Productname="Kruzo Aero Chair" Productprice="$78.00" Productimage="images/product-2.png" />
                    <Product Productname="Ergonomic Chair" Productprice="$43.00" Productimage="images/product-3.png" />
        	</div>
			</div>
		</div>
        <Choose/>
        <Help/>
        <Popular/>
        <Testimonial/>
        <Blog/>
       </>
    );
}
export default Home;