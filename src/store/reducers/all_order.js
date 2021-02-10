import {
  AllOrder,
  ACCEPT_ORDER,
  ORDERITEAM,
  ORDERSTATUSCHANGE,
} from "../actions/all_order";
const initialState = {
  AllOrder: [],
};

export default function (state = initialState, action) {
  console.log("action.AllOrder", action.AllOrder);
  switch (action.type) {
    case AllOrder:
      return {
        AllOrder: action.AllOrder,
      };
    case ACCEPT_ORDER:
      return {
        ...state,
        Products: state.AllOrder.filter(
          (product) => product.id !== action.status,
        ),
        Products: state.AllOrder.filter(
          (product) => product.status !== action.order_id,
        ),
      };
    case ORDERSTATUSCHANGE:
      return {
        ...state,
        Products: state.AllOrder.filter(
          (product) => product.id !== action.status,
        ),
        Products: state.AllOrder.filter(
          (product) => product.status !== action.order_id,
        ),
      };
    // case ORDERITEAM:
    //   return {
    //     OrderIten: action.OrderIten,
    //     Address: action.Address,
    //   };
    // case ACCEPT_ORDER:
    //   return {
    //     ...state,
    //     Products: state.AllOrder.filter((product) => product.id !== action.pid),
    //     Products: state.AllOrder.filter(
    //       (product) => product.status !== action.order_id,
    //     ),
    //   };
    // case ORDERSTATUSCHANGE:
    //   return {
    //     ...state,
    //     Products: state.AllOrder.filter(
    //       (product) => product.id !== action.status,
    //     ),
    //     Products: state.AllOrder.filter(
    //       (product) => product.status !== action.order_id,
    //     ),
    //   };
    default:
      return state;
  }
}
