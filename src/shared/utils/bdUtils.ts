export const addNewUserBD = (name: string, email: string, password: string) => {
  if (email) {
    fetch('http://localhost:3000/constructors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        applicationHistory: [],
      }),
    });
  }
};

export const loginUserBD = (email: string, password: string) => {
  if (email) {
    fetch('http://localhost:3000/online', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        applicationHistory: [],
      }),
    });
  }
};

export const getParseItemsBD = (email: string) => {
  if (email) {
    return fetch('http://localhost:3000/constructors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
};

export const getOnlineUser = () => {
  return fetch('http://localhost:3000/online').then((response) =>
    response.json(),
  );
};

export const deleteUserFromOnline = () => {
  fetch('http://localhost:3000/online/1', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
