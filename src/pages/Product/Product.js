import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate;

  const { name, thumbnail_image_url, price } = product;

  useEffect(() => {
    fetch(`/data/productData.json`)
      .then(response => response.json())
      .then(result => setProduct(result.data[0]));
  }, [productId]);

  const toBuy = e => {
    e.preventDefault();
    const token = localStorage.getItem('token') || '';

    if (token) {
      fetch(`http://10.58.7.174:3000/product/${productId}`, {
        method: 'POST',
        headers: {
          AUTHORIZATION: token,
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok === true) {
            return navigate('/cart');
          } else {
            alert('로그인이 필요한 기능입니다');
            navigate('/login');
          }
        });
    }
  };

  const goToCart = e => {
    e.preventDefault();
    const token = localStorage.getItem('token') || '';

    if (token) {
      fetch(`http://10.58.7.174:3000/product/${productId}`, {
        method: 'POST',
        headers: {
          AUTHORIZATION: token,
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.ok === true) {
            return navigate('/cart');
          } else {
            alert('로그인이 필요한 기능입니다');
            navigate('/cart');
          }
        });
    }
  };

  return (
    <div className="product">
      <div className="productMargin">
        <div className="productPage">
          <img className="productImg" alt="productImg" src={thumbnail_image_url} />
          <form className="productForm">
            <div className="priceTitle"> {name} </div>
            <div className="price">
              <div className="priceTag"> {price} 원 </div>
              <div className="salePrice"> ({price} * 0.8) 원 </div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceText"> 총 상품 금액 </span>
              <span className="totalPriceNum"> {price} 원 </span>
            </div>

            <div className="btn">
              <button className="buyBtn" onClick={toBuy}>
                바로 구매하기
              </button>
              <button className="cart" onClick={goToCart}>
                장바구니
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
