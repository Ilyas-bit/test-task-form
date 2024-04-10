import React from "react"
import { useDispatch } from "react-redux"
import * as selectedCategories from "./state/selected-categories-slice/selected-categories-slice"
import * as useSelectedCategories from "./state/selected-categories-slice/selectors"
import {
  countriesData,
  citiesData,
  universityData,
  habitationData,
} from "./data/countries/countries"

import "./App.css"
import SelectDropdown from "./components/custom-select/custom-select"

function App(): JSX.Element {
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = `Вы выбрали: 
    Страна: ${selectedCountry}, 
    Город: ${selectedCity}, 
    Тип ВУЗа: ${selectedUniversity}, 
    Вариант проживания: ${selectedHabitation}`
    alert(message)
    dispatch(selectedCategories.clearSelectedCategories())
  }

  const selectedCountry = useSelectedCategories.useSelectedCountry()
  const selectedCity = useSelectedCategories.useSelectedCity()
  const selectedUniversity = useSelectedCategories.useSelectedUniversity()
  const selectedHabitation = useSelectedCategories.useSelectedHabitation()

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <SelectDropdown
            options={countriesData}
            value={selectedCountry}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(selectedCategories.selectCountry(e.target.value))
            }
            disabled={false}
            placeholder="Выберите страну"
          />
          <SelectDropdown
            options={(selectedCountry && citiesData[selectedCountry]) || []}
            value={selectedCity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(selectedCategories.selectCity(e.target.value))
            }
            disabled={!selectedCountry}
            placeholder="Выберите город"
          />

          <SelectDropdown
            options={universityData}
            value={selectedUniversity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(selectedCategories.selectUniversity(e.target.value))
            }
            disabled={!selectedCity}
            placeholder="Выберите тип вуза"
          />
          <SelectDropdown
            options={(selectedCountry && habitationData[selectedCountry]) || []}
            value={selectedHabitation}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(selectedCategories.selectHabitation(e.target.value))
            }
            disabled={!selectedUniversity}
            placeholder="Выберите вариант проживания"
          />
          <button disabled={!selectedHabitation} type="submit">
            Отправить!
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
