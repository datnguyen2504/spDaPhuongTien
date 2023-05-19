import React from 'react'

import { products } from '../../constant/dataProduct';
import ItemProduct from '../../common/ItemProduct';


function ProductPage() {

    return (

        <div className='form-container' style={{ marginTop: -20 }}>
            <div className='homepage-contain'>
                {products?.map((value, key) => {
                    return <ItemProduct key={key} testProps={'nguyen dat'} dataProduct={value} />
                })}
            </div>
        </div>

    )
}

export default ProductPage;
