import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import LeftSideNavbar from "../../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../../Shared/RightSideNavbar/RightSideNavbar";
import NewsCard from "../../Shared/NewsCard/NewsCard";


const Home = () => {
  const news = useLoaderData()
  console.log(news)
    return (
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className=" bg-slate-600">
            <RightSideNavbar></RightSideNavbar>
          </div>
          <div className="col-span-2 bg-green-50">
            <h1 className="text-center">News comming Soon</h1>
            {
              news.map(aNews =><NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
            }
          </div>
          <div>
            <LeftSideNavbar></LeftSideNavbar>
          </div>
        </div>
      </div>
    );
};

export default Home;