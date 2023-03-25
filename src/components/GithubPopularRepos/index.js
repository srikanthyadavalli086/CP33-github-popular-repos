import {Component} from 'react'

import RepositoryItem from '../RepositoryItem'

import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    repositoriesList: [],
    activeOptionId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const {activeOptionId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeOptionId}`

    const response = await fetch(apiUrl)
    const data = await response.json()
    // console.log(data)
    const updatedData = data.popular_repos.map(repo => ({
      name: repo.name,
      id: repo.id,
      issuesCount: repo.issues_count,
      forksCount: repo.forks_count,
      starsCount: repo.stars_count,
      avatarUrl: repo.avatar_url,
    }))
    this.setState({repositoriesList: updatedData})
  }

  updateActiveOptionId = id => {
    this.setState({activeOptionId: id}, this.getRepositories)
  }

  render() {
    const {repositoriesList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>

        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          updateActiveOptionId={this.updateActiveOptionId}
        />

        <ul className="repositories-container">
          {repositoriesList.map(eachRepository => (
            <RepositoryItem
              repositoryDetails={eachRepository}
              key={eachRepository.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
