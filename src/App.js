import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchField,setSearchField] =useState('') //[value,setValue---function]
  const [title,setTitle] = useState('')
  const [monsters,setMonsters] = useState([]) 
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
      setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)

  }
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)

  }

  

  return (
    <div className="App">
      {/* <h1 className='app-title'>Monsters Rolodex</h1> */}
      <h1 className='app-title'>{title}</h1>


      <SearchBox 
      className = 'monster-search-box' 
      onChangeHandler = {onSearchChange} 
      placeholder="search monster"/>
      <br />
      <SearchBox 
      className = 'title-search-box' 
      onChangeHandler = {onTitleChange} 
      placeholder="set title"/>

      <CardList monsters={filteredMonsters} />
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
     
//       // monsters: [
//       //   {
//       //     name:'Linda',
//       //     id:'12e1231e'
//       //   },
//       //   {
//       //     name:'Frank',
//       //     id: '12wsdrewsc'
//       //   },
//       //   {
//       //     name:'Jacky',
//       //     id: 'sown123mc'
//       //   },
//       //   {
//       //     name:'Andrei',
//       //     id: 'sdc77362'
//       //   }
//       // ]
//       monsters: [],
//       searchField:""
//       };
//       // console.log('constructor')
//   }


//   componentDidMount() {
//     // console.log('componentDidmount')

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//     this.setState(
//       () => {
//       return {monsters: users}
//     },
//     () => {
//       // console.log(this.state)
//     }
//     ))
//   }

//   onSearchChange = (event) => { 
//     // console.log({startingArray:this.state.monsters})
//     const searchField = event.target.value.toLocaleLowerCase()
    
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     // console.log('render')
//     const { monsters,searchField} = this.state
//     const  { onSearchChange} = this
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//     // const filteredMonsters = this.state.monsters.filter((monster) => {
//     //   return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//     // })

//     return (
//       <div className="App">
//         {/* <input className='search-box' 
//         type='search' 
//         placeholder='search monsters' 
//         onChange={(event) => { 
//           onChange={this.onSearchChange}
//           onChange={onSearchChange}
//           console.log({startingArray:this.state.monsters})
//           const searchField = event.target.value.toLocaleLowerCase()
//           const filteredMonsters = this.state.monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(serachString)
//           })
//           this.setState(() => {
//             return { searchField }
//           })

//           }} 
//           /> */}
        
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//             )
//           })} */}
//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox 
//           className = 'monster-search-box' 
//           onChangeHandler = {onSearchChange} 
//           placeholder="search monster"/>
//           <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
    
//   }
 

export default App;
