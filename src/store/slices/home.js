import { stats, orders, order } from "../model/home";
import { addOrder, changOrderStatus, addDriver } from "../controller/home";
const { createSlice } = require("@reduxjs/toolkit");
const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: { stats, orders, order, showOrder: false },
  },
  reducers: {
    showOrderData(state, action) {
      const {
        driver,
        user,
        foods,
        total_price_after_discount,
        total_price_before_discount,
        to_address,
        id
      } = action.payload;
      state.data = {
        ...state.data,
        order:{
          ...action.payload,
          driver,
          user:{
            ...user,
            time:user.created_at,
            location:to_address,
          },
          foods,
          totalPrice:total_price_before_discount,
          finalPrice:total_price_after_discount
        },
      };
    },
    showOrder(state,action) {
      state.data = {
        ...state.data,
        showOrder:action.payload,
      };
    },
    newData(state, action) {
      const data = action.payload;
      var myData = [];
      data.map((e) => {
        myData.push({
          ...e,
          name: e.user.name,
          address: e.to_address,
          time: e.time,
          status: e.state,
          price: e.total_price_after_discount,
          phoneNumber: e.user.mobile,
          id: e.order_id,
        });
      });
      state.data.orders = myData;
    },
    add(state, action) {
      const { image,id, name, price, status, date, phoneNumber, address } =
        action.payload;
      state.data.orders = addOrder(
        state.data.orders,
        id,
        name,
        price,
        status,
        date,
        phoneNumber,
        address,image
      );
    },
    action(state, action) {
      const { id, newStatus, driverData } = action.payload;
      const { newData, newItem } = changOrderStatus(
        state.data.orders,
        state.data.order,
        id,
        newStatus
      );
      state.data = {
        ...state.data,
        orders: newData,
        order: driverData ? { ...newItem, driver: driverData } : newItem,
      };
    },
    newStatus(state, action) {
      const {
        total_orders,
        num_each_rate,
        total_orders_per_day,
        average_rating,
        percentage_clients,
        percentage_earning,
        total_rating,
      } = action.payload;

      state.data = {
        ...state.data,
        stats: {
          totalOrder: total_orders,
          PerDayOrder: total_orders_per_day,
          costmary: {
            num: percentage_clients.percentage,
            isUp: percentage_clients.state == "up",
          },
          inCame: {
            num: percentage_earning.earning,
            isUp: percentage_earning.state == "up",
          },
          rate: {
            rate: average_rating,
            totalRatting: total_rating,
            star1: num_each_rate.rating_1,
            star2: num_each_rate.rating_2,
            star3: num_each_rate.rating_3,
            star4: num_each_rate.rating_4,
            star5: num_each_rate.rating_5,
            average: average_rating,
          },
        },
      };
    },
  },
});
export const homeAction = homeSlice.actions;
export default homeSlice.reducer;
