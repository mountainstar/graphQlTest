/* eslint-disable react/no-multi-comp */
import React from 'react';
// import Loadable from 'react-loadable';
import LoadingScreen from './LoadingScreen';

const PageLoader = ({page: Component, resources, ...rest}) => {
  const {loading, error, data} = resources;
  if (loading) return <LoadingScreen />;
  if (error) return <div>err</div>;
  return <Component data={data} {...rest} />;
};

export default PageLoader;
