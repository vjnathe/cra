import renderer from 'react-test-renderer';
import Login from './Login';

it('Login renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
