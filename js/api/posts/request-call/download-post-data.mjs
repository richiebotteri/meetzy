import { SOCIAL_URL } from "../../constants/api-prefix-constants.mjs";

import { toggleComments } from "../../../handlers/posts/comments-handler.mjs";
import * as localStorage from "../../../storage/local-storage.mjs";
import { displayPosts } from "../../display/display-posts.mjs";

export async function downloadPostData(method, action) {
   try {
      let options = {
         method: method,
         headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.loadItem("loginToken")}`,
         },
      };

      const response = await fetch(`${SOCIAL_URL}${action}`, options);
      const result = await response.json();
      console.log("Download Post Response", response);
      result.forEach((post) => {
         const profile = localStorage.loadItem("profile");
         if (post.author.name === profile.name) {
            displayPosts(post);
         }
      });

      toggleComments(response.ok);
   } catch (error) {
      console.log(error);
   }
}
