// Response 200
const responseOK =
  "https://run.mocky.io/v3/fa14ec78-0e71-442e-9718-90e72a2d6167";

// Response 300 ready to redirect
const availableRedirection =
  "https://run.mocky.io/v3/15814784-a124-4f81-9229-9ca7acb3b465";

// Response 401 unauthorized
const userUnauthorized =
  "https://run.mocky.io/v3/480d095a-37ce-441f-b67d-3ab781c0620f";

// Response 500
const serverNoResponse =
  "https://run.mocky.io/v3/00f4a04b-ac18-4bb0-ab17-3fd078708ec5";

export const requests = [
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
  let requestUrl;
  if (userPassword === "Error123") {
    requestUrl = serverNoResponse;
  } else if (userPassword === "Invalid123") {
    requestUrl = userUnauthorized;
  } else {
    requestUrl = responseOK;
  }
  return await fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
