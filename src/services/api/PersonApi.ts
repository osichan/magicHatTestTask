import axios from "axios";

export const requestToGetAllCharacters = async () => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе изображений:", error);
    return null;
  }
};

export const requestToGetSingleCharacterById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/character/${id}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Ошибка при запросе изображений:", error);
    return null;
  }
};
