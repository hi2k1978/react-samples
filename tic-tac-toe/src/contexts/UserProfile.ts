import { createContext, useContext } from 'react';

const defaultUserProfile = {
  name: 'ドラムカン',
};

export type UserProfile = typeof defaultUserProfile;
export const UserProfileContext = createContext({ ...defaultUserProfile });

const useUserProfile = () => {
  const userProfile = useContext(UserProfileContext);
  const initUserProfile = () => {
    userProfile.name = defaultUserProfile.name;
  };
  return { UserProfileContext, initUserProfile };
};
export default useUserProfile;
