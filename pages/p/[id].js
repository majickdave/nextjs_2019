import { useRouter } from 'next/router'
import Markdown from 'react-markdown'
import Layout from '../../components/MyLayout.js'

export default () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`
Written by David Samuel

### Working for Google's Applied Machine Learning Intensive

After completing my fellowship in deep learning, I started applying to jobs and
an offer to contract with Google as a machine learning instructor.  They were
piloting a new program at Scripps College, and I was super excited to be a part
of the first college machine learning course offered by Google at a major
University.  By the end of the program, my students had a trained a deep Learning
model on either images or text, and deployed an app that ran the model.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}
