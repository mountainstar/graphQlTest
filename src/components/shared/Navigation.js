import React from 'react';
import {Link} from 'react-router-dom';

import {Pane, TabNavigation, Tab, majorScale} from 'evergreen-ui';

const Navigation = () => {
  return (
    <Pane background="tint2" padding={majorScale(1)}>
      <TabNavigation>
        <Tab>
          <Link to="/">Home</Link>
        </Tab>
        <Tab>
          <Link to="/Characters">Characters</Link>
        </Tab>
      </TabNavigation>
    </Pane>
  );
};

export default Navigation;
