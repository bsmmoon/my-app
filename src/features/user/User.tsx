import { useAppDispatch } from '../../app/hooks';
import { authenticate } from './userSlice';
import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd'

export function User() {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(authenticate())} style={{ margin: '16px' }}>
      <Button type="primary" shape="round" icon={<GoogleOutlined />} size="large">
        Continue with Google
      </Button>
    </div>
  )
}