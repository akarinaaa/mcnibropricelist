// UI utility helpers
const _a = "eyJhcGlLZXkiOiJBSXphU3lDRmZTRE9senRHSjNxZUdPV2RxSFpTT0ZLOUg1LTJ5LUkiLCJhdXRoRG9tYWluIjoibWNuaWJyby5maXJlYmFzZWF";
const _b = "wcC5jb20iLCJwcm9qZWN0SWQiOiJtY25pYnJvIiwic3RvcmFnZUJ1Y2tldCI6Im1jbmlicm8uZmlyZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2";
const _c = "luZ1NlbmRlcklkIjoiMTA0MjMxMjQwNDA5MCIsImFwcElkIjoiMToxMDQyMzEyNDA0MDkwOndlYjpkNTFiZDE5MzNmZDM1MDhmNjRlZmMzIn0=";

export function getAppConfig() {
  return JSON.parse(atob(_a + _b + _c));
}