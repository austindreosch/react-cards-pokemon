import { useState } from "react";
import axios from "axios";

function useCardFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp(prevIsFacingUp => !prevIsFacingUp);
  };

  return [isFacingUp, flipCard];
}


function useAxios(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(prevData => [...prevData, response.data]);
    });
  }, [url]);

  const addData = newData => {
    setData(prevData => [...prevData, newData]);
  };

  return [data, addData];
}