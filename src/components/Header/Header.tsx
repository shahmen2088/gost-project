import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hooks/hook';
import { setSignOut } from '../../shared/reducers/slices/userSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(setSignOut());
    navigate('/');
  }
  return (
    <div>
      <button onClick={handleClick}>Выйти</button>
    </div>
  );
}
