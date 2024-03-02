import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('apiData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error("fetching data faild...⚠");
        }
        return res.json();
      })
      .then(data => {
        setData(data.recipes);
        localStorage.setItem('apiData', JSON.stringify(data.recipes));
        console.log(data);
      })
      .catch((err) => {
        setError(err.message)
      });
    }

    const storedData2 =localStorage.getItem('apiData2')
    if(storedData2) {
      setData2(JSON.parse(storedData2));
    } else {
      fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error("fetching data faild...⚠");
        }
        return res.json();
      })
      .then(data2 => {
        setData2(data2.recipes);
        localStorage.setItem('apiData2', JSON.stringify(data2.recipes));
        console.log(data2);
      })
      .catch((err) => {
        setError(err.message)
      });
    }

  }, [url]);

  return {data, data2, error}
}
 
export default useFetch;