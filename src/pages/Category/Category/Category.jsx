import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Shared/NewsCard/NewsCard";

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>This is Category has news: {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;