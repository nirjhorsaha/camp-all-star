// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    pURL: user?.photoURL,
    // role: "User",
  };

  //   fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// become a admin
export const becomeAdmin = (email) => {
  const currentUser = {
    role: "Admin",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
  
};

// become a instructor
export const becomeInstructor = (email) => {
  const currentUser = {
    role: "Instructor",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Get role
export const getRole = async email => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
  const user = await response.json()
  return user?.role
}
