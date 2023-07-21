import { createSlice } from "@reduxjs/toolkit";
import mainData from "../../jops.json";

const initialState = {
  serach: [],
  companys: [],
  type: [],
  Specializ: [],
  location: [],
  data: mainData,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCompany(state, action) {
      state.companys = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setSpecializ(state, action) {
      state.Specializ = action.payload;
    },
    setlocation(state, action) {
      state.location = action.payload;
    },
    setSearch(state, action) {
      let arr = [];
      state.serach = [];
      state.data = mainData;
      if (action.payload === "") {
        return;
      }

      for (let i = 0; i < state.data.length; i++) {
        if (
          state.data[i].job_title
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          arr.push(state.data[i]);
        }
      }
      state.serach = arr;
      state.data = arr;
    },
    applyFilters(state, action) {
      let temp = state.data;
      if (state.serach.length > 0) {
        temp = state.serach;
      } else {
        temp = mainData;
      }

      if (
        state.companys.length <= 0 &&
        state.Specializ.length <= 0 &&
        state.location.length <= 0 &&
        state.type.length <= 0
      ) {
        if (state.serach.length > 0) {
          state.data = state.serach;
        } else {
          state.data = mainData;
        }
        return;
      }

      // company
      if (state.companys.length > 0) {
        let arr = [];
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.companys.length; j++) {
            if (temp[i].company_name === state.companys[j]) {
              arr.push(temp[i]);
            }
          }
        }
        temp = arr;
      }

      // Specializ
      if (state.Specializ.length > 0) {
        let arr = [];
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.Specializ.length; j++) {
            if (temp[i].category === state.Specializ[j]) {
              arr.push(temp[i]);
            }
          }
        }
        temp = arr;
      }

      // location
      if (state.location.length > 0) {
        let arr = [];
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.location.length; j++) {
            if (temp[i].company_location === state.location[j]) {
              arr.push(temp[i]);
            }
          }
        }
        temp = arr;
      }

      // type
      if (state.type.length > 0) {
        let arr = [];
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < state.type.length; j++) {
            if (temp[i].work_details.type === state.type[j]) {
              arr.push(temp[i]);
            }
          }
        }
        temp = arr;
      }
      state.data = temp;
      console.log(temp);
    },
  },
});

export const filtersAction = filterSlice.actions;

export default filterSlice.reducer;
