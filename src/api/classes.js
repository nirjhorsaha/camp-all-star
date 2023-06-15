// Add a class
export const addclass = async (classData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/class`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classData),
  });

  const data = await response.json();
  return data;
};

// Get all classes
export const getAllClasses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
  const data = await response.json()
  return data
}

// approved post
export const approvedPost = (id) => {
  const currentUser = {
    status: "Approve",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
  
};

// Deny post
export const denyPost = (id) => {
  const currentUser = {
    status: "Deny",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
  
};


// save a user selected course
export const addCourse = async (courseData) => {
  const response = await fetch(`http://localhost:5000/selectedClass`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(courseData),
  });

  const data = await response.json();
  return data;
};