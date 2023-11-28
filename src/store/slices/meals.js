import { meals, category, categories, meal } from "../model/meals";
const { createSlice } = require("@reduxjs/toolkit");
const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    data: {
      showAlert: false,
      showMeal: false,
      meal,
      categories: [],
    },
  },
  reducers: {
    show(state) {
      state.data = {
        ...state.data,
        showMeal: false,
        showAlert: !state.data.showAlert,
        meal:meal,
      };
    },
    showMeal(state, action) {
      state.data = {
        ...state.data,
        showMeal: true,
        showAlert: !state.data.showAlert,
        meal: action.payload ? action.payload : meal,
      };
    },
    set(state, action) {
      const { key, value } = action.payload;
      state.data.meal = {
        ...state.data.meal,
        [key]: value,
      };
    },
    reSet(state) {
      state.data.meal = meal;
    },
    newCategories(state, action) {
      state.data.categories = action.payload;
    },
    addMeal(state, action) {
      const { id, data } = action.payload;
      const oldData = state.data.categories;
      const newData = [];
      oldData.map((e) => {
        if (e.categories.id == id) {
          newData.push({
            ...e,
            food: [...e.food, data],
          });
        } else {
          newData.push(e);
        }
      });
      state.data.categories = newData;
    },
    remove(state, action) {
      const { id, mealId } = action.payload;
      const oldData = state.data.categories;
      const newData = [];
      oldData.map((e) => {
        if (e.categories.id == id) {
          newData.push({
            ...e,
            food: e.food.filter(
              (item) => item.id !== mealId
            ),
          });
        } else {
          newData.push(e);
        }
      });
      state.data = {
        ...state.data,
        categories:newData
      };
    },
  },
});
export const mealsAction = mealsSlice.actions;
export default mealsSlice.reducer;
