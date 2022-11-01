import { useEffect , useState } from "react";
const useFetch = (url) => {

    const [ispending, setIspending] = useState(true);
    const [errormsg, setErrormessage] = useState(null);
    const [Data, setData] = useState(null);
    useEffect(() => { 
           fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw Error("Could Not Fetch Data From That Resource :(");
              }
              return response.json();
            })
            .then((result) => {
              setData(result);
              setIspending(false);
              setErrormessage(null);
            })
            .catch((error) => {
              setErrormessage(error.message);
              setIspending(false);
            });
       
       
            
         }, []);
      return { Data , errormsg , ispending}

}
 
export default useFetch;