import React, { Component } from 'react';

class ProductCard extends Component {
  shouldComponentUpdate(nextProps,nextState,){
      if(this.props.isAddedToCart !== nextProps.isAddedToCart ){
        return true
      }
      return false
  }
  render() {
    return (
      <div className='product-card'>
            <div className="product-img">
                <img src={this.props.eachListItem.images[0].base_url+this.props.eachListItem.images[0].primary} className='thumbnail'/>
            </div>
            <div className='product-price-cont'>
                  <span className='product-price'> $ {this.props.eachListItem.list_price.price} </span>
            </div>
            <div className='product-name-cont'>
                  <span className='product-name'>  {this.props.eachListItem.title} </span>
            </div>
            <div>
            </div>
            <div className='btn-cont'>
                {
                    this.props.isAddedToCart ?
                    <button className='btn' onClick={()=>this.props.removeFromCart(this.props.eachListItem)}>Remove from cart</button> :
                    <button className='btn' onClick={()=>this.props.addToCart(this.props.eachListItem)}>add to cart</button>
                }
            </div>
      </div>
    );
  }
}

export default ProductCard;
