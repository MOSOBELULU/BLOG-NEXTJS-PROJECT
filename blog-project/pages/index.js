import { Fragment } from "react";
import Hero from "../componets/home-page/hero";
import FeaturedPosts from "../componets/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts.util";
function HomePage(props) {
  return (
    <Fragment>
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