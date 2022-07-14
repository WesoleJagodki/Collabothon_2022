import { HStack, Input, VStack } from "native-base";
import React, { useState } from "react";
import { Modal, Text, View, Image, TouchableOpacity } from "react-native";
import { message_popup_style } from "../styles/MessagePopupStyle";

interface Props {
  visible: boolean;
  onCancelPressed: any;
  header: string;
  description: any;
  exitButtonText: string;
}

export const MessagePopup = function ({
  visible,
  onCancelPressed,
  header,
  description,
  exitButtonText,
}: Props): JSX.Element {
  return (
    <View style={message_popup_style.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onCancelPressed();
        }}
      >
        <View style={message_popup_style.centeredView}>
          <View style={message_popup_style.modalView}>
            <Text style={message_popup_style.modalHeader}>{header}</Text>
            <Text style={message_popup_style.modalDescription}>{description}</Text>

            <TouchableOpacity
                style={message_popup_style.button}
                onPress={() => onCancelPressed()}
              >
                <Text style={message_popup_style.textStyle}>{exitButtonText}</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

