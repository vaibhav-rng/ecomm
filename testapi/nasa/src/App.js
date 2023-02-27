import   axios  from 'axios'
import { useEffect,useState } from 'react';


function App() {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
    .then((data)=>{
      setData(data.data)
      console.log(data.data)
    })
  },[]);


  return (
    <div>
        {data.map((ph)=><div>
          <img src={ph.image} alt=""/>
        </div>)}
        
        
    </div>
  );
}

export default App;
