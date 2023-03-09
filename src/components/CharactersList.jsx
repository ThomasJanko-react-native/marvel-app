import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import getCharacters from '../services/characters.service';

const CharactersList = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
    try {
      const response = await getCharacters();
      setCharacters(response);
      console.log(response)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24}}>Loading...</Text></View> ;
    // return <Loader/>
  }
  if (error) {
    return  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24}}>Error: {error.message}</Text></View> ;
  }
    
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>Characters List</Text>
            </View>
            <View style={{marginTop: 20}}>
            <FlatList style={styles.list}
                data={characters}
                renderItem={({ item }) => <ItemCard item={item} />}
                keyExtractor={(item) => item.id}
      />
            </View>
        </View>
    );
}


const ItemCard = ({item}) => (
    <View>
        <TouchableOpacity>
            <Text style={styles.item}>- {item.name}</Text>
        </TouchableOpacity>
    </View>
);

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
        
      }
})


export default CharactersList;
