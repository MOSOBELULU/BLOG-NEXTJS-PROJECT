import Head from 'next/head'
import { Fragment } from "react";
import Hero from "../componets/home-page/hero";
import FeaturedPosts from "../componets/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts.util";


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          Lulu' Blog
        </title>
        <meta name='description' content='I post about programming and web development' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps (){
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
}
export default HomePage;