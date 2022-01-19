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

export function fetch(url, method = "GET", data = {}, options = {}) {
  if (method === "GET") {
    options = { ...options, method: "GET" };
  } else {
    const body = JSON.stringify(data);
    options = { ...options, method, body };
  }
  return handleResponse(url, options);
}
