import { createSlice } from "@reduxjs/toolkit"
import { dataCountries } from "../../data/countries/countries"
import { CountryState } from "../../interface/selected-categories/selected-categories"

const initialState: CountryState = {
  selectedCountryState: "",
  CountryListState: dataCountries.countryList,
  selectedCitiesState: "",
  isDisabledCitiesState: true,
  citiesListState: dataCountries.DefaultСiti,
  selectedUniversityTypeState: "",
  isDisabledUniversityTypeState: true,
  universityTypeListState: dataCountries.universityTypes,
  selectedAccommodationPreferenceState: "",
  isDisabledAccommodationPreferenceState: true,
  accommodationPreferenceListState: dataCountries.DefaultAccommodationOptions,
  isDisabledSabmitState: true,
}

const selectedCategoriesStateSlice = createSlice({
  name: "selectedCountry",
  initialState,

  reducers: {
    selectCountry: (state, action) => {
      if (action.payload === "РБ") {
        state.selectedCountryState = "РБ"
        state.isDisabledCitiesState = false
        state.citiesListState = dataCountries.BY.cities
        state.accommodationPreferenceListState =
          dataCountries.BY.accommodationOptions
      }
      if (action.payload === "РФ") {
        state.selectedCountryState = "РФ"
        state.isDisabledCitiesState = false
        state.citiesListState = dataCountries.RU.cities
        state.accommodationPreferenceListState =
          dataCountries.RU.accommodationOptions
      }
      if (action.payload === "Выберите страну") {
        state.isDisabledSabmitState = true
        state.isDisabledCitiesState = true
        state.isDisabledUniversityTypeState = true
        state.isDisabledAccommodationPreferenceState = true
        state.selectedCitiesState = ""
        state.selectedUniversityTypeState = ""
        state.selectedAccommodationPreferenceState = ""
      }
    },
    selectCities: (state, action) => {
      state.selectedCitiesState = action.payload
      state.isDisabledUniversityTypeState = false
      if (action.payload === "Выберите город") {
        state.isDisabledSabmitState = true
        state.isDisabledUniversityTypeState = true
        state.isDisabledAccommodationPreferenceState = true
        state.selectedCitiesState = ""
        state.selectedUniversityTypeState = ""
        state.selectedAccommodationPreferenceState = ""
      }
    },
    selectUniversityType: (state, action) => {
      state.selectedUniversityTypeState = action.payload
      state.isDisabledAccommodationPreferenceState = false
      if (action.payload === "Выберите вид ВУЗа") {
        state.isDisabledSabmitState = true
        state.isDisabledAccommodationPreferenceState = true
        state.selectedAccommodationPreferenceState = ""
      }
    },
    selectAccommodationPreference: (state, action) => {
      state.selectedAccommodationPreferenceState = action.payload
      if (action.payload !== "Выберите вариант проживания") {
        state.isDisabledSabmitState = false
      }
    },
  },
})

export const {
  selectCountry,
  selectCities,
  selectUniversityType,
  selectAccommodationPreference,
} = selectedCategoriesStateSlice.actions
export default selectedCategoriesStateSlice.reducer
