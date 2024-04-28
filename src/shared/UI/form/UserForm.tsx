import { User } from '../../api/usersApi';

type Props = {
  users: User[];
};

export const UserForm = ({ users }: Props) => {
  return (
    <>
      <form id="user-form" method="post">
        <label htmlFor="user">
          Выберите специалиста:
          <select name="user" id="user" required>
            {users.map((user) => {
              return <option value={user.id}>{user.name}</option>;
            })}
          </select>
        </label>
        <p>
          <label>
            Введите название документа: <br />
            <input type="text" name="name" id="name" required />
          </label>
        </p>
        <input type="submit" value="Отправить" />
      </form>
    </>
  );
};
