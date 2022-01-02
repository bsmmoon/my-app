import { GoogleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authenticate, getUID, signOut } from './userSlice';

function ContinueWithGoogle() {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(authenticate())} style={{ margin: '16px' }}>
      <Button type="primary" shape="round" icon={<GoogleOutlined />} size="large">
        Continue with Google
      </Button>
    </div>
  )
}

function SignOut() {
  const dispatch = useAppDispatch();

  return <div onClick={() => dispatch(signOut())} style={{ margin: '16px' }}>
    <Button type="primary" shape="round" icon={<LogoutOutlined />} size="large">
      Sign out
    </Button>
  </div>
}

export function User() {
  const uid = useAppSelector(getUID);

  if (!uid) return ContinueWithGoogle()
  
  return SignOut()
}