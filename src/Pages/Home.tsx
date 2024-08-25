
  import Card from "../Components/Card";
  import {MovieListData} from '../staticData'

  
  const Home = () => {
  
    return (
      <>
      <div>{MovieListData.map(item => (
      <Card item={item}/>
        ))}      
    </div>
      </>
    );
  };
  
  export default Home;
  