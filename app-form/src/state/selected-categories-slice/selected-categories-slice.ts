import { createSlice } from "@reduxjs/toolkit"
import { CountryState } from "../../interface/selected-categories/selected-categories"

const initialState: CountryState = {
  selectedCountry: "",
  selectedCity: "",
  selectedUniversity: "",
  selectedHabitation: "",
}

const selectedCategoriesStateSlice = createSlice({
  name: "selectedCountry",
  initialState,

  reducers: {
    selectCountry: (state, action) => {
      const countryId = action.payload
      state.selectedCountry = countryId
      state.selectedCity = ""
      state.selectedUniversity = ""
      state.selectedHabitation = ""
    },
    selectCity: (state, action) => {
      const cityId = action.payload
      state.selectedCity = cityId
      state.selectedUniversity = ""
      state.selectedHabitation = ""
    },
    selectUniversity: (state, action) => {
      const universityId = action.payload
      state.selectedUniversity = universityId
      state.selectedHabitation = ""
    },
    selectHabitation: (state, action) => {
      const habitationId = action.payload
      state.selectedHabitation = habitationId
    },
    clearSelectedCategories: (state) => {
      state.selectedCountry = ""
      state.selectedCity = ""
      state.selectedUniversity = ""
      state.selectedHabitation = ""
    },
  },
})

export const {
  selectCountry,
  selectCity,
  selectUniversity,
  selectHabitation,
  clearSelectedCategories,
} = selectedCategoriesStateSlice.actions
export default selectedCategoriesStateSlice.reducer
