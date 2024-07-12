
import UserProfile from '../../components/profile/userProfile'
import { useEffect } from 'react';
const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
<UserProfile/>
  );
};

export default ProfilePage;
