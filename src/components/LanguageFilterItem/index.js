import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, updateActiveOptionId} = props
  const onClickLanguage = id => {
    updateActiveOptionId(id)
    console.log(id)
  }

  return (
    <div>
      <ul>
        {languageFiltersData.map(each => (
          <li>
            <button onClick={onClickLanguage(each.id)} type="button">
              {each.language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageFilterItem
