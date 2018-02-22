export const getPokeTypesData = async () => {
  try {
    const response = await fetch('http://localhost:3001/types');
    return await response.json();
  } catch (error) {
    throw new Error(error)
  }
};
