import privateClient from "../client/private-client";
import publicClient from "../client/public-client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/getInfo",
  passwordUpdate: "user/update-password",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      console.log("react-signin");
      const response = await publicClient.post(userEndpoints.signin, {
        username,
        password,
      });
      return response;
    } catch (err) {
      console.log("error during signin", err);
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      console.log("react-signup");
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });
      return { response };
    } catch (err) {
      console.log("error during signup", err);
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);
      return response;
    } catch (err) {
      console.log("error while getting info", err);
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmedNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmedNewPassword,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
