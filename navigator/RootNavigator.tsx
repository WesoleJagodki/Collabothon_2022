import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoadingScreen } from "../components/screens/LoadingScreen";
import { RegistrationScreen } from "../components/screens/RegistrationScreen";
import { LoginScreen } from "../components/screens/LoginScreen";
import { MainScreen } from "../components/screens/MainScreen";
import { QuestScreen } from "../components/screens/QuestScreen";
import { QuestInsideScreen } from "../components/screens/QuestInsideScreen";
import { TicketsScreen } from "../components/screens/TicketsScreen";
import { MapScreen } from "../components/screens/MapScreen";
import { InfoScreen } from "../components/screens/info/InfoScreen";
import { AboutUs } from "../components/screens/info/AboutUs";
import { AccountScreen } from "../components/screens/AccountScreen";
import { ShowFeeding } from "../components/screens/info/ShowFeeding";
import {OpeningHours} from "../components/screens/info/OpeningHours";
import {TicketDetailsScreen} from "../components/screens/TicketDetailsScreen";
import { PicturePickerScreen } from "../components/screens/PicturePickerScreen";
import {FlowersMissionScreen} from "../components/screens/FlwersMissionScreen";
const Stack = createNativeStackNavigator();

export const RootNavigator = function (): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Root"
        component={FlowersMissionScreen}
        options={{ title: "LoadingScreen" }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ title: "RegistrationScreen" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "LoginScreen" }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: "MainScreen" }}
      />
      <Stack.Screen
        name="QuestScreen"
        component={QuestScreen}
        options={{ title: "QuestScreen" }}
      />
       <Stack.Screen
          name="QuestInsideScreen"
          component={QuestInsideScreen}
          options={{ title: "QuestInsideScreen" }}
      />
      <Stack.Screen
          name="FlowersMissionScreen"
          component={FlowersMissionScreen}
          options={{ title: "FlowersMissionScreen" }}
      />
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={{ title: "TicketsScreen" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "MapScreen" }}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ title: "InfoScreen" }}
          />
          <Stack.Screen
              name="ShowFeeding"
              component={ShowFeeding}
              options={{ title: "ShowFeeding" }}
          />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: "AboutUs" }}
      />
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: "AccountScreen" }}
      />
      <Stack.Screen
        name="PicturePickerScreen"
        component={PicturePickerScreen}
        options={{ title: "PicturePickerScreen" }}
      />
      <Stack.Screen
        name="OpeningHours"
        component={OpeningHours}
        options={{ title: "OpeningHours" }}
      />
      <Stack.Screen
        name="TicketDetailsScreen1"
        options={{ title: "TicketDetailsScreen1" }}
      >
        {(props) => (
          <TicketDetailsScreen
            {...props}
            buttonColor="#00AEEB"
            description="Prepare an active ��d� Card and the pin assigned to it. Remember that you can add your children in the card system. You will also buy this ticket for them. You can use the ticket for 6 months from the date of purchase, it is enough to display it on the smartphone screen and read it at the entrance gates. The ticket entitles one person to enter the grounds of the Orientarium ZOO ��d� at one time and visit without a time limit (during the opening hours). It can be purchased once every 30 days. During weekends, the line to enter the Orientarium can take around 30 minutes."
            ticketImage={require("../images/tickets-screen-1.png")}
            ticketDescription="Ticket with Karta �odzianina"
            ticketPrice="40PLN"
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TicketDetailsScreen2"
        options={{ title: "TicketDetailsScreen2" }}
      >
        {(props) => (
          <TicketDetailsScreen
            {...props}
            buttonColor="#EE5420"
            description="You can use the ticket for 6 months from the date of purchase, it is enough to display it on the smartphone screen and read it at the entrance gates. The ticket entitles one person to enter the grounds of the Orientarium ZOO ��d� at one time and visit without a time limit (during the opening hours). We close the Orientarium building at 5:30 PM. During weekends, the line to enter the Orientarium can take around 30 minutes."
            ticketImage={require("../images/tickets-screen-2.png")}
            ticketDescription="Ticket Orientarium ZOO ��d�"
            ticketPrice="70PLN"
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TicketDetailsScreen3"
        options={{ title: "TicketDetailsScreen3" }}
      >
        {(props) => (
          <TicketDetailsScreen
            {...props}
            buttonColor="#41A42F"
            description="With this ticket, first visit the Orientarium ZOO ��d� and report to our Customer Service Office and collect a paper EC1 ticket. The ticket allows you to visit the Orientarium ZOO ��d� and the Science and Technology Center at EC1 within 90 days from the date of purchase. NOTE: EC1 is located 20 minutes from the Orientarium by car."
            ticketImage={require("../images/tickets-screen-3.png")}
            ticketDescription="Combined ticket: ZOO ��d� and EC1"
            ticketPrice="40PLN"
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TicketDetailsScreen4"
        options={{ title: "TicketDetailsScreen4" }}
      >
        {(props) => (
          <TicketDetailsScreen
            {...props}
            buttonColor="#0D71D6"
            description="This ticket can be used by two adults caring for two children. The ticket is valid for 6 months from the date of purchase. The ticket entitles you to one-time entry to the premises of the Orientarium ZOO ��d� and sightseeing without a time limit (during the opening hours). During weekends, the line to enter the Orientarium can take around 30 minutes."
            ticketImage={require("../images/tickets-screen-4.png")}
            ticketDescription="Family ticket (2 + 2)"
            ticketPrice="220PLN"
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
