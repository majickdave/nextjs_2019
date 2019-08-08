import Layout from '../components/MyLayout.js'
import Card from '../components/ProjectLayout.js'
import Download from '../components/MyDownload.js'
import Image from '../components/MyImage.js'
import Link from 'next/link'

function getPosts() {
  return [
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1552967220/large_format_cover_kwtscj.png",
      id: 'real-estate', title: "Predicting Rich Attributes in Real Estate Images", url: "https://platform.ai/blog/page/14/predicting-rich-attributes-in-real-estate-images/",
      summ: "Built a web crawler to capture images and metadata from Redfin.com’s newest listings, and developed a few-shot model for predicting property attributes like pool, view, kitchen island, high ceilings, hardwood floors, and fireplace."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1540325011/KS_zgf6ap.png",
      id: 'kickstarter', title: "Kickstarter: Predicting Success", url: "https://www.kaggle.com/majickdave/kickstarter-success-classifier-0-685",
      summ: "This project takes a dataset of over 300,000 Kickstarter projects from 2009 to 2016. Data is cleaned, analyzed, visualized, and prepared for modeling using Multiple Linear Regression to predict the amount pledged for any particular kickstarter."
    },
    { img_url: "https://www.edmtunes.com/wp-content/uploads/2018/04/spotify-logo-computer-wallpaper-62369-64312-hd-wallpapers.jpg",
      id: 'spotify', title: "Spotify Analysis", url: "https://www.kaggle.com/majickdave/kickstarter-success-classifier-0-685",
      summ: "An exploratory data analysis project that aims to understand the highest volume streaming music on Spotify in 2017."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480685/cryptobox-filter_ahskpk.jpg",
      id: 'cryptobox', title: "CryptoBox", url: "https://cryptobox.netlify.com/",
      summ: "CryptoBox brings cryptocurrency to the cloud, and currently offers a Price Ticker & Currency Calculator that helps you manage your cryptocurrency. The calculator allows you to simulate trades & token exchanges."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480686/musicmind_wuqvfr.png",
      id: 'musicmind', title: "MusicMind", url: "https://github.com/majickdave/MusicMind-iOS",
      summ: "MusicMind is a Music Messenger App and Social Network that allows users to connect to their personal music collection or music streaming service, such as their Spotify account. They can then stream songs, and curate and share music video messages to the network, or to other social media platforms. MusicMind has a Database that holds and collects lyrics and other types of music metadata suchch as artist popularity, and audio-analysis features. We are using music metadata, and lyrics to transform songs into visual augmentation, creating a multi-media experience for users to engage more with music in real-time."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480686/twitter_kwvulo.png",
      id: 'twitter', title: "Natural Language Processing using live Twitter data", url: "https://drive.google.com/file/d/0B1NVR7hT8qCOX2s3ZFZoUG9lVnc/view?usp=sharing",
      summ: "This report dives into the process of collecting and analyzing tweets from Twitter's public API. The project details the use of Spark, and nlp library to discover tweets, determine context, and filter topics. As a result of this project, my team was able to analyze thousands of tweets leading up to the 2016 NBA Finals to predict the winner, The Golden State Warriors."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480685/facial_zd74ue.png",
      id: 'emotion', title: "Facial Image Emotional Analysis using Microsoft Cognitive Service", url: "https://drive.google.com/open?id=0B1NVR7hT8qCOdXk3ei10WkNiNjQ",
      summ: "This report was written with a team of peers from SMU in 2016. It covers data collection, analysis and reporting on how public images of the presidential candidates affected their polling numbers on a weekly basis."
    },
    { img_url: "https://drive.google.com/uc?export=download&id=1HDFnN5cnCfbMxZeVtxBdSgijTfiiFdvH",
      id: 'mnist', title: "Classification of MNIST Digits with Keras", url: "https://www.kaggle.com/majickdave/keras-mlp-0-995",
      summ: "This Jupyter notebook was developed by myself demonstrates the power of python, SK-learn, and Keras (runs on TensorFlow) to to get a 99.54% accuracy on kaggle for top 18% of submissions."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480685/btc-eth_zeforu.jpg",
      id: 'blockchain', title: "Survey of Bitcoin, Ethereum, and the future of blockchain", url: "https://drive.google.com/file/d/0B1NVR7hT8qCORHV6T1FrSXY5WHM/view",
      summ: "This report was written with a team of peers from SMU in 2016. It covers data collection, analysis and reporting on how public images of the presidential candidates affected their polling numbers on a weekly basis."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480686/wiki_xztjxi.png",
      id: 'wikipedia', title: "Analysis of Wikipedia Perceptions", url: "https://drive.google.com/open?id=0B1NVR7hT8qCOSUFuRnI3ZEJHVlk",
      summ: "This report was written for SMU statistical Analysis in 2016. It details the relationship and significance of student and instructor perceptions and use of wikipedia for academia."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480686/video-texture_avburn.png",
      id: 'openframeworks', title: "Live Video Texture Mapping", url: "https://github.com/majickdave/Viz_Sketch5",
      summ: "This application was written in C++, and demonstrates the ability of open frameworks to manipulate video data."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480685/ascii-art_n58hso.png",
      id: 'ascii', title: "ASCII Art iOS", url: "https://github.com/majickdave/swift-ascii-art",
      summ: "This application takes photos, and live video and maps the pixel data to ASCII characters."
    },
    { img_url: "https://res.cloudinary.com/mscmnd-com/image/upload/v1520480685/emoji_vgpvyo.jpg",
      id: 'emoji', title: "Mockup of Music to Emoji Translation", url: "https://p5-emoji.herokuapp.com/index.html",
      summ: "This mock visualization simulates what an interactive music to visualization might look like."
    },
  ]
}

const imageStyle = {
  width: '100%',
  height: '100%',
  'max-height': 200,
  'max-width': 300,
  'object-fit': 'cover'
}

const PostLink = ({ post }) => (
  <div>
    <Card>
      <Image>
        <img style={imageStyle} src={post.img_url}></img>
      </Image>
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
  </div>
)

export default function Blog() {
  return (
    <Layout>
      <h1>Welcome to David Samuel's Portfolio</h1>
      <sub>
      David is a software engineer, and machine learning researcher interested in computer vision
      and deep learning applications.
      </sub>
        <div>
          <Link href="https://drive.google.com/file/d/1PNwaTpvGsN0kd1g3phRvbO4oNbAuboRN/view?usp=sharing">
            <a>Download Resume</a>
          </Link>
        </div>

      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1, sub, a {
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
