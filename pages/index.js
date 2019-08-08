import Layout from '../components/MyLayout.js'
import Card from '../components/ProjectLayout.js'
import Download from '../components/MyDownload.js'
import Image from '../components/MyImage.js'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'real-estate', title: "Predicting Rich Attributes in Real Estate Images", url: "https://platform.ai/blog/page/14/predicting-rich-attributes-in-real-estate-images/",
      summ: "Built a web crawler to capture images and metadata from Redfin.com’s newest listings, and developed a few-shot model for predicting property attributes like pool, view, kitchen island, high ceilings, hardwood floors, and fireplace."
    },
    { id: 'kickstarter', title: "Kickstarter: Predicting Success", url: "https://www.kaggle.com/majickdave/kickstarter-success-classifier-0-685",
      summ: "This project takes a dataset of over 300,000 Kickstarter projects from 2009 to 2016. Data is cleaned, analyzed, visualized, and prepared for modeling using Multiple Linear Regression to predict the amount pledged for any particular kickstarter."
    },
    { id: 'spotify', title: "Spotify Analysis", url: "https://www.kaggle.com/majickdave/kickstarter-success-classifier-0-685",
      summ: "An exploratory data analysis project that aims to understand the highest volume streaming music on Spotify in 2017."
    },
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Card>
      <img src={post.img_url}>
      </img>
      <Link href={post.url}>
        <a>{post.title}</a>
      </Link>
        <p>{post.summ}</p>
    </Card>
    <style jsx>{`

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>Welcome to David Samuel's Portfolio</h1>
      <sub>
      David is a software engineer, and machine learning researcher interested in computer vision
      and deep learning applications.
      </sub>
      <Download>Download Resume</Download>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Helvetica';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}
