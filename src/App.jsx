import gradient from './assets/grad3.jpg';

function App() {
  return (
    <>
      <img src={gradient} alt="" className="background" />
      <div className="title">
        <h1>NPTEL Management System</h1>
      </div>
      <div style={{ textAlign: 'center', margin: '5rem' }}>
        <button className="title__btn">Sign In</button>
      </div>
    </>
  );
}

export default App;
