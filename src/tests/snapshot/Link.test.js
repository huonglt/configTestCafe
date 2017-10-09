import React from 'react';

import Link from '../../components/Link/Link';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  //expect(tree).toMatchSnapshot();
  console.log(`tree = ${tree}`);
});