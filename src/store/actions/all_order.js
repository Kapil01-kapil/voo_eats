import {api_url} from "../../apiEndPoints/Api";
import axios from "axios";
export const AllOrder = "Set_AllOrder";
export const ORDERITEAM = "ORDERITEAM";
export const ACCEPT_ORDER = "ACCEPT_ORDER";
export const ORDERSTATUSCHANGE = "ORDERSTATUSCHANGE";

export const orderdetails = (userId) => {
  let body = {
    driver_id: userId,
  };
  return async (dispatch) => {
    // any async code you want!

    try {
      const data = await axios.post(`${api_url}driver_order_detials`, body);
      console.log("jhdgfg", body, "data", data.data.data);

      if (!data.status) {
        throw new Error("Something went wrong!");
      }

      const resData = await data.data.data;

      const loadedProducts = [];

      console.log("resData", resData);
      console.log("AllOrder", resData);
      dispatch({
        type: AllOrder,
        kapil: "ramSita",
        AllOrder: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });

      console.log("products", AllOrder);
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
export const AcceptOrder = (order_id, status) => {
  let body = {
    driver_id: "126",
    order_id: order_id,
    status: status,
  };
  console.log(body);
  return async (dispatch) => {
    const response = await axios.post(`${api_url}order-accepteby-driver`, body);

    if (!response.status) {
      throw new Error("Something went wrong!");
    }
    console.log(response);
    dispatch({
      type: ACCEPT_ORDER,
      pid: driver_id,
      status: status,
      order_id: order_id,
    });
  };
};

export const Statuschangeby = (remarks, status, order_id) => {
  let body = {
    driver_id: "126",

    order_id: order_id,
    status: status,
    remarks: remarks,
  };
  console.log(body);
  return async (dispatch) => {
    const response = await axios.post(
      `${api_url}order-statuschangeby-driver`,
      body,
    );

    if (!response.status) {
      throw new Error("Something went wrong!");
    }
    console.log(response);
    dispatch({
      type: ORDERSTATUSCHANGE,
      pid: driver_id,
      order_id: order_id,
      delivered: delivered,
    });
  };
};

// export const OderItem = (order_id) => {
//   let body = {
//     order_id: order_id,
//   };
//   return async (dispatch) => {
//     // any async code you want!

//     try {
//       const data = await axios.post(`${api_url}orders_item_details`, body);
//       console.log("jhdgfg", body, "data", data.data.data);

//       if (!data.status) {
//         throw new Error("Something went wrong!");
//       }

//       const resData = await data.data;
//       const loadedProducts = [];
//       resData.map((_) => {
//         _.billing_address.map((__) => {
//           loadedProducts.push(__);
//         });
//       });

//       console.log("resData", resData);
//       console.log("AllOrder", resData);
//       dispatch({
//         type: ORDERITEAM,
//         kapil: "ramSita",
//         OrderIten: resData.data,
//         Address: loadedProducts,

//         // userProducts: loadedProducts.filter((prod) => prod.id === body),
//       });

//       console.log("products", AllOrder);
//     } catch (err) {
//       // send to custom analytics server
//       throw err;
//     }
//   };
// };

// export const AcceptOrder = (restaurant_id, order_id) => {
//   let body = {
//     restaurant_id: restaurant_id,
//     order_id: order_id,
//   };
//   console.log(body);
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await axios.post(`${api_url}accept_order`, body);

//     if (!response.status) {
//       throw new Error("Something went wrong!");
//     }
//     console.log(response);
//     dispatch({type: ACCEPT_ORDER, pid: restaurant_id, order_id: order_id});
//   };
// };

// export const order_status_change = (status, order_id) => {
//   let body = {
//     order_id: order_id,
//     status: status,
//   };
//   console.log(body);
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     const response = await axios.post(`${api_url}order-status-change`, body);

//     if (!response.status) {
//       throw new Error("Something went wrong!");
//     }
//     console.log(response);
//     dispatch({type: ORDERSTATUSCHANGE, status: status, order_id: order_id});
//   };
// };
