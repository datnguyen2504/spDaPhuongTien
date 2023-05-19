import React from "react";

import feel from '../../imgs/feel.png'
import cftea from '../../imgs/cftea.png'
import dongdu from '../../imgs/dongdu.jpg'
import gang from '../../imgs/gang.jpg'
import Linhtinh from '../../imgs/Linhtinh.jpg'
import luxury from '../../imgs/luxury.jpg'
import SlideshowGallery from "../../slideshow-gallery";



const Detail = (product) => {
    console.log(product.product[0].slide)

    const collection = [
        { src: product.product[0].slide[0].img, caption: "Caption one" },
        { src: product.product[0].slide[1].img, caption: "Caption two" },
        { src: product.product[0].slide[2].img, caption: "Caption three" },
        { src: product.product[0].slide[3].img, caption: "Caption four" },
        { src: product.product[0].slide[4].img, caption: "Caption five" },
        // { src: luxury, caption: "Caption six" },
    ];

    return (
        <div className="detail-block">
            {/* <img style={{ maxWidth: 500, maxHeight: 400, marginRight: 100, marginLeft: 50 }} src={product.product[0].image}></img> */}

            <div className="detail-slide"  >
                <SlideshowGallery
                    input={collection}
                    ratio={`3:2`}
                    mode={`manual`}
                    className="img-slide"
                />

                {/* <SlideshowGallery
                    input={collection}
                    ratio={`3:2`}
                    mode={`automatic`}
                    timeout={`3000`}
                /> */}

            </div>

            <div className="detail-info">
                <h3>Tên quán: {product.product[0].name} </h3>
                <p>Địa chỉ: {product.product[0].place} </p>
                <p>Số điện thoại: {product.product[0].phone} </p>
                <p>Giờ hoạt động: {product.product[0].time} </p>
                <p>Mô tả: {product.product[0].info} </p>

            </div>

        </div>

    )
}

export default Detail