import React from "react";
import { productRelated } from "../../constant/dataProduct";
import ItemProduct from "../../common/ItemProduct";

const RelatedProduct = () => {


    return <div>

        <div style={{ backgroundColor: "white" }} className="related-block">


            <h6>Related Products</h6>
            <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered al
                teration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage.</p>


        </div>

        <div style={{ maxWidth: 1200, position: "sticky" }} className=" flex-block">
            {productRelated?.map((value, key) => {
                return <ItemProduct key={key} dataProduct={value} />
            })}
        </div>



    </div>
}

export default RelatedProduct