import './App.css';
import Categories from './components/Categories/Categories';
import { categoriesData } from './components/Categories/categoriesData';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Navgation/Nav';
import News from './components/News/News';
import { newsData } from './components/News/newsData';
import NewAction from './components/NewsAction/NewAction';
import { newsActionData } from './components/NewsAction/newsactionData';
import Slider from './components/Slider/Slider';
import SubNews from './components/SubNews/SubNews';
import { subnewsData } from './components/SubNews/subnewsData';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='mt-8'>
      <Header/>
        
        <div>
            <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/080623094623769_banner-1832-x-537.jpg" alt="1"/>
        </div>
  
        <div className='px-6 xl:px-48 md:w-full'>
          <div className='min-w-[200px] py-5 flex items-center justify-start xl:justify-between  gap-20 xl:gap-10 
             overflow-x-hidden scroll-auto'>
    
            {categoriesData.map((item, idx) => 
              <div className='flex-shrink-0'>
                <Categories 
                  key={idx} 
                  imgI={item.url} 
                  text={item.text}
                />
              </div>
            )}
          
          </div>
        </div>
  
        <div className='px-6 xl:px-48 py-1'>
          <div className='border-t border-solid w-full py-3'>
            <NewAction 
              title="TIN TỨC HOẠT ĐỘNG"
              dataNew={newsActionData}
            />
          </div>
        </div>
        
        <div className='px-6 xl:px-48 py-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
          {newsData.map((newItem, idx) => (
            <News
              key={idx}
              name={newItem.name}
              title={newItem.title}
              imgI={newItem.imgI}
              desc={newItem.desc}
            />
          ))}
        </div>
        
        <div className='px-6 xl:px-48 py-1 gap-5 justify-between md:grid  md:grid-cols-2'>
          <div className='w-full'>
            <SubNews 
              title="BÍ KÍP NHÀ NÔNG"
              dataNew={subnewsData}
            />
          </div>
  
          <div className='w-full'>
            <SubNews 
              title="THẦN NÔNG VI HÀNH"
              dataNew={subnewsData}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
