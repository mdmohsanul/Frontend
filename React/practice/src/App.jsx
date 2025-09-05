
import Todo from './Todo'
import { TodoProvider } from './TodoContext'
import Modal from './Modal'
import Accordian from './Accordian'
import PlainSearchBars from './SearchBars/PlainSearchBars'


const App = () => {
  // const [openModal,setOpenModal] = useState(false)
  return (
    <PlainSearchBars/>
    // <Accordian/>
    // <TodoProvider>
    // <Todo/>
    // </TodoProvider>
//     <>

//     <button onClick={() => setOpenModal(true)}>Open Modal</button>
//       {openModal && (
          
//           <div className="overlay" onClick={() => setOpenModal(false)}>
// <div onClick={(e) => e.stopPropagation()}>
//  <Modal setOpenModal={setOpenModal}/>
// </div>
           
//           </div>
//         )}
//     </>
  )
}
{/* <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/50 min-h-screen"> */}
export default App