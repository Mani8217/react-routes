
import Albums from '../components/albums';
import dubai from '../images/dubai2.jpeg';
import masal from '../images/masal.jpeg';
import rasht from '../images/rasht.jpeg';
import marmaris from '../images/marmaris.webp';
import bodrum from '../images/bodrum.jpeg';
import isfahan from '../images/isfahan.jpeg';
import cardData from '../cardData';
import Cards from '../components/cards';
const Home = (props) => {
    const myCards = cardData.map((item) => {
        return <>
         <Cards 
          img= {item.coverImg}
          title={item.title}
          text={item.text}
          openspots={item.openspots}
         />
        </>
    }) 
    return (
        <div>
            <Albums />
         <div className='container card-box'>
           {myCards}
         </div>
      </div>
    )
}
export default Home;