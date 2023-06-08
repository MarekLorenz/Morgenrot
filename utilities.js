import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPersistentState = async () => {
    return await AsyncStorage.getItem('alarm:activated') || 'false';
};

export const saveState = async (value) => {
    try {
        await AsyncStorage.setItem('alarm:activated', toString(value));
    } catch (error) {
        console.log("Error while saving state\n\n", error);
    }
}