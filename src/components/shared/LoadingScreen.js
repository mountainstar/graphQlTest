import React from 'react';
import {Pane, Spinner} from 'evergreen-ui';

const LoadingScreen = () => {
  return (
    <Pane
      alignItems="center"
      display="flex"
      height="100vh"
      justifyContent="center"
      flex="1"
    >
      <Spinner size={80} />
    </Pane>
  );
};

export default LoadingScreen;
