import React, { useState } from 'react';
import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
  const initialState = SHOP_DATA;

  const [collections, setCollections] = useState(initialState);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
