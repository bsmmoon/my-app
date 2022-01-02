import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Menu, Space } from 'antd';
import {
  getCurrentNavigation,
  setCurrentNavigation,
} from './navigationSlice';
import {
  getDisplayName, getPhotoURL,
} from '../user/userSlice'

function photoIcon(url: string) {
  return <img src={url} alt="" style={{height: "32px", borderRadius: "50%", backgroundSize: "32px"}} />
}

export function Navigation() {
  const dispatch = useAppDispatch();

  const currentNavigation = useAppSelector(getCurrentNavigation);
  const displayName = useAppSelector(getDisplayName);
  const photoURL = useAppSelector(getPhotoURL);

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentNavigation]}>
      <Menu.Item key="counter" onClick={() => dispatch(setCurrentNavigation("counter"))}>Counter</Menu.Item>
      <Menu.Item key="signin" onClick={() => dispatch(setCurrentNavigation("signin"))}>
        <Space>
          {!photoURL ? "" : photoIcon(photoURL)}
          {displayName || "Sign In"}
        </Space>
      </Menu.Item>
    </Menu>
  )
}