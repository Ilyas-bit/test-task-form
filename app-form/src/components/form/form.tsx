import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import * as selectedCategories from "../../state/selected-categories-slice/selected-categories-slice"
import * as useSelectedCategories from "../../state/selected-categories-slice/selectors"
import {
  countriesData,
  citiesData,
  universityData,
  habitationData,
} from "../../data/countries/countries"

import "./styles.css"
import SelectDropdown from "../../components/custom-select/custom-select"
import { findCityById, findHabitationTypeById } from "../../alert/alert"

export const CustomForm: React.FC = () => {
  const dispatch = useDispatch()

  const selectedCountry = useSelectedCategories.MemoizedSelectedCountry()
  const selectedCity = useSelectedCategories.MemoizedSelectedCity()
  const selectedUniversity = useSelectedCategories.MemoizedSelectedUniversity()
  const selectedHabitation = useSelectedCategories.MemoizedSelectedHabitation()

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const country = countriesData.find(
        (country) => country.id === selectedCountry
      )
      let city
      if (country) {
        city = findCityById(country?.id, selectedCity, citiesData)
      }
      const university = universityData.find(
        (university) => university.id === selectedUniversity
      )
      let habitation
      if (country) {
        habitation = findHabitationTypeById(
          country?.id,
          selectedHabitation,
          habitationData
        )
      }

      const message = `Вы выбрали: 
  Страна: ${country?.name}, 
  Город: ${city?.name}, 
  Тип ВУЗа: ${university?.name}, 
  Вариант проживания: ${habitation?.name}`
      alert(message)
      dispatch(selectedCategories.clearSelectedCategories())
    },
    [
      selectedCountry,
      selectedCity,
      selectedUniversity,
      selectedHabitation,
      dispatch,
    ]
  )

  const handleChangeCountry = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectedCategories.selectCountry(e.target.value))
    },
    [dispatch]
  )
  const handleChangeCity = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectedCategories.selectCity(e.target.value))
    },
    [dispatch]
  )
  const handleChangeUniversity = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectedCategories.selectUniversity(e.target.value))
    },
    [dispatch]
  )
  const handleChangeHabitation = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectedCategories.selectHabitation(e.target.value))
    },
    [dispatch]
  )

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <SelectDropdown
            options={countriesData}
            value={selectedCountry}
            onChange={handleChangeCountry}
            disabled={false}
            placeholder="Выберите страну"
          />
          <SelectDropdown
            options={(selectedCountry && citiesData[selectedCountry]) || []}
            value={selectedCity}
            onChange={handleChangeCity}
            disabled={!selectedCountry}
            placeholder="Выберите город"
          />

          <SelectDropdown
            options={universityData}
            value={selectedUniversity}
            onChange={handleChangeUniversity}
            disabled={!selectedCity}
            placeholder="Выберите тип вуза"
          />
          <SelectDropdown
            options={(selectedCountry && habitationData[selectedCountry]) || []}
            value={selectedHabitation}
            onChange={handleChangeHabitation}
            disabled={!selectedUniversity}
            placeholder="Выберите вариант проживания"
          />
          <button
            disabled={!selectedHabitation}
            type="submit"
            className={`${!selectedHabitation ? "disabled" : ""}`}
          >
            Отправить!
          </button>
        </div>
      </form>
    </div>
  )
}
