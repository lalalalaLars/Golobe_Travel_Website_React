import {
  ProfileHeader,
  ProfileMainContent,
  SignedInNavbar,
} from "../components";
import styles from "../styles";

const UserProfile = () => {
  return (
    <>
      <SignedInNavbar />
      <div className="flex justify-center">
        <div className={`${styles.boxWidth}`}>
          <ProfileHeader />
          <ProfileMainContent />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
