import React from 'react';
import Test from './Test';
import renderer from 'react-test-renderer';

test('', () => {
    const component = renderer.create(<Test />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
