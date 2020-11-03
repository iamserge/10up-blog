import { getAllPosts } from '../api/posts';
import Layout from "../components/Layout/Layout";
import GreetingSection from "../components/GreetingSection/GreetingSection";
import Posts from "../components/Posts/Posts";
import { useGlobal } from '../providers/global';

const Home = ({posts}) => {
    const { loggedIn } = useGlobal();
    return (
        <Layout>
            { loggedIn ? (
                 <GreetingSection />
            ) : (
                <h2 className="page-heading">Welcome guest!</h2>
            )}
            <div className="page-content">
                <Posts posts={posts} />
            </div>
            
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: {
            posts
        },
    }
}
export default Home;
