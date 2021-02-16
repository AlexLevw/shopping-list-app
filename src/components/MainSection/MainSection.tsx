import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableHighlight, TextInput, Text } from 'react-native';

interface IListItem {
  value: string,
  isDone: boolean
}

export default function MainSection() {
  const [inputValue, setInputValue] = useState<string>('');
  const [listItems, setListItems] = useState<IListItem[]>([]);

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

  function pressItem(itemId: number): void {
    const result = listItems.filter((value, index) => itemId !== index);
    setListItems(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput
          onChangeText={text => setInputValue(text)}
          defaultValue={inputValue}
          style={styles.addItemInput} />
        <TouchableHighlight onPress={pressAddInputBtn} style={styles.addItemBtn}>
          <Text style={{fontSize: 24, marginBottom: 3, color: '#fff'}}>+</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.list}>
        {
          listItems.map((item, id) =>
            <TouchableOpacity
            key={id}
            style={styles.listItem}
            onPress={() => pressItem(id)} >
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
    alignItems: 'center',
    padding: 20
  },
  addItemInput: {
    width: '86%',
    height: 30,
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 25,
    textAlign: 'center'
  },
  addItemBtn:{
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#008000',
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