import { createSlice } from "@reduxjs/toolkit"
import { dataCountries } from "../../data/countries/countries"
import { CountryState } from "../../interface/selected-categories/selected-categories"

const initialState: CountryState = {
  selectedCountry: "выберите страну",
  selectedCountries: ["выберите страну", "Беларусь", "Россия"],
  selectedCities: ["выберите город"],
  selectedCity: "выберите город",
  isActiveCity: true,
  universityTypes: ["выберите вид ВУЗа", "ВУЗ", "Не интересует"],
  selectedUniversityType: "выберите вид ВУЗа",
  isActiveUniversityType: true,
  selectedAccommodationOptions: ["выберите вариант проживания"],
  selectedAccommodationOption: "выберите вариант проживания",
  isActiveAccommodationOption: true,
}

const selectedCategoriesStateSlice = createSlice({
  name: "selectedCountry",
  initialState,

  reducers: {
    selectCountry: (state, action) => {
      const selectedCountryValue = action.payload
      state.selectedCountry = selectedCountryValue

      // Находим нужный объект
      const selectedCountryObject = dataCountries.find(
        (option) => option.country === selectedCountryValue
      )

      if (selectedCountryObject) {
        state.selectedCities = selectedCountryObject.cities
        state.selectedAccommodationOptions =
          selectedCountryObject.accommodationOptions
        state.universityTypes = selectedCountryObject.universityType
        state.isActiveCity = false
      } else {
        state.isActiveCity = true
        state.isActiveUniversityType = true
        state.isActiveAccommodationOption = true
        state.selectedCities = ["выберите город"]
        state.universityTypes = ["выберите тип ВУЗа"]
        state.selectedAccommodationOptions = ["выберите вариант проживания"]
      }
    },
    selectCity: (state, action) => {
      state.selectedCity = action.payload
      state.universityTypes = dataCountries[0].universityType
      state.selectedAccommodationOptions = dataCountries[0].accommodationOptions
      state.isActiveUniversityType = false
      if (state.selectedCity === "выберите город") {
        state.universityTypes = ["выберите вид ВУЗа"]
        state.selectedAccommodationOptions = ["выберите вариант проживания"]
        state.isActiveUniversityType = true
        state.isActiveAccommodationOption = true
      }
    },
    selectUniversityType: (state, action) => {
      state.selectedUniversityType = action.payload
      state.selectedAccommodationOptions = dataCountries[0].accommodationOptions
      state.isActiveAccommodationOption = false
      if (state.selectedUniversityType === "выберите вид ВУЗа") {
        state.selectedAccommodationOptions = ["выберите вариант проживания"]
        state.isActiveAccommodationOption = true
      }
    },
    selectAccommodationPreference: (state, action) => {
      state.selectedAccommodationOption = action.payload
      state.isActiveAccommodationOption = false
    },
  },
})

export const {
  selectCountry,
  selectCity,
  selectUniversityType,
  selectAccommodationPreference,
} = selectedCategoriesStateSlice.actions
export default selectedCategoriesStateSlice.reducer
