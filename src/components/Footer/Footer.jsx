import imgFooter from '../../assets/bg05.jpg'
import FooterTop from './Components/FooterTop'
import FooterBot from './Components/FooterBot'
const Footer = () => {
  return (
    <div className='relative min-h-footer md:h-72 xl:px-48 -z-10'>
        <img 
            src={imgFooter}
            alt={imgFooter}
            className='w-full absolute h-full object-cover top-0 bottom-0 right-0 left-0 -z-10'
        />
        <FooterTop/>
        <FooterBot title='© 2018. All right reserved:'/>
    </div>
  )
}

export default Footer
