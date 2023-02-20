import { useQuery } from "react-query"
 import axios from "axios"

// function RQsuperhero () {
//   const {isLoading, data } = useQuery('super-heroes',  () =>{
//     return  axios.get('http://localhost:4000/superheroes')
//   })

const fetchSuperheroPage = () =>{
  return  axios.get('http://localhost:4000/superheroes')
}
   
function RQsuperhero () {
  const {isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperheroPage)

  if (isLoading) {
    return <h2>Loading...</h2>
}
  if (isError) {
    // return <h2> {error.message} </h2>
  }
    return (
      <>
         <h2>RQsuperero Page</h2>
         {
          data?.data.map((hero:any ) => {
            return <div key = {hero.name} > {hero.name} </div>
          })
         }
      </>
    )
  }
  
  export default RQsuperhero

  