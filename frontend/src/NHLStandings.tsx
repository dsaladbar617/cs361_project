import { useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'
import { teamStanding } from './types'
import { Link } from 'react-router-dom'

function NHLStandings() {

  const query = useQuery({queryKey: ["standings"], queryFn : async () => {
    const response = await axios.get("http://localhost:8080/api/v1/hockey")
    return response.data as teamStanding[]
  }})


  console.log(query.data);

  return (
    <div className='standings-container'>
      <h1>NHL Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Win</th>
            <th>Loss</th>
            <th>OTL</th>
            <th>GP</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {query.data?.map(team => (
            <tr key={team.teamName.default}>
              <td>{team.leagueSequence}</td>
              <td>{team.teamName.default}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.otLosses}</td>
              <td>{team.gamesPlayed}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Other NHL Pages</h3>
      <ul>
        <li>
          <Link to={"/NHL-News"}>NHL News</Link>
        </li>
      </ul>
    </div>
  )
}

export default NHLStandings;
