import Layout from "../components/Layout/Layout";
import { getPageBySlug } from '../api/pages';

const Page = ({page}) => {
    const { title, content } = page;
    return (
        <Layout>
            <h2 className="page-heading">{title.rendered}</h2>
            <div className="page-content" dangerouslySetInnerHTML = { { __html: content.rendered  }}></div>
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const { slug } = query;
    const page = await getPageBySlug(slug)
    return {
        props: {
            page: page[0]
        },
    }
}

export default Page;
