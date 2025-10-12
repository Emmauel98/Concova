import React, { ReactNode, useRef } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { ThemedText } from "./ThemedText";
import { appColors } from "@src/constants/colors";
import { CSSProperties } from "react";

interface CustomModalProps {
  triggerItem?: ReactNode;
  triggerItemStyle?: StyleProp<ViewStyle>;
  modalTitle?: string;
  modalContent: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  modalizeRef: any;
  triggerDisabled?: boolean;
  headerComponent?: 'none';
}

const ModalButton = ({ ...rest }: TouchableOpacityProps) => {
  return <TouchableOpacity {...rest} />;
};

const CustomModal = ({
  triggerItem,
  triggerItemStyle,
  modalTitle,
  modalContent,
  modalizeRef,
  triggerDisabled = false,
  headerComponent
}: CustomModalProps) => {
  // const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      {triggerItem && <ModalButton
        onPress={onOpen}
        children={triggerItem}
        style={triggerItemStyle}
        disabled={triggerDisabled}
      />}
      <Portal>
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight
          avoidKeyboardLikeIOS
          handlePosition="inside"
          handleStyle={{ backgroundColor: 'white'}}
          modalStyle={{ backgroundColor: "black", borderRadius: 90}}
          HeaderComponent={
            <View style={[styles.header,
             { display: headerComponent || 'flex' }
             ]}>
              {
                modalTitle && <ThemedText style={styles.headerTitle}>{modalTitle}</ThemedText>
              }
              
            </View>
          }
          overlayStyle={{
            backgroundColor: "rgba(20,20, 20, 0.7)",
          }}
        >
          {modalContent}
        </Modalize>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: appColors.white,
    // borderBottomWidth: 1,
    borderBottomColor: appColors.gray,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 70,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
export default CustomModal;
