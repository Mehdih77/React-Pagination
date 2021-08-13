import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
     await axios.get('https://jsonplaceholder.typicode.com/posts')
     .then( response => setPosts(response.data))
    }
    getData();
  }, [])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
    <h3 className='text-primary'> My Blog - {currentPage}</h3>
      <Posts posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
