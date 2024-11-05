import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NHLNewsType } from "./types";
import NewsCard from "./components/NewsCard";
import { Link } from "react-router-dom";

const NHLNews = () => {
  const {data} = useQuery({queryKey: ["NHLNews"], queryFn: async () => {
    const response = await axios.get("http://localhost:8080/api/v1/hockey/news");
    return response.data as NHLNewsType[];
  }})

  return (
    <div className="card-container">
      {data?.map(article => (
        <NewsCard key={article.dataSourceIdentifier} news={article} />
      ))}
      <h3>Other NHL Pages</h3>
      <ul>
        <li>
          <Link to={"/NHL"}>NHL Standings</Link>
        </li>
      </ul>
    </div>
  )


}

export default NHLNews;