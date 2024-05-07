import { ApplicationsForm } from '../../shared/UI/form/ApplicationsForm';
import { useGetUsersQuery } from '../../shared/api/usersApi';

export default function MainPage() {
  const {
    data: users,
    isError,
    isFetching,
  } = useGetUsersQuery({ name: 'constructors' });
  return (
    <div>
      {users && <ApplicationsForm users={users} />}
      {isFetching && <h1>Loading...</h1>}
      {isError && <h1>Error</h1>}
    </div>
  );
}
