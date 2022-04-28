import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(()=>({
    container:{
        border:'2 black',
        margin:100

    },
    heading :{
        color:'blue',
        textAlign:'center',
        marginBottom:10,
        textDecoration:'underline'


    },

    grid:{
        display:'flex',
        justifyContent:'space-between'

    },

    button :{

    }

    

}))


export default useStyles