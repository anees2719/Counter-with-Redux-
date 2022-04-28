import {Container,Typography,TextField,Grow,Grid,Button} from '@material-ui/core'
import useStyles from './app.style'
import {useSelector,useDispatch} from 'react-redux'
import functions from './reducers/functions'
import {incNumber,decNumber} from './actions/index'

function App() {
  const count=useSelector((state)=>state.functions)
  const dispatch=useDispatch()

  const classes=useStyles()
  return <>

    <Container className={classes.container}>
      <Typography variant='h2' className={classes.heading}   >Counter in Redux</Typography>
      <Grid className={classes.grid}>
        <Button variant='contained' color='primary' onClick={()=>dispatch(incNumber())}>Increment</Button>
        <Typography variant='h3'>{count}</Typography>
        <Button variant='contained' color='secondary' onClick={()=>dispatch(decNumber())}>Decrement</Button>
      </Grid>
    </Container>
 
  </>
}

export default App;
