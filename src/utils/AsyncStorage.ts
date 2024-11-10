import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsyncData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data stored successfully with key "${key}"`);
  } catch (error) {
    console.error("Error saving data", error);
  }
};

export const getAsyncData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error retrieving data", error);
  }
};

export const deleteAsyncData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data with key "${key}" removed successfully`);
  } catch (error) {
    console.error("Error deleting data", error);
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("All data cleared from storage");
  } catch (error) {
    console.error("Error clearing storage", error);
  }
};
