import CardComponent from "../components/CardComponent";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import TrendingCard from "../components/TrendingCard";
function Blog(){
    return (
        <div>
            <MyNavbar></MyNavbar>
            <CardComponent></CardComponent>
            <TrendingCard></TrendingCard>
            <Footer></Footer>
        </div>
    )
}
export default Blog;