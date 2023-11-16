import Header from "./Homepage/header+menu/Header"
import Hero from "./Homepage/hero/Hero";
import Trending from "./Homepage/trending/Trending.jsx";
import Brand from "./Homepage/trending/Brand.jsx";
import Why from "./Homepage/whyus/Why.jsx";
import LocalExperts from "./Homepage/localExperts/LocalExperts.jsx";
import Comment from "./Homepage/comment/Comment.jsx";
import Europe from "./Homepage/europe+asia/Europe.jsx";



const Index=()=>{


    return (
        <div>
            <Header/>
            <Hero/>
            <Trending/>
            <Brand/>
            <Why/>
            <LocalExperts/>
            <Comment/>
            <Europe/>
        </div>
    )
}
export default Index;