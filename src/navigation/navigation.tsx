import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, TouchableOpacity } from "react-native";
import { DetailsScreen, HomeScreen, ListScreen } from "../screens";
import {
  DETAILS_SCREEN_NAME,
  HOME_SCREEN_NAME,
  LIST_SCREEN_NAME,
} from "../utils/constants/navigationNames";
import { clearCharacterAsync } from "../utils/helpers/characterAsync";
import useResults from "../utils/hooks/useResults";
import CharacterQuesType from "../utils/types/CharacterQuesType";
import CharacterType from "../utils/types/CharacterType";

export type HomeScreenParamListBase = {
  HomeScreen: {
    characterQues?: CharacterQuesType;
  };
};

export type DetailsScreenParamListBase = {
  DetailsScreen: { characterInfo: CharacterType; isSucceeded: boolean };
};

const Tab = createBottomTabNavigator();
const HomeTab = createBottomTabNavigator<HomeScreenParamListBase>();

const Stack = createStackNavigator();
const DetailsStack = createStackNavigator<DetailsScreenParamListBase>();

const ListStack = () => {
  const { resetAll } = useResults();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
      initialRouteName={LIST_SCREEN_NAME}
    >
      <Stack.Screen
        name={LIST_SCREEN_NAME}
        component={ListScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#3c4544" },
          headerTitleStyle: { color: "#ccc" },
          headerTitleAlign: "center",
          title: "List Screen",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                clearCharacterAsync();
                resetAll();
              }}
              style={{ marginRight: 10 }}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>Reset</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <DetailsStack.Screen
        name={DETAILS_SCREEN_NAME}
        component={DetailsScreen}
        options={({ route }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: "#3c4544" },
          headerTitleStyle: { color: "#ccc" },
          title: route.params.characterInfo.name,
        })}
      />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  const { resetAll } = useResults();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#3c4544",
          },
          tabBarLabelStyle: {
            color: "#ccc",
            fontSize: 12,
          },
          tabBarIconStyle: {
            color: "#ccc",
          },
        }}
      >
        <HomeTab.Screen
          name={HOME_SCREEN_NAME}
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#3c4544" },
            headerTitleStyle: { color: "#ccc" },
            headerTitleAlign: "center",
            title: "Home Screen",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  clearCharacterAsync();
                  resetAll();
                }}
                style={{ marginRight: 10 }}
              >
                <Text style={{ fontSize: 18, color: "#fff" }}>Reset</Text>
              </TouchableOpacity>
            ),
            tabBarIcon: () => (
              <Image
                source={require("../assets/HomeIcon.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={LIST_SCREEN_NAME}
          component={ListStack}
          options={{
            title: "List",
            tabBarIcon: () => (
              <Image
                source={require("../assets/ListIcon.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
