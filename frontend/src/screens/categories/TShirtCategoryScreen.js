import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, listProductCategories } from '../../actions/productActions';

function TShirtCategoryScreen(props) {

    const productList = useSelector(state=> state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    return loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        <div>
            <ul className="products">
            {
                products.map(product =>
                    product.category==="T-Shirt" ?
                    <li key={product._id}> 
                        <div className="product">
                            <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"/></Link>
                            <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">Rs {product.price}</div> 
                        </div>
                    </li> : false)
            }
            </ul>
            <nav id="top-footer">
                <div className="to-top">
                    <a href="/">Back to Top  ⬆</a>
                </div>
            </nav>
        </div>
}
export default TShirtCategoryScreen;
