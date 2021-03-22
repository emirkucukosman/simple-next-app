import Head from 'next/head'
import { useRouter } from 'next/router'

const classes = {
    container: "w-4/5 my-12 m-auto",
    postBox: "px-2 py-4 mb-4 bg-gray-100 border-2 rounded-md cursor-pointer transition-all transition-200 hover:border-blue-500",
    title: "text-3xl",
    body: "text-xl mt-4",
    button: "bg-blue-500 text-white p-2 mt-6 rounded-md transition-all tansition-200 hover:bg-blue-600 "
}

const PostDetails = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return "Loading..."
    }

    const handleGoBackClick = () => router.back();

    return (
        <div className={classes.container}>
            <Head>
                <title>{post.title}</title>
            </Head>

            <h1 className={classes.title}>
                {post.title}
            </h1>
            <p className={classes.body}>
                {post.body}
            </p>
            <button onClick={handleGoBackClick} className={classes.button}>
                Go Back
            </button>
        </div>
    )
}

export const getStaticPaths = async () => {
    return {
      paths: [{ params: { id: '1' } }],
      fallback: true,
    }
  }

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const post = await response.json();

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        }
    }
}

export default PostDetails