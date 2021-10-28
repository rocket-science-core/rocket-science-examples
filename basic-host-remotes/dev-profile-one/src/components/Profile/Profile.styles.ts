import styled from "styled-components";
const ProfileWrapper = styled.div`
  width: 300px;
  height: 200px;
  border: solid 1px;
  .container {
    display: flex;
    flex-direction: column;
    padding: 4px;
    .profile-header {
      height: 30px;
      text-align: center;
    }
    .profile-summary {
      height: 140px;
    }
    .profile-footer {
      text-align: center;
    }
  }
`;
export default ProfileWrapper;
