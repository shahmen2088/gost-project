import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hooks/hook';
import { setUserLogin } from '../../shared/reducers/slices/userSlice';
import st from './LoginFrom.module.css';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    dispatch(
      setUserLogin({
        email,
        password,
      }),
    );
  };

  return (
    <div className={st.form_wrapper}>
      <div className={st.title}>Вход</div>
      <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={st.form_item}>
          <label htmlFor="email">Введите почту </label>
          <input
            type="email"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              onChange: (e) => setEmail(e.target.value),
            })}
            placeholder="Your email"
            value={email}
            autoComplete="off"
          />
          {errors.email?.type === 'required' && (
            <small>email is required</small>
          )}
        </div>
        <div className={st.form_item}>
          <label htmlFor="password">Введите пароль </label>
          <input
            type="password"
            {...register('password', {
              required: true,
              pattern:
                /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
              onChange: (e) => setPassword(e.target.value),
            })}
            placeholder="Your password"
            value={password}
            autoComplete="off"
          />
          {errors.password?.type === 'required' && (
            <small>password is required</small>
          )}
        </div>
        <div className={st.button_panel}>
          <input type="submit" className={st.button} value={'Войти'}></input>
        </div>
        <div className={st.form_footer}>
          <Link to={'/signUp'} className={st.link}>
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};
