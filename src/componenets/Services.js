import Choose from "./Choose";

import Product from "./Product";
import Testimonial from "./Testimonial";

function Services() {
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
    return (<>
    

<Choose/>
<Product data = {list} />
<Testimonial/>
    </>);
}
export default Services;