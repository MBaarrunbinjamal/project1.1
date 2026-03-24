import Product from "./Product";
import Choose from "./Choose";
import Help from "./Help";
import Popular from "./Popular";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
function Home () {
    let list = [
        {
            " Productname":"Nordic Chair" ,"Productprice":"$50.00", "Productimage":"images/product-1.png"
        },
        {
            "Productname":"Kruzo Aero Chair" ,"Productprice":"$78.00", "Productimage":"images/product-2.png"
        },
        {
            "Productname":"Ergonomic Chair", "Productprice":"$43.00" ,"Productimage":"images/product-3.png"
            }
    ]
    return (
       <>
       
        <Product data = {list}/>
            
        
        <Choose/>
        <Help/>
        <Popular/>
        <Testimonial/>
        <Blog/>
       </>
    );
}
export default Home;