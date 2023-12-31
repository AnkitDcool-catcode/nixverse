/* eslint-disable no-unused-vars */
import  {useState} from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
const Popular = () => {

  const [endpoint, setEndpoint] = useState("movie")
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  
  const onTabChange=(tab)=>{
    setEndpoint(tab==="Movies" ? "movie" : "tv")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Most Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} endPoint={endpoint} loading={loading} />
    </div>
  );
}

export default Popular