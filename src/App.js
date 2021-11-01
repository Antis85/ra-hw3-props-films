import './App.css';
import Stars from './components/Stars';

export default function App() {
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
