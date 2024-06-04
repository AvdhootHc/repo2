"use client";
import React, { useEffect } from "react";

const GITLAB_APP_ID =
  "77f81152bf7010d8c213351215720f0e6db04dab5c4d57902e3a20fb387246c7";
const GITLAB_CALLBACK_URL = "http://localhost:3000/home";
const gitlabOAuthURL = `https://gitlab.com/oauth/authorize?client_id=${GITLAB_APP_ID}&redirect_uri=${encodeURIComponent(
  GITLAB_CALLBACK_URL
)}&response_type=code&scope=read_user`;

const GitLabOAuth = () => {
  // const handleLogin = async (code) => {
  //   try {
  //     // Exchange the code for an access token
  //     const data = await fetch("https://gitlab.com/oauth/token", {
  //       method: "POST",
  //       body: {
  //         client_id: GITLAB_APP_ID,
  //         client_secret:
  //           "gloas-8598e93dadfab7c83f986926c5dc5b147afdcac95a137b5e76edb65f4adb780a",
  //         code,
  //         grant_type: "authorization_code",
  //         redirect_uri: GITLAB_CALLBACK_URL,
  //       },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((response) => response.json());

  //     const accessToken = data.access_token;
  //     console.log("first", accessToken);

  //     // Fetch the user's GitLab profile
  //     const userProfile = await fetch("https://gitlab.com/api/v4/user", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     // Handle the user profile data (e.g., store it in your database and log the user in)
  //     console.log(`Welcome, ${userProfile.data.name}!`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const axios = require("axios");

  const handleLogin = async (code) => {
    try {
      // Exchange the code for an access token
      const tokenResponse = await axios.post(
        "https://gitlab.com/oauth/token",
        {
          client_id: GITLAB_APP_ID,
          client_secret:
            "gloas-8598e93dadfab7c83f986926c5dc5b147afdcac95a137b5e76edb65f4adb780a",
          code,
          grant_type: "authorization_code",
          redirect_uri: GITLAB_CALLBACK_URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;
      console.log("first", accessToken);

      // Fetch the user's GitLab profile
      const userProfileResponse = await axios.get(
        "https://gitlab.com/api/v4/user",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle the user profile data (e.g., store it in your database and log the user in)
      console.log(userProfileResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGitLabCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code) {
      handleLogin(code);
    }
  };

  useEffect(() => {
    handleGitLabCallback();
  }, []);

  return (
    <div>
      <a href={gitlabOAuthURL}>Sign in with GitLab</a>
    </div>
  );
};

export default GitLabOAuth;

// application id = 77f81152bf7010d8c213351215720f0e6db04dab5c4d57902e3a20fb387246c7
// secret = gloas-8598e93dadfab7c83f986926c5dc5b147afdcac95a137b5e76edb65f4adb780a
