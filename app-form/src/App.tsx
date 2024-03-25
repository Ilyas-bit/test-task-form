import "./App.css"
import { CustomSelect } from "./components/custom-select/custom-select"
import {
  useAccommodationPreferenceListState,
  useCitiesListState,
  useCountryListState,
  useIsDisabledAccommodationPreferenceState,
  useIsDisabledCitiesStates,
  useIsDisabledSubmitState,
  useIsDisabledUniversityTypeState,
  useUniversityTypeListState,
} from "./state/selected-categories-slice/selectors"

function App() {
  const isDisabledSubmitState = useIsDisabledSubmitState()
  const isDisabledCitiesStates = useIsDisabledCitiesStates()
  const isDisabledUniversityTypeState = useIsDisabledUniversityTypeState()
  const isDisabledAccommodationPreferenceState =
    useIsDisabledAccommodationPreferenceState()
  const CountryListState = useCountryListState()
  const citiesListState = useCitiesListState()
  const universityTypeListState = useUniversityTypeListState()
  const accommodationPreferenceListState = useAccommodationPreferenceListState()

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
