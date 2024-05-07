import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../api/usersApi';

type Props = {
  users: User[];
};

export const ApplicationsForm = ({ users }: Props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="user">
        Выберите специалиста:
        <select name="user" id="user" required>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </label>
      <p>
        <label>
          Введите название документа: <br />
          <input
            type="text"
            placeholder="document name"
            {...register('docName', {
              required: true,
              minLength: 3,
            })}
          />
        </label>
      </p>
      <input type="submit" value="Отправить" />
    </form>
  );
};
