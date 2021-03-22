import Head from 'next/head'
import Posts from '../components/Posts'
import { useRouter } from 'next/router'

const Home = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return "Loading...";
  }

  return (
    <div>
      <Head>
        <title>Simple Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Posts posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  if (!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts
    },
    revalidate: 1,
  }
}

export default Home