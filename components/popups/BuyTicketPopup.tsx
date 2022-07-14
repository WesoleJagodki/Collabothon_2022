import { HStack, Input, VStack } from "native-base";
import React, { useState } from "react";
import { Modal, Text, View, Image, TouchableOpacity } from "react-native";
import { ticket_popup_style } from "../styles/TicketPopupStyle";

interface Props {
  visible: boolean;
  onOkPressed: any;
  onCancelPressed: any;
  ticketImage: any;
  ticketDescription: string;
  ticketPrice: string;
}

export const BuyTicketPopup = function ({
  visible,
  onOkPressed,
  onCancelPressed,
  ticketImage,
  ticketDescription,
  ticketPrice
}: Props): JSX.Element {
  const [ticketCount, setTicketCount] = useState(1);
  return (
    <View style={ticket_popup_style.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onCancelPressed();
        }}
      >
        <View style={ticket_popup_style.centeredView}>
          <View style={ticket_popup_style.modalView}>
            <Text style={ticket_popup_style.modalHeader}>Are you sure you want to buy?</Text>
            <Text style={ticket_popup_style.modalText}>Specify the number of pieces you want to buy.</Text>
            <HStack>
              <Image
                source={ticketImage}
                width={90}
                height={90}
                style={{margin: 10}}
              />
              <VStack>
                <HStack>
                  <Text style={ticket_popup_style.modalDescription}>{ticketDescription}</Text>
                  <Text style={ticket_popup_style.modalPrice}>{ticketPrice}</Text>
                </HStack>
                <HStack space={2}>
                  <TouchableOpacity style={ticket_popup_style.ticketButton} onPress={() => (ticketCount > 1 ? setTicketCount(ticketCount - 1) : 1)}><Text>-</Text></TouchableOpacity>
                  <Input variant="rounded" style={ticket_popup_style.ticketCount} width={20} value={String(ticketCount)} />
                  <TouchableOpacity style={ticket_popup_style.ticketButton} onPress={() => setTicketCount(ticketCount + 1)}><Text>+</Text></TouchableOpacity>
                </HStack>
              </VStack>
            </HStack>
            <HStack style={{flex: 1}}>
              <TouchableOpacity
                style={ticket_popup_style.button}
                onPress={() => onCancelPressed()}
              >
                <Text style={ticket_popup_style.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ticket_popup_style.button}
                onPress={() => onOkPressed()}
              >
                <Text style={ticket_popup_style.textStyle}>Complete</Text>
              </TouchableOpacity>
            </HStack>
          </View>
        </View>
      </Modal>
    </View>
  );
};

