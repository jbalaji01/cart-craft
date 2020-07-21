import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './product.reducer';
import { IProduct } from 'app/shared/model/product.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

import { getEntities as getCartEntities } from '../cart-item/cart-item.reducer';
import { ICartItem } from 'app/shared/model/cart-item.model';
import { CartItem } from '../cart-item/cart-item';


export interface ICartItemProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}



export interface IProductProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Product = (props: IProductProps) => {
  useEffect(() => {
    props.getEntities();
   
  }, []);
  

  const { productList, match, loading } = props;

    
   
 function getQuantityOfProduct(product) {
        return 777;
    }


  return (
    <div>
    
        
        
    <div className="table-responsive">
    <Table responsive>
        <tbody>
        <tr>
        <td>
      <h2 id="product-heading">
        Products
      </h2>




      
      <div className="table-responsive">
        {productList && productList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {productList.map((product, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    
                      {product.id}
                    
                  </td>
                  <td>
                    <span style={{float:"left"}}>
                        <FontAwesomeIcon icon={product.image as IconProp} size="2x"  />
                    
                        &nbsp;&nbsp;&nbsp;
                        <span style={{float:"right"}}>
                            <h3>{product.productName}</h3>
                            
                            {product.description}
                        </span>
                    </span>
                  </td>
                  <td>{product.price}</td>
                  
                  <td>
                    {getQuantityOfProduct(product) <= 0 &&
                    <button onClick={() => this.props.addToCart(product, i)} 
                        className="x-small outlined" data-testid="btn-item-add">
                        Add To Cart
                    </button>
                    } 
                    
                    
                    {getQuantityOfProduct(product) > 0 &&
                    <div className="input-group mb-3">
                    <button onClick={() => this.props.updateQuantity(product, -1)}
                        className="x-small icon-only outlined"
                        data-testid="btn-quantity-subtract">
                      <i className="material-icons">-</i>
                    </button>

                    <input  value={getQuantityOfProduct(product)}
                       disabled style={{width:"24px"}} data-testid="cart-quantity"/>

                    <button onClick={() => this.props.updateQuantity(product, 1)}
                         className="x-small icon-only outlined"
                         data-testid="btn-quantity-add">
                       <i className="material-icons">+</i>
                     </button>
                     </div>
                     }
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Products found</div>
        )}
      </div>
      </td>
      <td>
      
        
        
        <div>
        <span >
        <h2 style={{float:"left"}}>Cart</h2>
        
        <FontAwesomeIcon icon="shopping-cart"  size="4x"/>
        
        
        </span>
        
        
        <h2>Total $100  </h2>
        
        
        </div>
      
      
      </td>
      </tr>
      </tbody>
      </Table>
      </div>
    </div>
  );
};



const mapStateToProps = ({ product }: IRootState) => ({
  productList: product.entities,
  loading: product.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Product) 
