import { useAppDispatch } from '../../app/hooks';
import { userAsync } from './userSlice';
import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd'

export function User() {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(userAsync())} style={{ margin: '16px' }}>
      <Button type="primary" shape="round" icon={<GoogleOutlined />} size="large">
        Continue with Google
      </Button>
    </div>
  )
}