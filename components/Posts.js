import Head from 'next/head'
import Link from 'next/link'

const classes = {
    container: "w-4/5 my-12 m-auto",
    postBox: "px-2 py-4 mb-4 bg-gray-100 border-2 rounded-md cursor-pointer transition-all transition-200 hover:border-blue-500"
}

const Posts = ({ posts }) => {
    return (
        <div className={classes.container}>
            <Head>
                <title>Posts</title>
            </Head>

            {posts.map((post, i) => (
                <Link href={`/post/${post.id}`} key={i}>
                    <div className={classes.postBox}>
                        {post.title}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Posts
