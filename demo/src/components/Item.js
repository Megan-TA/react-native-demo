/*
 *
 * @Author: chen_huang 
 * @Date: 2017-09-27 23:49:24 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-28 01:02:17
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

const styles = StyleSheet.create({
    image: {
        flex: 1,
        padding: 15,
        backgroundColor: 'red'
    }
})

// 无状态组件
const Item = (props) => {
    const { title } = props
    return (
        <View>
            
            <Text style = {styles.image}>{ title }</Text>
        </View>
    )
}
export default Item