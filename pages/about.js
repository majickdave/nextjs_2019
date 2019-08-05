import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
      <p>Data Scientist and Machine Learning Engineer that just wrapped up teaching a summer course for Google.</p>
      <style jsx>{`
        p {
          font-family: 'Courier New', Courier, monospace;
        }
      `}</style>
    </Layout>
  )
}
