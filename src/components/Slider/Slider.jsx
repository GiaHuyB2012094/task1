import { Carousel } from "react-responsive-carousel"

const Slider = () => {
  return (
    <Carousel autoPlay centerMode>
        <div>
            <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/080623094623769_banner-1832-x-537.jpg" alt="1"/>
            </div>
        <div>
            <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/2_Mang_luagao_rathegioi.png"alt="2" />
            </div>
        <div>
            <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/3_Dich_vu_nong_nghiep.png" alt="3"/>
            </div>
        <div>
            <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/4_Giong_cay_trong.png" alt="4"/>
            </div>
        <div>
            <img src="/UploadFiles/Album/240118101512266/5_Vat_tu_nong_nghiep.png" alt="5"/>
            </div>
    </Carousel>


  )
}

export default Slider
