import {Modal, StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

export const red = "#c1272d";
export const yellow = "#FFCC00";

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    padding: 14,
    color: "#c90405",
  },
  input_label: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: 20,
    textTransform: "capitalize",
  },
  text_input: {
    padding: 12,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  // product card
  product_card: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

    padding: 8,
  },
  left: {
    flex: 0.3,
    // marginHorizontal: 5,
  },
  food_img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  middle: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 8,
    marginLeft: 10,
  },
  right: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 8,
    alignItems: "flex-end",
  },
  food_name: {
    fontWeight: "bold",
    fontSize: 12,
  },
  rest_name: {
    fontSize: 8,
    color: "#4d4d4d",
  },
  line: {
    height: 0.5,
    width: "90%",
    backgroundColor: "#000",
  },
  food_size: {
    fontWeight: "bold",
    fontSize: 11,
  },
  food_quantity: {
    borderWidth: 1,
    width: 35,
    textAlign: "center",
    borderRadius: 4,
    color: "#c1272d",
    borderColor: "#c1272d",
    paddingVertical: 1,
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  cross: {
    width: 40,
    height: 40,
  },
  cross_position: {
    position: "absolute",
    top: -15,
    right: -8,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  contact_details: {
    fontWeight: "bold",
    color: "#000",
  },
  details: {
    color: "#4d4d4d",
    marginTop: 5,
  },
  home: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  side: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
});
