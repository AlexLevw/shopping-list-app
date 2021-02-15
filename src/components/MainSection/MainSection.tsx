import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Text } from 'react-native';

interface IItmesList {
  value: string,
  isDone: boolean
}

export default function MainSection() {
  const [inputValue, setInputValue] = useState<string>('');
  const [listItems, setListItems] = useState<IItmesList[]>([]);

  function pressAddInputBtn(): void {
    if (inputValue) {
      setInputValue('');

      const item = {
        value: inputValue,
        isDone: false
      }
      setListItems([...listItems, item]);
    }
  }

  function pressItem(item: IItmesList): void {

  }

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput
          onChangeText={text => setInputValue(text)}
          style={styles.addItemInput} />
        <Button title='+' onPress={pressAddInputBtn} />
      </View>
      <ScrollView style={styles.list}>
        {
          listItems.map((item, id) =>
            <TouchableOpacity
            key={id}
            style={styles.listItem}
            onPress={() => pressItem(item)} >
              <Text style={styles.listItemTitle}>{item.value}</Text>
            </TouchableOpacity>         
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#343A40',
  },
  addItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  addItemInput: {
    width: '86%',
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 25,
    textAlign: 'center'
  },
  list: {
    width: '100%',
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  listItem: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10
  },
  listItemTitle: {
    fontSize: 18
  }
});