import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hooks/hook';
import { setSignUp } from '../../shared/reducers/slices/userSlice';
import { authenticateCredentials } from '../../shared/utils/userVerificationUtils';
import st from './SignUpForm.module.css';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = () => {
    authenticateCredentials(email, password)?.then((data) => {
      if (data) {
        setErrorMessage('Аккаунт с такой почтой уже существует!');
      } else {
        dispatch(
          setSignUp({
            ...data,
          }),
          navigate('/login'),
        );
      }
    });
  };

  return (
    <div className={st.form_wrapper}>
      <div className={st.title}>Регистрация</div>
      <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={st.form_item}>
          <label htmlFor="name"></label>
          <input
            type="text"
            {...register('name', {
              required: true,
              onChange: (e) => setName(e.target.value),
            })}
            placeholder="Your name"
            value={name}
            autoComplete="off"
          />
          {errors.name?.type === 'required' && <small>name is required</small>}
        </div>
        <div className={st.form_item}>
          <label htmlFor="email"></label>
          <input
            type="email"
            {...register('email', {
              required: true,
              // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
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
          <label htmlFor="password"></label>
          <input
            type="password"
            {...register('password', {
              required: true,
              // pattern:
              //   /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
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
        <input
          type="submit"
          className={st.button}
          value={'Создать аккаунт'}
        ></input>
        <div className={st.form_footer}>
          <Link to={'/login'} className={st.link}>
            У меня уже есть аккаунт
          </Link>
          <p className={st.error}>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};
