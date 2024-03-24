import { createSlice } from "@reduxjs/toolkit"

interface State {
  selectedCountryState: string
  CountryListState: string[]
  selectedCitiesState: string
  isDisabledCitiesState: boolean
  citiesListState: string[]
  selectedUniversityTypeState: string
  isDisabledUniversityTypeState: boolean
  universityTypeListState: string[]
  selectedAccommodationPreferenceState: string
  isDisabledAccommodationPreferenceState: boolean
  accommodationPreferenceListState: string[]
  isDisabledSabmitState: boolean
}

const initialState: State = {
  selectedCountryState: "",
  CountryListState: ["Выберите страну", "РБ", "РФ"],
  selectedCitiesState: "",
  isDisabledCitiesState: true,
  citiesListState: ["Выберите город"],
  selectedUniversityTypeState: "",
  isDisabledUniversityTypeState: true,
  universityTypeListState: ["Выберите вид ВУЗа", "Технический", "Гуманитарный"],
  selectedAccommodationPreferenceState: "",
  isDisabledAccommodationPreferenceState: true,
  accommodationPreferenceListState: ["Выберите вариант проживания"],
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
        state.citiesListState = ["Выберите город", "Минск", "Гомель"]
        state.accommodationPreferenceListState = [
          "Выберите вариант проживания ",
          "Общежития",
          "Не интересует",
        ]
      }
      if (action.payload === "РФ") {
        state.selectedCountryState = "РФ"
        state.isDisabledCitiesState = false
        state.citiesListState = ["Москва", "Сочи"]
        state.accommodationPreferenceListState = [
          "Общежития",
          "Аренда",
          "Не интересует",
          "Общежития + Аренда",
        ]
      }
      if (action.payload === "Выберите страну") {
        state.isDisabledSabmitState = true
        state.isDisabledCitiesState = true
        state.isDisabledUniversityTypeState = true
        state.isDisabledAccommodationPreferenceState = true
        state.selectedCitiesState = ""
        state.selectedUniversityTypeState = "Выберите вид ВУЗа"
        state.selectedAccommodationPreferenceState =
          "Выберите вариант проживания "
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
        state.selectedUniversityTypeState = "Выберите вид ВУЗа"
        state.selectedAccommodationPreferenceState =
          "Выберите вариант проживания "
      }
    },
    selectUniversityType: (state, action) => {
      state.selectedUniversityTypeState = action.payload
      state.isDisabledAccommodationPreferenceState = false
      if (action.payload === "Выберите вид ВУЗа") {
        state.isDisabledSabmitState = true
        state.isDisabledAccommodationPreferenceState = true
        state.selectedAccommodationPreferenceState =
          "Выберите вариант проживания "
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
