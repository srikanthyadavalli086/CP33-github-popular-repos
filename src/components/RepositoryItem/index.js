// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    starsCount,
    forksCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <li className="li">
      <img className="image" src={avatarUrl} alt={name} />
      <p className="name">{name}</p>
      <div>
        <p>{starsCount} stars</p>
        <p>{forksCount} forks</p>
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
