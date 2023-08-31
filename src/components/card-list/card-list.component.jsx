import './card-list.styles.css'
import Card from "../card/card.component";


const CardList = ({ monsters }) => ( 
    <div className="card-list">
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster}/>
    })}
    </div>
)

// class CardList extends Component {
//     render() {
//         // console.log(this.props.monsters)
//         // console.log('render from cardlist')

//         const {monsters} = this.props


//         return (
//             <div className="card-list">
//                 {monsters.map(monster => {
                    
//                     return(
//                         <Card monster={monster}/>
//                 //     <div className="card-container" key={id}>
//                 //         <img src={`https://robohash.org/${id}?set=set2&size=180x180`} 
//                 //         alt={`monster ${name}`} />
//                 //     <h2>{name}</h2>
//                 //     <p>{email}</p>
//                 // </div>
//                 )})}
//             </div>
//         )
//     }
// }

export default CardList