import React, { useState, useEffect } from "react";
import Login from "../../components/Login";
import Profile from "../../components/Profile";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import FullLayout from "../../layout/fullLayout";
const Auth = (props) => {
  console.log(props);
  const { userData } = props;
  const router = useRouter();
  return (
    <FullLayout>
      {userData?.token ? (
        userData.isAdmin === true ? (
          router.push("/admin")
        ) : (
          <Profile />
        )
      ) : (
        <Login />
      )}
    </FullLayout>
  );
};
const mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps)(Auth);

// import React from "react";
// import Login from "../components/Login";
// import Profile from "../components/Profile";
// import { connect } from "react-redux";
// import { useRouter } from "next/router";
// const Auth = (props) => {
//   const router = useRouter();
//   return props.userData && Object.keys(props.userData) != 0 ? (
//     props.userData.isAdmin === true ? (
//       router.push("/admin")
//     ) : (
//       <Profile />
//     )
//   ) : (
//     <Login />
//   );
// };
// const mapStateToProps = (state) => {
//   return { userData: state.userData };
// };
// export default connect(mapStateToProps)(Auth);
