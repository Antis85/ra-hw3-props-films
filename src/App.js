import './App.css';
import Stars from './components/Stars';
// import Stargazer from './components/Stargazer';

export default function App() {
  // const counts = [
  //   -1, 0, 1, 2, 3, 4, 5, 6, true, false, '', ' ', 'count'
  // ];  
  // return <Stargazer counts={counts} />;
  return (
    <>
      <Stars count={-1} />
      <Stars count={0} />
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
      <Stars count />
      <Stars count={true} />
      <Stars count={false} />           
      <Stars count={'count'} />
      <Stars /> 
    </>
  ); 
}
