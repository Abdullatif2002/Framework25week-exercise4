import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

interface ProductProps {
  id: number;
  imagePath: string;
  name: string;
  price: number;
}

export default function Product({ id, imagePath, name, price }: ProductProps) {
  return (
    <div className={styles.product} key={id} data-testid={`product-${id}`}>
      <img src={imagePath} alt="Placeholder" />
      <div>{name}</div>
      <div>${price}</div>
      <div>
        {/* React Router Link for navigation */}
        <Link to={`/products/${id}`}>View Details</Link>
      </div>
    </div>
  );
}
