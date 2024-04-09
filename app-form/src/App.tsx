import "./App.css"
import {
  selectAccommodationPreference,
  selectCity,
  selectCountry,
  selectUniversityType,
} from "./state/selected-categories-slice/selected-categories-slice"
import { useDispatch } from "react-redux"

import { CustomSelect } from "./components/custom-select/custom-select"
import {
  useAccommodationOptionList,
  useCitiesList,
  useCountriesList,
  useIsActiveAccommodationOption,
  useIsActiveCity,
  useIsActiveUniversityTypeList,
  useUniversityTypeList,
} from "./state/selected-categories-slice/selectors"

function App() {
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Form submitted!")
  }

  const countriesList = useCountriesList()
  const CitiesList = useCitiesList()
  const isDisabledCity = useIsActiveCity()

  const universityTypeList = useUniversityTypeList()
  const isDisabledUniversityType = useIsActiveUniversityTypeList()

  const accommodationOptionList = useAccommodationOptionList()
  const isActiveAccommodationOption = useIsActiveAccommodationOption()

  const changeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryValue = event.target.value
    dispatch(selectCountry(selectedCountryValue))
  }

  const changeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityValue = event.target.value
    dispatch(selectCity(selectedCityValue))
  }

  const changeUniversityType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedUniversityTypeValue = event.target.value
    dispatch(selectUniversityType(selectedUniversityTypeValue))
  }

  const changeAccommodationOption = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedAccommodationOptionValue = event.target.value
    dispatch(selectAccommodationPreference(selectedAccommodationOptionValue))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <CustomSelect
          options={countriesList}
          handleChange={changeCountry}
        ></CustomSelect>
        <CustomSelect
          options={CitiesList}
          handleChange={changeCity}
          isDisabled={isDisabledCity}
        ></CustomSelect>
        <CustomSelect
          options={universityTypeList}
          handleChange={changeUniversityType}
          isDisabled={isDisabledUniversityType}
        ></CustomSelect>
        <CustomSelect
          options={accommodationOptionList}
          handleChange={changeAccommodationOption}
          isDisabled={isActiveAccommodationOption}
        ></CustomSelect>
      </div>
    </form>
  )
}

export default App
