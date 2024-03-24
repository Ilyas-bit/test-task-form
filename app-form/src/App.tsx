import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Provider, useDispatch, useSelector } from "react-redux"
import { RootState, store } from "./state/store"
import { CustomSelect } from "./components/custom-select/custom-select"
import { selectCountry } from "./state/selected-categories-slice/selected-categories-slice"

function App() {
  const isDisabledSubmitState = useSelector(
    (state: RootState) => state.categories.isDisabledSabmitState
  )

  const isDisabledCitiesStates = useSelector(
    (state: RootState) => state.categories.isDisabledCitiesState
  )
  const isDisabledUniversityTypeState = useSelector(
    (state: RootState) => state.categories.isDisabledUniversityTypeState
  )
  const isDisabledAccommodationPreferenceState = useSelector(
    (state: RootState) =>
      state.categories.isDisabledAccommodationPreferenceState
  )
  const selectedCountry = useSelector(
    (state: RootState) => state.categories.selectedCitiesState
  )
  const CountryListState = useSelector(
    (state: RootState) => state.categories.CountryListState
  )
  const citiesListState = useSelector(
    (state: RootState) => state.categories.citiesListState
  )
  const universityTypeListState = useSelector(
    (state: RootState) => state.categories.universityTypeListState
  )
  const accommodationPreferenceListState = useSelector(
    (state: RootState) => state.categories.accommodationPreferenceListState
  )
  console.log(selectedCountry)

  return (
    <div className="App">
      <CustomSelect
        options={CountryListState}
        type="country"
        isDisabled={false}
      />
      <CustomSelect
        options={citiesListState}
        type="city"
        isDisabled={isDisabledCitiesStates}
      />
      <CustomSelect
        options={universityTypeListState}
        type="universityType"
        isDisabled={isDisabledUniversityTypeState}
      />
      <CustomSelect
        options={accommodationPreferenceListState}
        type="accommodationPreference"
        isDisabled={isDisabledAccommodationPreferenceState}
      />
      <button disabled={isDisabledSubmitState}>Submit</button>
    </div>
  )
}

export default App
