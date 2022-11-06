import { createContext } from 'react';

const userProfile = {
  name: 'ドラムカン ジョーンズ',
};
export const UserProfileContext = createContext(userProfile);
export type UserProfile = typeof userProfile;
