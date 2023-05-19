import React from "react";
import Detail from "../../components/Details/Detail";
import RelatedProduct from "../../components/Details/RelatedProducts";
import MainLayout from "../../Layouts/MainLayout";
import { useSelector } from "react-redux";


function DetailProductPage() {

    const productList = useSelector(state => state.product.list)
    // console.log(productList)

    return (
        <div className="form-container" >
            <Detail product={productList}></Detail>

        </div>

    )
}

export default DetailProductPage