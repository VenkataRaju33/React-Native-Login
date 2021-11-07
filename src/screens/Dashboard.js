import React,{useEffect,useState} from 'react'
import Background from '../components/Background'
import Header from '../components/Header'

import Button from '../components/Button'
import axios from "react-native-axios"
import {  View ,StyleSheet,Text} from 'react-native'

export default function Dashboard({ navigation }) {

  const[data,setData]=useState()
  const[show,setShow]=useState()

  useEffect(()=>{

    const parameters = {category: "movies",
    language: "kannada",genre: "all",
    sort: "voting" };
    axios.get('https://reqres.in/api/articles', parameters)
        .then(response => setData(response?.data?.data)).then(error=>{console.log(error,"error")});
  },[])
  console.log(data,"data")
  return (
    <Background>

<View  style={styles.info} >
    
    <Button
  
      mode="outlined"
      onPress={() =>
      setShow(true)
      }
    >
      company Info
    </Button>
    {show&&
     <View>
       <Text>Company: Geeksynergy Technologies Pvt Ltd
Address: Sanjayanagar, Bengaluru-56 <br/>
Phone: XXXXXXXXX09<br/>
Email: XXXXXX@gmail.com</Text>
     </View>

    }
    </View>
  
      <Header>MOVIES</Header>

{
  data?.map(movie=>{


    return <View style={styles.movie}>

      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text><Text >{movie.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Year:</Text><Text >{movie.year}</Text>
      </View>
    </View>
  })
}
      




    </Background>
  )
}




const styles = StyleSheet.create({
  company: {
  position:'absolute',
  top:"10px",
  left:"20px"
  },
  row:{
    display:'flex',
    flexDirection:'row'

  },
  info:{
marginBottom:"20px"
  },
  label:{
    fontWeight:'bold',
    marginRight:"10px",
    width:'90px'
  }
  ,
  movie:{
    backgroundColor:"lightgray",
    width:'300px',
    height:'auto',
    padding:'10px',
    marginBottom:'20px'
  }
})
