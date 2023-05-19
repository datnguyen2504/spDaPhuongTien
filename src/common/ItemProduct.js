import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../action/product";



const ItemProduct = ({ dataProduct }) => {

    const productList = useSelector(state => state.product.list)
    const dispatch = useDispatch();

    const handleClickImg = () => {
        const product = {
            image: dataProduct.image,
            name: dataProduct.name,
            info: dataProduct.description,
            phone: dataProduct.phone,
            place: dataProduct.place,
            time: dataProduct.time,
            slide: dataProduct.slide
        }

        dispatch(getProduct(product))
        console.log(product)

    }

    return (

        <div className="item-block">
            <Link to={"/Detail"}>
                <img onClick={handleClickImg} className="item-img" src={dataProduct.image}></img>

            </Link>

            <div >
                <p> "{dataProduct.name}</p>
            </div>

            <Link to={"/Detail"}>
                <button onClick={handleClickImg} src={dataProduct.image} type='button' className='btn btn-primary'>
                    Xem thông tin
                </button>
            </Link>

        </div>

    )


}

export default ItemProduct