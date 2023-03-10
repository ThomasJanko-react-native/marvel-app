import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {getCharacterById, getCharacters} from '../services/characters.service';
import Loader from './Loader';

const CharactersList = () => {

    const [loading, setLoading] = useState(true);
    const [dataload, setDataload] = useState(false);
    const [error, setError] = useState();

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
    setDataload(true)
    try {
      const response = await getCharacters(page);
        setCharacters((prev) => [...prev, ...response])
        setPage(page + 1)
        setDataload(false)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }


  if (loading) {
    // return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24}}>Loading...</Text></View> ;
    return <Loader/>
  }
  if (error) {
    return  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24}}>Error: {error.message}</Text></View> ;
  }

//   const renderFooter = () => {
//     {dataload && (
//         <Loader/>
//       )}
//   };

  
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>Characters List</Text>
            </View>
            <View style={{marginTop: 20}}>
            <FlatList style={styles.list}
                data={characters}
                renderItem={({ item }) => <ItemCard item={item} />}
                keyExtractor={(item, index) => index}
                onEndReachedThreshold={0.5}
                onEndReached={fetchData}
                // ListFooterComponent={renderFooter}
                bounces

            />
            </View>
            {dataload && <Loader/>}
        </View>
    );
    
}


const ItemCard = ({item}) => {
    const navigation = useNavigation();
    
    const handlePress = () => {
        navigation.navigate("Details", { id: item.id });
    }
    
    return (
    <View>
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.item}>- {item.name}</Text>
        </TouchableOpacity>
    </View>
);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        // alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        padding: 10,
        fontSize: 20,
        height: 44,
        color: 'white',
        fontWeight: 'bold',
      },
      title:{
        fontWeight: 'bold',
        fontSize: 20,
      },
      list: {
        marginLeft: 10,
        height: 500
      }
})


export default CharactersList;
