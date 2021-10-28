import React from "react";
import ProfileWrapper from "./Profile.styles";
import Link from "../Link";
interface ProfileProps {}
const Profile = ({}: ProfileProps) => {
  return (
    <ProfileWrapper>
      <div className="container">
        <div className="profile-header">
          <strong>
            <span>Austin Howard</span>
          </strong>
        </div>
        <div className="profile-summary">
          <p>
            react developer with a passion for micro frontends and developer
            experience
          </p>
        </div>
        <div className="profile-footer">
          <Link text="github" href={"https://github.com/ahoward2"}></Link>
        </div>
      </div>
    </ProfileWrapper>
  );
};
// export const MemoizedProfile = React.memo(Profile);
// export { Profile };
export default Profile;
