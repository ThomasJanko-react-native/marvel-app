import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getCharacterById } from "../services/characters.service";

const Details = ({ route }) => {
  const { id } = route.params;

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [character, setCharacter] = useState({})

  // Use the item ID to fetch the item details from your data source
  // ...
    useEffect(() => {
      fetchItem()
    }, [])

    async function fetchItem() {
    
        try {
          const response = await getCharacterById(id);
            setCharacter(response[0])
            console.log('Item:', character)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    
    
      if (loading) {
        return <Loader/>
      }
      if (error) {
        return  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text style={{fontSize: 24}}>Error: {error.message}</Text></View> ;
      }
    

  return (
    <View style={{
            backgroundColor: 'black', 
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
        }}>

        <View style={{
            marginTop: 20,
        }}>
            
        </View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      }}>Details for item with ID {id}
      </Text>
      
      {character &&
        <View style={{
            backgroundColor: '#e23636',
            padding: 20,
            width: '80%',
            marginTop: 80,
            height: 200,
            borderRadius: 20,
            shadowColor: "##E5E7E9",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 1,
            shadowRadius: 3.84,
            elevation: 8,
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, width: '50%'}}>
                Character name : <Text style={{fontWeight: '800'}}>{character.name}</Text> 
            </Text>
            <Image
                source={{ uri: character.thumbnail? `${character.thumbnail.path}.${character.thumbnail.extension}` : 'https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg' }}
                style={{ width: 50, height: 50, borderRadius: 10, resizeMode: 'contain' }}
                />
            </View>
            <Text style={{fontSize: 14, marginVertical: 10, fontWeight: 800, }} ellipsizeMode='tail' numberOfLines={4}>
                Description : <Text style={{fontWeight: '400',  fontStyle: 'italic'}}>{character.description ? character.description : 'no description'}</Text> 
            </Text>

        </View>
      }
    </View>
  );
};

export default Details;