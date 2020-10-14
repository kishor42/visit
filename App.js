import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';


import home from './screen/home';
import destination from './screen/destination';
import profile from './screen/profile';
import Advanture from './screen/Advanture';
import Architecture from './screen/Architecture';
import culture from './screen/culture';
import nature from './screen/nature';
import religious from './screen/religious';
import trekking from './screen/trekking';
import adls from './screen/adls';





const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const profileStack = createStackNavigator();
const destinationStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator 
   screenOptions={{
    headerStyle:{
      backgroundColor: '#fff',
      
    },
   
    headerTintColor: '#333',
      headerTitleStyle:{
        fontWeight: 'bold',  
    }
   }}>


<HomeStack.Screen name="home" component={home} options={{
  title :'VISIT NEPAL',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} color='#333'
    backgroundColor='#fff' onPress={() =>{navigation.openDrawer()
       
    }
   }
   ></Icon.Button>
  ),
  headerRight:() =>(
   <Icon.Button name="ios-search" size={25} color='#333'
   backgroundColor='#fff' onPress={() =>{}} 
  ></Icon.Button>
  )
}}
/>  

<HomeStack.Screen 
        name="Advanture"
        component={Advanture}
        options={({route}) => ({
        
          title: route.params.title,
          headerBackTitleVisible: false,
          backgroundColor: '#7f75f2',
          headerTitle: "ADVANTURE",
          headerTitleAlign:'center',
          
        })}
        />
       
       <HomeStack.Screen 
        name="adls"
        component={adls}
        />

       <HomeStack.Screen 
        name="Architecture"
        component={Architecture}
        />
        
        <HomeStack.Screen 
        name="culture"
        component={culture}
        />
        
        <HomeStack.Screen 
        name="nature"
        component={nature}
        />
        
        <HomeStack.Screen 
        name="religious"
        component={religious}
        />
        
        <HomeStack.Screen 
        name="trekking"
        component={trekking}
        />
        
       
        




</HomeStack.Navigator>
)
  
const destinationStackScreen = ({navigation}) => (
  <destinationStack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor: '#821fe0',
      
    
    },
   
    headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',  
    }
    
   }}>


     <destinationStack.Screen name="destination" component={destination} options={{
       headerLeft: () => (
         <Icon.Button name="md-arrow-back" size={25}
         backgroundColor='#821fe0' onPress={() =>{navigation.navigate("home")
            
         }
        }
        ></Icon.Button>
       )
     }}
     />
   </destinationStack.Navigator>
)
   
const profileStackScreen = ({navigation}) => (
  <profileStack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor: '#821fe0',
    },
  
     
    headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',  
        },
    
    
   }}>
    
   

     <profileStack.Screen name="profile" component={profile} options={{
       headerLeft: () => (
         <Icon.Button name="md-arrow-back" size={25}
         backgroundColor='#821fe0' onPress={() =>{navigation.navigate("home")
            
         }
        }
        ></Icon.Button>
       
       )
     }}
     />
    


   </profileStack.Navigator>

)
   
 
 



function App() {
  return (
    <NavigationContainer>


<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
       <Drawer.Screen name="Destination" component={destinationStackScreen} />
        <Drawer.Screen name="profile" component={profileStackScreen} /> 
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App; 