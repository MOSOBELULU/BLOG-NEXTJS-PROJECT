import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/small.jpeg'
         alt='an Image showing me'
          width={300} 
          height={300} />
      </div>
      <div>
        <h1> Hi, I'm Lulugna</h1>
        <p>I blog about web development - esp Frontend</p>
      </div>
    </section>
  )
}
