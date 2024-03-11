import imgFooter from '../../assets/bg05.jpg'
import imgSupport from '../../assets/icon_support.png'

import iconFacebook from '../../assets/icon_facebook.png'
import iconYoutube from '../../assets/icon_youtube.png'
import iconInstagram from '../../assets/icon_instagram.png'
import iconMail from '../../assets/icon_email.png'
import iconPhone from '../../assets/icon_phone.png'
import imgLoctroi1 from '../../assets/01.png';
const Footer = () => {
  return (
    <div className='relative min-h-footer md:h-72 xl:px-48 -z-10'>
        <img 
            src={imgFooter}
            alt={imgFooter}
            className='w-full absolute h-full object-cover top-0 bottom-0 right-0 left-0 -z-10'
        />

        <div className='flex flex-col justify-between '>
            <div className='px-5 md:px-16 w-full '>
                <p className='font-medium text-white uppercase text-base px-2 pt-4 pb-1'>liên hệ
                <span className='px-3'>|</span>
                điểm tư vấn 3 cùng
                </p>
            </div>

            <div className='px-4'>
                <div className='py-6 border-t border-green-500'>
                    <div className='flex flex-col md:flex-row justify-between gap-2'>
                        <div className='text-white text-start py-2 md:w-[30%]'>
                            <p className='text-lg'>Bạn cần hỗ trợ?</p>
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={imgSupport}
                                        alt={imgSupport}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>Hỗ trợ trực tuyến</p>
                                </div>
                            </div>
        
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={iconMail}
                                        alt={iconMail}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>support@loctroi.vn</p>
                                </div>
                            </div>
        
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={iconPhone}
                                        alt={iconPhone}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>1900 56 56 23 (2000 đồng/phút)</p>
                                </div>
                            </div>
                        </div>
        
                        <div className='text-white text-start py-2 md:w-[30%]'>
                            <p className='text-lg'>Kết nối với chúng tôi</p>
                            
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={iconFacebook}
                                        alt={iconFacebook}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>Facebook</p>
                                </div>
                            </div>
        
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={iconYoutube}
                                        alt={iconYoutube}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>Youtube</p>
                                </div>
                            </div>
        
                            <div className='flex flex-col gap-2 py-1'>
                                <div className='flex gap-3 items-center'>
                                    <img
                                        src={iconInstagram}
                                        alt={iconInstagram}
                                        className='w-6 h-6'
                                    />
        
                                    <p className=''>Instagram</p>
                                </div>
                            </div>
                        </div>
        
                        <div className='text-white text-start py-2 md:w-[40%]'>
                            <p className='text-lg'>Thư viện ảnh</p>
        
                            <div className='flex items-center justify-between gap-2 md:gap-3 py-1'>
                               <img
                                src={imgLoctroi1}
                                alt={imgLoctroi1}
                                className='w-16 h-16 md:w-24 md:h-16'
                               />
                               <img
                                src={imgLoctroi1}
                                alt={imgLoctroi1}
                                className='w-16 h-16 md:w-24 md:h-16'
                               />
                               <img
                                src={imgLoctroi1}
                                alt={imgLoctroi1}
                                className='w-16 h-16 md:w-24 md:h-16'
                               />
                               <img
                                src={imgLoctroi1}
                                alt={imgLoctroi1}
                                className='w-16 h-16 md:w-24 md:h-16'
                               />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative h-14'>
                <div className='absolute -z-10 bottom-0 bg-primary-green opacity-50 w-full h-full md:hidden'></div>
                <p className='z-10 text-sm text-white text-center md:mt-5 py-2'>
                    © 2018. All right reserved: 
                </p>
            </div>

        </div>
    </div>
  )
}

export default Footer
