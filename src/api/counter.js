import { fetch } from "../../src/helpers/fetch";

export function getCounterValue(url) {
  return fetch(url).then((res) => res);
}

export function setCounterValue(url, data) {
  return fetch(url, "POST", data).then((res) => res);
}
// import $ from "jquery";
// export function getCounterValue(url) {
//   console.log("------", url);
//   return $.ajax({
//     url,
//     method: "GET",
//     contentType: "application/json;charset=UTF-8",
//   }).then((res) => res);
// }
