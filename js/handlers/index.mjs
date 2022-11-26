import { toggleMobileNav } from "./mobile-nav-toggle/index.mjs";
import { toggleComments } from "./posts/comments-handler.mjs";
import { toggleMediaBtn } from "./posts/media-btn-handler.mjs";
import { toggleTagBtn } from "./posts/tag-btn-handler.mjs";
import { logoutAnchorAccount } from "./registration/logout-anchor-handler.mjs";
import { loginFormHandler } from "./registration/login-form-handler.mjs";
import { registerFormHandler } from "./registration/register-form-handler.mjs";

export function postHandlers() {
   toggleMobileNav();
   toggleComments();
   toggleMediaBtn();
   toggleTagBtn();
   logoutAnchorAccount();
}

export function signupHandlers() {
   registerFormHandler();
   loginFormHandler();
}
