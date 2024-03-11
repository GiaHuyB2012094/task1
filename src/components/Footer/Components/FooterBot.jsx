const FooterBot = ({title}) => {
  return (
    <div className='relative h-10'>
        <div className='absolute -z-10 bottom-0 bg-primary-green opacity-50 w-full h-full md:hidden'></div>
        <p className='z-10 text-sm text-white text-center md:mt-5 py-2'>
            {title} 
        </p>
    </div>
  )
}

export default FooterBot
