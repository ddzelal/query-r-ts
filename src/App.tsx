import { useQuery} from "react-query"
import { getTodos } from "./api";

function App() {

  const query = useQuery('todos', getTodos)

  console.log(query,"Query");
  return (
    <>
    {query.isLoading ? <>LOADING...</> : <>TU SMA</>}
    </>
  )
}

export default App
