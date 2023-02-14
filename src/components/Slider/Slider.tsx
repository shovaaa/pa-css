import React from "react";
import styles from './Slider.module.css';
import { SliderData } from './Slider.mock';
import ProductCard from "../ProductCard/ProductCard";

const Slider = () => {
    const onAddToCart = () => {
        const endpoint = "https://api-online.myer.com.au/v2/cart/add";

        fetch(endpoint, {
            credentials: "include",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: '{"orderId":"1110983353","orderItem":[{"orderItemId":"330832782"}],"orderDescription":"1"}',
            mode: "cors"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to push product data");
                }
                console.log("Product data pushed successfully");
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div id="products-other-viewed-slider">
            <p className={styles.title}>Others also viewed</p>
            <div className={styles.cardContainer}>
                {
                    SliderData.map((data) => <ProductCard {...data} onBtnClick={onAddToCart}/> )
                }
            </div>
        </div>
    )
}

export default Slider;