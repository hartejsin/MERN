import { WorkoutsContext } from "../context/WorkoutsContext"
import { useContext } from "react"

const useWorkoutsContent = () => {
  const context = useContext(WorkoutsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}
 
export default useWorkoutsContent;