import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Menu } from 'antd';
import {
  getCurrentNavigation,
  setCurrentNavigation,
} from './navigationSlice';


export function Navigation() {
  const dispatch = useAppDispatch();

  const currentNavigation = useAppSelector(getCurrentNavigation);

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentNavigation]}>
      <Menu.Item key="counter" onClick={() => dispatch(setCurrentNavigation("counter"))}>Counter</Menu.Item>
      <Menu.Item key="signin" onClick={() => dispatch(setCurrentNavigation("signin"))}>Sign In</Menu.Item>
    </Menu>
  )
}