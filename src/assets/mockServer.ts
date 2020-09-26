// Response 200
const responseOK =
  "https://run.mocky.io/v3/fa14ec78-0e71-442e-9718-90e72a2d6167";

// Response 300 ready to redirect
const availableRedirection =
  "https://run.mocky.io/v3/15814784-a124-4f81-9229-9ca7acb3b465";

// Response 400 unauthorized
const userUnauthorized =
  "https://run.mocky.io/v3/480d095a-37ce-441f-b67d-3ab781c0620f";

// Response 503
const serverNoResponse =
  "https://run.mocky.io/v3/00f4a04b-ac18-4bb0-ab17-3fd078708ec5";

export const responses = [
  responseOK,
  availableRedirection,
  userUnauthorized,
  serverNoResponse,
];

export const loginUserRequest = async (
  userEmail: string,
  userPassword: string
) => {
  const data = { userEmail, userPassword };
  const response = await fetch(responseOK, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
};
