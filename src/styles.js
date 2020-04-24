import {StyleSheet} from 'react-native'

export default StyleSheet.create({
box :{
marginVertical:10,
backgroundColor:'black'
},
box1 :{
    backgroundColor:'white',
    marginBottom:5
    },
horizontal:{
flexDirection:'row',
backgroundColor:'white',
flex:1,
marginVertical:10,
marginHorizontal:10
},
boxcenter:{
justifyContent:'center',
alignItems:'center',
flex:1,
backgroundColor:'rgba(0,0,0,0.9)'
},
button:{
backgroundColor:'white',
borderWidth:1,
borderColor:'red',
paddingHorizontal :20,
borderRadius:10,
marginVertical:10,
width:200

},
text:{
    fontSize :20,
    textAlign:'center',
    paddingVertical: 15,
    fontWeight :'bold',
    color:'white'
},
text2:{
    fontSize :20,
    textAlign:'center',
    paddingVertical: 10,
    fontWeight :'bold',
},
text1:{
    fontSize :20,
    color:'white',
    textAlign:'center',
    paddingVertical: 10,
    fontWeight :'bold'
},
name:{
    fontSize :16,
    textAlign:'center',
    paddingVertical: 5,
    fontWeight :'bold'   
},
capital:{
    fontSize :12,
    textAlign:'center',
    paddingVertical: 5,   
}
})