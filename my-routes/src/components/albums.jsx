import turist1 from '../images/turist1.jpeg';
import turist2 from '../images/turist2.jpeg';
import turist3 from '../images/turist3.jpeg'
import turist4 from '../images/turist4.jpeg';
import turist5 from '../images/turist5.jpeg';
import turist6 from '../images/turist6.jpeg';
import turist7 from '../images/turist7.jpeg';
import turist8 from '../images/turist8.jpeg';
import turist9 from '../images/turist9.jpeg'


const Albums=()=> {
    return (
        <div className='album-container'>
            <div className='items'>
            <img src={turist1} alt="" />
            </div>
            <div className='items itemB'>
            <img src={turist3} alt="" /><img src={turist2} alt="" />
            </div>
            <div className='items '>
            <img src={turist5} alt="" /><img src={turist4} alt="" />
            </div>
            <div className='items'>
            <img src={turist7} alt="" /><img src={turist6} alt="" />
            </div>
            <div className='items'>
            <img src={turist9} alt="" /><img src={turist8} alt="" />
            </div>
        </div>
    )
}
export default Albums;