/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-27 23:42:42 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-29 01:30:53
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

const movies = [
    {
        id: '0',
        title: '张三',
        images:  {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    },
    {
        id: '1',
        title: '李四',
        images:  {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        } 
    },
    {
        id: '2',
        title: '王五',
        images:  {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    },
    {
        id: '3',
        title: '老刘',
        images:  {
            medium: 'http://facebook.github.io/react/img/logo_og.png'
        }
    }
]

export default class MyApp extends Component {
    state = {
        movies: movies,
        // 下拉刷新开关
        refreshing: false
    }
    refreshing  = false
    fetchDate = () => {
        // 为了防止多次连续下拉
        if (this.refreshing) return
        this.setState({
            refreshing: true
        })
        this.refreshing = true
        fetch('http://api.douban.com/v2/movie/in_theaters')
            .then((response) => response.text())
            .then((res) => {
                const dataJson = JSON.parse(res)
                console.log(dataJson)
                this.setState({
                    movies: dataJson.subjects,
                    refreshing: false
                })
                this.refreshing = false
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        // this.fetchDate()
    }
    render () {
        const { movies, refreshing } = this.state
        return (
            <View>
                <FlatList 
                    keyExtractor = {item => item.id}
                    numColumns = { 3 }
                    columnWrapperStyle = {styles.row}
                    data = { movies }
                    onRefresh = { this.fetchDate }
                    refreshing = { refreshing }
                    renderItem = {({ item }) => 
                        <Item 
                            title = { item.title }
                            image = { item.images.medium }
                        />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
    }
})