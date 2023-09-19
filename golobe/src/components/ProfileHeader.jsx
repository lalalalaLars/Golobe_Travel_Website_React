import { useSelector } from "react-redux";
import styles from "../styles";

const ProfileHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      {currentUser ? (
        <div className="flex flex-col items-center justify-center mb-20 mt-[120px]">
          <img
            className={`lg:h-[350px] lg:object-cover rounded-[12px] relative ${styles.boxWidth} `}
            src={currentUser.cover}
            alt={`${currentUser.name}'s cover`}
          />

          <img
            className="absolute rounded-[100px] w-[140px] h-[140px] top-[410px] object-cover border-[3px] border-[salmon] "
            src={currentUser.profilePicture}
            alt={`${currentUser.name}'s profile picture`}
          />
          <div className="flex flex-col items-center pt-[95px]">
            <h3 className="font-montserrat font-semibold black-green text-[20px] ">
              {currentUser.name}
            </h3>
            <p className="font-montserrat text-[14px] opacity-75 black-green ">
              {currentUser.email}
            </p>
          </div>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </>
  );
};

export default ProfileHeader;
