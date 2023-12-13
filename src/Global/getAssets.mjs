let apiURL = "http://10.111.1.95:8081/";

export const getQualification = async () => {
  try {
    const response = await fetch(
      `${apiURL}qualification?range=%5B0%2C2999%5D&sort=%5B"libelle"%2C"ASC"%5D`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
