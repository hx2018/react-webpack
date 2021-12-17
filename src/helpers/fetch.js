function handleResponse(url, options) {
  options = {
    headers: {
      Accept: "application/json", // 默认是：Accept: */*
      "Content-Type": "application/json", // 默认是：Content-Type: text/plain;charset=UTF-8
      "X-Requested-With": "XMLHttpRequest",
    },
    // credentials: "same-origin",
    ...options,
  };

  //   options = {
  //     headers: Object.assign(
  //       {},
  //       {
  //         Accept: "application/json",
  //         "Content-Type": "application/json", // 默认是：Content-Type: text/plain;charset=UTF-8
  //         "X-Requested-With": "XMLHttpRequest",
  //       }
  //     ),

  //     credentials: "same-origin",
  //     ...options,
  //   };
  return fetch(url, options).then((res) => res.json());
}

export function get(url, args = {}, options = {}) {
  options = { ...options, method: "GET" };
  return handleResponse(url, options);
}

export function post(url, args = {}, options = {}) {
  const body = JSON.stringify(args.body);
  options = { ...options, method: "POST", body };
  return handleResponse(url, options);
}
