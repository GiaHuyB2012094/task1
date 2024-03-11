import FooterCard from "./FooterCard"
import FooterLibrary from "./FooterLibrary"
import FooterTitle from "./FooterTitle"
import { connectFooterData, contactFooterData, libraryFooterData } from '../footerData'

const FooterTop = () => {
  return (
    <div className='flex flex-col justify-between px-5 md:px-0 '>
      <FooterTitle 
          title='liên hệ | điểm tư vấn 3 cùng'
      />

      <div className='py-6 border-t border-green-500'>
          <div className='flex flex-col md:flex-row justify-between gap-2'>
              <FooterCard
                  title="Bạn cần hỗ trợ?"
                  data={contactFooterData}
              />

              <FooterCard
                  title="Kết nối với chúng tôi"
                  data={connectFooterData}
              />
              
              <FooterLibrary
                  title="thư viện ảnh"
                  data={libraryFooterData}
              />
          </div>
      </div>
  </div>
  )
}

export default FooterTop
