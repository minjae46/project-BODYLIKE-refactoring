import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');
  const categoryId = searchParams.get('cate');

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/list?page=1&pageSize=9`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setTotalProduct(result.count[0]));
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.0.117:3000/product/list?page=${page}&pageSize=9&cate=${categoryId}`,
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(result => setProducts(result.products));
  }, [page, categoryId]);

  const pageNumber = Math.ceil(totalProduct.count / Number(pageSize));
  const pageNumbers = [];
  for (let i = 0; i < pageNumber; i++) {
    pageNumbers.push(i + 1);
  }

  const movePrev = page => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      searchParams.set('page', Number(page) - 1);
      setSearchParams(searchParams);
    }
  };

  const moveNext = page => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      searchParams.set('page', Number(page) + 1);
      setSearchParams(searchParams);
    }
  };

  const movePage = page => {
    if (currentPage !== Number(page)) {
      setCurrentPage(Number(page));
      searchParams.set('page', Number(page));
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <Nav />
      <div className="categoryProduct">
        <div className="wrapper">
          <div className="pagination">
            <div className="productList">
              {products.map(product => {
                return (
                  <Link
                    className="link"
                    key={product.id}
                    to={`/product/${product.id}`}
                  >
                    <ProductCard key={product.id} product={product} />
                  </Link>
                );
              })}
            </div>
            <div className="paginationGroup">
              <button className="prevPage" onClick={() => movePrev(page)}>
                이전
              </button>
              <p className="pageNumbers">
                {pageNumbers.map(page => {
                  return (
                    <button
                      className={
                        !(currentPage === page)
                          ? 'pageNumber'
                          : 'clickedPageNumber'
                      }
                      key={page}
                      onClick={() => movePage(page)}
                      value={page}
                    >
                      {page}
                    </button>
                  );
                })}
              </p>
              <button className="nextPage" onClick={() => moveNext(page)}>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
