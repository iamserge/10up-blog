import Layout from "../../components/Layout/Layout";
import { getPostBySlug } from '../../api/posts';

const Post = ({post}) => {
    const { title, content } = post;
    return (
        <Layout>
            <h2 className="page-heading">{title.rendered}</h2>
            <div className="page-content" dangerouslySetInnerHTML = { { __html: content.rendered  }}></div>
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const { slug } = query;
    const post = await getPostBySlug(slug)
    return {
        props: {
            post: post[0] ? post[0] : null
        },
    }
}

export default Post;
