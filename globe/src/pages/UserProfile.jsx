import {
  ProfileHeader,
  ProfileMainContent,
  SignedInNavbar,
} from "../components";

const UserProfile = () => {
  return (
    <>
      <SignedInNavbar />
      <div className="flex justify-center">
        <div className="flex flex-col">
          <ProfileHeader />
          <ProfileMainContent />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
