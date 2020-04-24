import React,{Component} from 'react'
import {View,FlatList ,Text,BackHandler} from 'react-native'
import axios from 'axios'
import * as _ from 'lodash'
import styles from './styles'
import SVGImage from 'react-native-svg-image';

class ListScreen extends Component{
    constructor(props){
        super(props)
    this.state={
        regions:[]
    }
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
        const data= res.data
        this.setState({regions:data})
       
    }).catch((error)=>console.log(error))
    }

    componentDidMount(){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (!this.props.navigation.isFocused()) {
               
                this.props.navigation.goBack()

                }
            
           
            
           });
    }
    render(){
        var data= this.state.regions
        var region = this.props.navigation.state.params.region
        var cdistinct = data.filter(item=>item.region===region)
        const {navigate}= this.props.navigation.navigate
        return(<View style={{flex:1}}>
            <FlatList
            key={cdistinct.area}
            data={cdistinct}
            renderItem={(item)=><View style={styles.horizontal}>
            <SVGImage
            source={{uri:item.item.flag}}
            style={{height:100,width:150,padding:10}}
            />
            <View style={{flex:1}}>
            <Text style={styles.name}>{item.item.name}</Text>
            <Text style={styles.capital}>{item.item.capital}</Text>
            </View>
            </View>
            }
            />
        </View>

        )
    }
}

export default ListScreen;