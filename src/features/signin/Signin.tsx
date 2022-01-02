import { useAppDispatch } from '../../app/hooks';
import { signinAsync } from './signinSlice';
import { GoogleOutlined } from '@ant-design/icons';

export function Signin() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <GoogleOutlined onClick={() => dispatch(signinAsync())} />
    </div>
  )
}