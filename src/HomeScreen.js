import React,{Component} from 'react'
import {View,ActivityIndicator,FlatList ,Text,TouchableOpacity,BackHandler,Modal,ScrollView} from 'react-native'
import axios from 'axios'
import * as _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import styles from './styles'
import {Na }from 'react-navigation'
class HomeScreen extends Component{
    constructor(props){
        super(props)
    
    this.state={
        regions:[],
        showprocess:true,
        showmodal:false
    }
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
        const data= res.data
        this.setState({regions:data,showprocess:false})
       
    }).catch((error)=>console.log(error))
    }
    
    componentDidMount(){
        setTimeout(function(){
            SplashScreen.hide()       
          }, 5000);
       
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.navigation.isFocused()) {
              
            this.setState({showmodal:true})
            return true
            }
            return false
           });
    }

    static navigationOptions = {
        header: null,
      };
  
    render(){
        var data= this.state.regions
        var cdistinct = []
        data.map((item)=>cdistinct= [...cdistinct,item.region])
        var region= _.uniq(cdistinct)
        const {navigate}= this.props.navigation
        return(<ScrollView style={{flex:1}}>
              <Modal
    visible={this.state.showmodal}
    transparent
    animationType="slide"
    onRequestClose={()=>{}}
    ><View style={styles.boxcenter}>
        
        <Text style={styles.text1}>Are you sure want to exit?</Text>
        <TouchableOpacity style={styles.button } onPress={()=>BackHandler.exitApp() }>
        <Text style={styles.text2}>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.setState({showmodal:false})}>
        <Text style={styles.text2}>Cancel</Text>
        </TouchableOpacity>
        </View>
    </Modal>
    <View style={[styles.box1]}>
        <Text style={[styles.text,{color:'red'}]}>Regions</Text>
    </View>
            {this.state.showprocess&&<ActivityIndicator size="large"/>}
            <FlatList
            data={region}
            renderItem={(item)=><TouchableOpacity style={styles.box}
                onPress={()=> navigate('Countries',{region:item.item})}>
            <Text style={styles.text}>{item.item===""?'others':item.item}</Text>
            </TouchableOpacity>
            }
            />
        <TouchableOpacity style={[styles.button,{alignSelf:'center'}]} onPress={()=>this.setState({showmodal:true}) }>
        <Text style={styles.text2}>Exit App</Text>
        </TouchableOpacity>
        </ScrollView>

        )
    }
}

export default HomeScreen;