import './App.css';
import { UserForm } from './shared/UI/form/UserForm';
import { useGetUsersQuery } from './shared/api/usersApi';

function App() {
  const {
    data: users,
    isError,
    isFetching,
  } = useGetUsersQuery({ name: 'constructors' });

  return (
    <>
      {users && (
        <>
          <UserForm users={users} />
          {/* <ul>
            {users.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul> */}
        </>
      )}
      {isFetching && <h1>Loading...</h1>}
      {isError && <h1>Error</h1>}
    </>
  );
}

export default App;
