import React, {useContext, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {Card, CardItem, Left, Right, Button} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import {Context} from '../../context/store';
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {BottomNavBar}  from '../common/index';

function RestuarantProfile(){
  const [state, dispatch] = useContext(Context);
  const [showButton, setShowButton] = useState(false)
  const [globalCount, setGlobalCount] = useState(0)
  const [globalPrice, setGlobalPrice] = useState(0)
  const [globalItems, setGlobalItems] = useState([])

  const submit =()=>{
    let load ={
      count: globalCount,
      totalPrice: globalPrice,
      items: globalItems
    }
    dispatch({type: 'SET_SHOPPING_CART', payload: load});
    Actions.home();
  }
  return (
    <View>
      <ScrollView>
        <View style={styles.topView}>
        <ImageBackground style={styles.backgroundImageSize} source={state.restaurantProfile.image}>
        </ImageBackground>
        <View style={styles.overlay} />
      </View>
      <Card style={styles.storeBox}>
        <Text style={styles.title}>{state.restaurantProfile.title}</Text>
        <Text style={styles.regularText}><EntypoIcon name="location-pin" size={20} color={"#3EBC21"}/>{state.restaurantProfile.distance}</Text>
        <Text style={styles.regularText}>{state.restaurantProfile.posted}</Text>
        <Text style={styles.regularText}>{state.restaurantProfile.type}</Text>
      </Card>
      <ScrollView>
        <Text style={styles.sectionTitle}>Avaliable</Text>
        {state.restaurantProfile.avaliable.map((food)=>{
          const [count, updateCount] = useState(0)
          // const [items, setItems] = useState([])
          function addToCount(){
            if(!showButton) setShowButton(true)
            if(count===food.quantity) return;
            if(globalItems.length > 0){
              for(let i=0; i<globalItems.length; i++){
                console.log(globalItems[i].id === food.id)
                if(globalItems[i].id === food.id){
                  let newArr = globalItems
                  newArr[i].quantity ++;
                  console.log(newArr)
                  setGlobalItems(newArr)
                  i = globalItems.length
                } 
                else if(globalItems[i].id !== food.id && i===globalItems.length-1){
                  let newItem={
                    id:food.id,
                    name: food.name,
                    price: food.priceAfter,
                    image: food.image,
                    quantity:1
                  }
                  setGlobalItems(globalItems.concat(newItem))
                }
              }
            }else{
              let newItem={
                id:food.id,
                name: food.name,
                price: food.priceAfter,
                image: food.image,
                quantity:1
              }
              setGlobalItems(globalItems.concat(newItem))
            }
            updateCount(count+1)
            setGlobalCount(globalCount+1)
            setGlobalPrice(globalPrice + food.priceAfter)
          }
          function minusFromCount(){
            if(showButton && count === 0) setShowButton(true)
            if(count===0) return;
            if(globalItems.length > 0){
              for(let i=0; i<globalItems.length; i++){
                if(globalItems[i].id === food.id){
                  let newArr= globalItems
                  newArr[i].quanity--;
                  if(newArr[i].quanity === 0){
                    newArr.splice(i,1)
                  }
                  setGlobalItems(newArr)                 
                  i = globalItems.length
                } 
              }
            }
            updateCount(count-1)   
            setGlobalCount(globalCount-1)
            setGlobalPrice(globalPrice - food.priceAfter)
          }
          return(
            <Card style={styles.foodContainer}>
                <CardItem>
                  <Left style={{flexDirection:'column', flex:2}}>                  
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text style={styles.ingredients}>{food.ingredients}</Text>
                  </Left>
                  <Right style={{ flex:1.25}}>
                    <Image style={styles.imageStyle} source={food.image}/>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left style={styles.bottomLeftSection}>
                    <Text><Text style={{textDecorationLine: 'line-through', color:"red"}}>{"$"+food.priceBefore}</Text>{"    "}{"$"+food.priceAfter}</Text>
                    <Text>{food.quantity}{" Remaining"}</Text>
                  </Left>   
                  <Right style={{flexDirection:'row',flex:1.25, justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>minusFromCount()}><AntDesignIcon name="minuscircleo" size={25} color={"#3EBC21"}/></TouchableOpacity>
                    <Text style={{fontSize:20}}>  {count}  </Text>
                    <TouchableOpacity onPress={()=>addToCount()}><AntDesignIcon name="pluscircleo" size={25} color={"#3EBC21"}/></TouchableOpacity>
                  </Right>
                </CardItem>
            </Card>
          )
        })} 
        <Text style={styles.sectionTitle2}>Unavaliable</Text>
        {state.restaurantProfile.unavaliable.map((food)=>{
          return(
            <Card style={styles.foodContainer}>
                <CardItem>
                  <Left style={{flexDirection:'column', flex:2}}>                  
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text style={styles.ingredients}>{food.ingredients}</Text>
                  </Left>
                  <Right style={{ flex:1.25}}>
                    <Image style={styles.imageStyle} source={food.image}/>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left style={styles.bottomLeftSection}>
                    <Text><Text style={{textDecorationLine: 'line-through', color:"red"}}>{food.priceBefore}</Text>{"    "}{food.priceAfter}</Text>
                    <Text>{food.quantity}{" Remaining"}</Text>
                  </Left>   
                </CardItem>
            </Card>
          )
        })}       
      </ScrollView>
      </ScrollView> 
      {showButton?<Button style={styles.AddToCardButton} onPress={()=>submit()}><Text style={styles.buttonText}>Add {globalCount} items to Cart</Text></Button>:null}
      <BottomNavBar customStyle={{position:'absolute',
        bottom:0}} state={state}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'95%',
    flex:1,
    alignSelf:'center',
    marginTop:'2%',
    borderRadius:5
  },
  mapContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height:'70%'
  },
  imageSize:{
    flex:1,
    height:100,
  },
  bodyStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:"space-around"
  },
  title:{
    fontWeight:'bold',
    fontSize:25,
    alignSelf:'center',
    marginTop:'10%',
    marginBottom:"3%",
  },
  topView:{
    height:200,
    width:'100%',
    backgroundColor:'grey'
  },
  backgroundImageSize:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex:1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex:2
  },
  storeBox:{
    width:"75%",
    height:180,
    backgroundColor:'white',
    zIndex:10,
    position:'absolute',
    top: 60,
    bottom: 0,
    alignSelf:'center'
  },
  regularText:{
    alignSelf:'center',
    marginBottom:"3%",
  },
  sectionTitle:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:"18%",
    marginLeft:20
  },
  sectionTitle2:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:"10%",
    marginLeft:20
  },
  foodContainer:{
    width:'90%',
    height:200,
    alignSelf:'center',
    borderRadius:5
  },
  foodName:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'flex-start'
  },
  ingredients:{
    alignSelf:'flex-start'
  },
  imageStyle:{
    width:120,
    height:100
  },
  bottomLeftSection:{
    flex:2, 
    flexDirection:'column', 
    alignItems:'flex-start',
  },
  AddToCardButton:{
    position:'absolute',
    width:'100%',
    padding:5,
    bottom:55,
    backgroundColor:"#3EBC21"
  },
  buttonText:{
    marginLeft:'auto',
    marginRight:'auto',
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  
})

export default RestuarantProfile