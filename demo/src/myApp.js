/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-27 23:42:42 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-28 01:12:10
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native'

import Item from './components/Item'

const json = [
    {
        id: '0',
        title: '张三'
    },
    {
        id: '1',
        title: '李四'
    },
    {
        id: '2',
        title: '王五'
    },
    {
        id: '3',
        title: '老刘'
    }
]

export default class MyApp extends Component {
    fetchDate = () => {
        fetch('http://api.douban.com/v2/movie/in_theaters')
            .then((response) => response.text())
            .then((res) => {
                const dateJson = JSON.parse(res)
                return dateJson
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.fetchDate()
    }
    render () {
        return (
            <View>
                <FlatList 
                    keyExtractor = {item => item.id}
                    numColumns = {3}
                    columnWrapperStyle = {styles.row}
                    data = { json }
                    renderItem = {({item}) => <Item title = {item.title}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
})