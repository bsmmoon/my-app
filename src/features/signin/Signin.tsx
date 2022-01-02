import { useAppDispatch } from '../../app/hooks';
import { signinAsync } from './signinSlice';
import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd'

export function Signin() {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(signinAsync())} style={{ margin: '16px' }}>
      <Button type="primary" shape="round" icon={<GoogleOutlined />} size="large">
        Continue with Google
      </Button>
    </div>
  )
}