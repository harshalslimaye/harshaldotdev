import Link from 'next/link';
import Layout from '../components/layout';

const PageNotFound = () => {
  return (
    <Layout title={'404! Page not found!'} description={'Page not found!'}>
      <div className="text-center pt-20">
        <h2>404 | Page not found</h2>
        <p>The page you're looking for deoesn't exist.</p>
        <p><Link href={"/"}>Click here</Link> to go back to home.</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
