import React, { Component } from 'react';

import { SHOP_DATA } from './shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import styles from './ShopPage.module.scss';


class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };

  }

  componentDidMount() {
    //console.log('componentDidMount this.state.collections', this.state.collections)
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate this.state.collections', this.state.collections)
  }

  render() {
    const { collections } = this.state;

    return (
      <div className={styles.ShopPage}>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
};

export default ShopPage;