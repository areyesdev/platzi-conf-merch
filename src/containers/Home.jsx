import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  <>
    <Helmet>
      <title>Platzi Conf Merch - Productos</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@areyesdev" />
      <meta name="twitter:creator" content="@areyesdev" />
      <meta name="twitter:title" content="Platzi Conf Store" />
      <meta name="twitter:description" content="Platzi Conf Store" />
      <meta name="twitter:image" content="" />
      <meta property="og:title" content="Platzi Conf Store" />
      <meta property="og:description" content="Platzi Conf Store" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
  </>;
  return <Products products={initialState.products} />;
};

export default Home;
