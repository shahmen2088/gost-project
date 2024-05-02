import { getOnlineUser, getParseItemsBD } from './bdUtils';

export const authenticateCredentials = (email: string, password: string) => {
  return getParseItemsBD(email)?.then((data) => {
    const list = data.filter(
      (item) => item.email === email && item.password === password,
    );

    return list[0];
  });
};

export const checkingUserAuthorization = () => {
  return getOnlineUser();
};
