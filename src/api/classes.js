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
