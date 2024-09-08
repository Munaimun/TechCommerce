import { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Getting the data from backend
        const { data } = await axios.get('/api/products');
        // Ensure data.products is an array before setting state
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Unexpected data format:', data);
          setProducts([]); // Default to empty array if data.products is not an array
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Ensure products is always an array
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className='text-white'>Latest product</h1>
      <Row>
        {products.length === 0 ? (
          <Col className='text-center'>No products available</Col>
        ) : (
          products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id} className=''>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default HomeScreens;
