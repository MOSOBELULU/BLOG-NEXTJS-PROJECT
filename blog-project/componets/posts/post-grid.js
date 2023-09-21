import classes from './post-grid.module.css'
import PostItem from '../posts/post-item'

export default function PostGrid(props) {
    const {posts} = props
  return (
    <div>
      <ul className={classes.grid}>
        {posts.map(post => ( 
        <PostItem key={post.slug} post={post}/>
        ))}
      </ul>
    </div>
  )
}
