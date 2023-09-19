import Tooltip from "./Tooltip";


function App() {
  return (
    <div style={styles.div}>
      
      <Tooltip  position="top">
        <button style={styles.button}>Press</button>
      </Tooltip>
    </div>
  );
}

export default App;

const styles = {
  div:{
    width:500,
    height:500,
    backgroundColor:"rgba(211, 211, 212, 0.41)",
    margin:"auto",
    marginTop:50,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    
  },
  button :{
    padding:20,
    backgroundColor:"#ba0707de",
    color:"white",
    height:60,
    width:100,
    borderRadius:4,
    borderColor:"#ba0707de",
    fontSize:22,
  }
}