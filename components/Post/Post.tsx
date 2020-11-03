import Link from 'next/link';
import styles from './Post.module.scss';

const Post = ({post}) => {
    const { title, excerpt, date, author, slug } = post;
    const publishedOn = new Date(date);
    const formattedDate = `${publishedOn.toLocaleString('en-UK', { month: 'long', day: 'numeric' })}, ${publishedOn.getFullYear()}`;
    const attributeDate = `${publishedOn.getFullYear()}-${('0' + (publishedOn.getMonth()+1)).slice(-2)}-${('0' + publishedOn.getDate()).slice(-2)}`;
    return (
        <article itemScope itemType="http://schema.org/BlogPosting" className={styles.post}>
            <header>
                <h2 itemProp="headline">
                   { title.rendered }    
                </h2>
                <div className="date">
                    <span itemProp="datePublished">
                        <time dateTime={attributeDate}>{formattedDate}</time>
                    </span>
                    <span itemProp="author"> by <strong data-user-id={author}>Jane Doe</strong></span>
                </div>
            </header>
            <div itemProp="articleBody" className="content">
                <div dangerouslySetInnerHTML = { { __html: excerpt.rendered}}></div>
            </div>
            <div className={styles['read-more']}>
                <Link href={`/post/${slug}`}>Read more</Link>    
            </div>
            
        </article>
    )
    
}

export default Post;
