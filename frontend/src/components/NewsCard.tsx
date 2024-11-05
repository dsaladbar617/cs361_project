import { NHLNewsType } from "../types";

type NewsCardProps = {
  news: NHLNewsType;
}

const NewsCard = ({news} : NewsCardProps) => {
  return (
    <div className="card">
      <h3>{news.headline}</h3>
      <p>{news.description}</p>
      <p>Link: <a href={news.links.web.href}>ESPN</a></p>
    </div>
  )

}

export default NewsCard;