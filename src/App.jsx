import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[82%] flex-wrap justify-between gap-8 p-2">

        {/*When loading → show 10 skeleton cards */}
        {loading &&
          Array(10)
            .fill(0)
            .map((_, idx) => <Card key={idx} loading={true} />)
        }

        {/*When loaded → show real cards */}
        {!loading &&
          userData.map((elem) => (
            <Card key={elem.id} elem={elem} loading={false} />
          ))
        }

      </div>

      <div className="flex justify-center gap-6 items-center p-4 mt-6">
        <button
          disabled={index === 1 || loading}
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          disabled={loading}
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
