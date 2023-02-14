import React from "react";
import styles from './ProductCard.module.css';

type ProductCardProps = {
    img: string;
    name: string;
    price: {
        totalPrice: string;
        displayPrice: string;
    }
    brand: string;
    onBtnClick: () => void;
}


const ProductCard = ({
    img,
    name,
    price,
    brand,
    onBtnClick
}: ProductCardProps) => {
    return (
        <div className={styles.card}>
        <img className={styles.cardImage} src={img} />
        <div className={styles.cardDetailsContainer}>
            <p className={styles.cardName}><span className={styles.cardBrand}>{brand}</span> <span>{name}</span></p>
            <p className={styles.cardName}><span className={styles.cardTotalPrice}>{price.totalPrice}</span> <span className={styles.cardDisplayPrice}>{price.displayPrice}</span></p>
        </div>
        <button className={styles.cardButton} onClick={() => onBtnClick()}>Add to bag</button>
    </div>
    )
}

export default ProductCard;