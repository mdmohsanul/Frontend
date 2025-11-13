/* 
Derived state in react refers to the state that is computed using the existing state and props means it doesn't need to
be stored separately

*/


const [users, setUsers] = useState([
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
]);

// ❌ BAD: storing derived state
const [activeCount, setActiveCount] = useState(0);

// ❌ then updating manually
useEffect(() => {
  setActiveCount(users.filter(u => u.active).length);
}, [users]);

// ✅ BETTER: derive it directly
const activeCount = users.filter(u => u.active).length;
