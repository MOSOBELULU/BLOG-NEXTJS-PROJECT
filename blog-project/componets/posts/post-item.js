import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image';

export default function PostItem(props) {
  // Destructure the post data from props
  const { title, image, excerpt, date, slug } = props.post;

  // Format the date to a human-readable format
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Construct the image path for the post
  const imagePath = `/images/posts/${slug}/${image}`;

  // Construct the link path to the individual post
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      {/* Create a link to the individual post */}
      <Link href={linkPath}>
        <div className={classes.image}>
          {/* Render the post image using Next.js Image component */}
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
