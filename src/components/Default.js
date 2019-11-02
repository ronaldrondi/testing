import React from 'react';
import { View , TouchableOpacity , Text , StyleSheet , Dimensions , ScrollView , ImageBackground , Image } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const screens = Dimensions.get('window');

export class MyMainContainer extends React.PureComponent {
    render () {
        return (
            <View style = { this.props.style === undefined ? styles.mainContainer : [ styles.mainContainer , this.props.style ] } >
                <ScrollView showsVerticalScrollIndicator = {false}>
                    { this.props.children }
                </ScrollView>
                
            </View>
        )
    }
}

export class MyButton extends React.PureComponent {
    render () {
        return (
            <View>
                <TouchableOpacity style = { this.props.style === undefined ? styles.button : [ styles.button , this.props.style ] } onPress = { this.props.onPress } >
                    <Text style = { this.props.textStyle === undefined ? styles.buttonText : this.props.textStyle } >{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class MyMenuRow extends React.PureComponent {
    render () {
        return (
            <View style = { this.props.style === undefined ? styles.MyMenuRow : [ styles.MyMenuRow , this.props.style ] } >
                <View style = {{ flexDirection : 'row' , marginLeft : screens.width * 3 / 100 , marginBottom : 10 }} >
                    <View style = {{ width : screens.width * 72 / 100 , justifyContent : 'center' }} >
                        <Text style = { styles.txtMyMenuRowTitle } >{ this.props.title }</Text>
                    </View>

                    <View style = {{ width : screens.width * 25 / 100 , justifyContent : 'center' , alignItems : 'flex-end' , paddingHorizontal : 10 }} >
                        <TouchableOpacity>
                            <Text style = { styles.txtSeeAll } >SEE ALL ></Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
                <ScrollView style = {{ flexDirection : 'row' }} horizontal >
                    { this.props.children }
                </ScrollView>
            </View>
        )
    }
}

export class MyMenuItem extends React.PureComponent {
    render () {
        return (
            <View style = { styles.itemMenu } >
                <ImageBackground style = { styles.itemImage } source = {this.props.dataItem.image} resizeMode = 'stretch' imageStyle = {{ borderTopLeftRadius : 10 , borderTopRightRadius : 10 }} >
                    <View style = {{ paddingHorizontal : screens.width * 2 / 100 , flexDirection : 'row' }} >
                        <View style = { styles.itemRating } >
                            <View style = {{ flexDirection : 'row' , alignItems : 'center' }} >
                                <Icons name = 'star' color = 'white' />
                                <Text style = { styles.txtRating } >  { this.props.dataItem.rating }</Text>
                            </View>
                        </View>

                        <View style = {{ width : screens.width * 42 / 100 , alignItems : 'flex-end' }} >
                            <TouchableOpacity onPress = { this.props.onLikePressed }>
                                <Icons name = 'heart' color = { this.props.dataItem.like === true ? 'red' : 'white' } size = { 20 } />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {{ height : screens.width * 32 / 100 , justifyContent : 'flex-end' , alignItems : 'flex-start' }} >
                        <View style = { [{ height : screens.width * 5 / 100 , justifyContent : 'center' , paddingHorizontal : 15 , borderTopEndRadius : 20 } , this.props.dataItem.type === 'Sport' ? { backgroundColor : '#69e0d6' } : this.props.dataItem.type === 'Beauty' ? { backgroundColor : '#ff87cf' } : {} ] } >
                            <Text style = {{ color : 'rgba(255,255,255,1)' }} >{this.props.dataItem.type}</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style = { styles.itemDescription } >
                    <View style = { styles.descriptionRow } >
                        <Text style = {{ fontSize : 15 , fontWeight : 'bold' }} >{ this.props.dataItem.placename }</Text>
                    </View>

                    <View style = { styles.descriptionRow }>
                        <Text style = {{ fontSize : 11 , fontWeight : 'bold' , color : 'rgba(0,0,0,0.4)' }} >{ this.props.dataItem.location }</Text>
                    </View>

                    <View style = { styles.descriptionRow }>
                        <Text style = {{ fontSize : 11 , fontWeight : 'bold' , color : 'rgba(0,0,0,0.3)' }} >{ this.props.dataItem.detail }</Text>
                    </View>
                </View>

                {/* svg chart should be manually created */}
                <View>
                    <Image source = { require('../assets/time.jpg' ) } width = { screens.width * 60 / 100 } resizeMode = 'stretch' style = {{ width : screens.width * 60 / 100 }}  />
                </View>

                <View style = {{ alignItems : 'center' , paddingVertical : 10 , backgroundColor : '#F8F7FD' }} >
                    <Text style = {{ fontSize : 10 , fontWeight : 'bold' }} >Booked { this.props.dataItem.books } times since yesterday</Text>
                </View>

                <TouchableOpacity style = { styles.btnBook } onPress = { this.props.onBookPressed } >
                    <Text style = {{ fontSize : 16 , fontWeight : 'bold' , color : '#ed7732' }} >BOOK NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1 ,
        backgroundColor : 'white' ,
    } ,

    button : {
        backgroundColor : 'black' ,
        paddingVertical : 10 ,
        alignItems : 'center' ,
        justifyContent : 'center' ,
        borderRadius : 5 ,
        marginVertical : 5 ,
    } ,

    buttonText : {
        color : 'white'
    } ,

    MyMenuRow : {
        marginTop : 20 ,
    } ,

    txtMyMenuRowTitle : {
        fontWeight : 'bold' ,
        fontSize : 20
    } ,

    txtSeeAll : {
        fontSize : 12 ,
        fontWeight : 'bold' ,
        color : '#823bf5' ,
    } ,

    itemMenu : {
        marginLeft : screens.width * 3 / 100 ,
        borderRadius : 10 ,
        borderWidth : 2 ,
        borderColor : 'rgba(0,0,0,0.1)' ,
    } ,

    itemImage : {
        width : screens.width * 60 / 100 ,
        height : screens.width * 40 / 100 ,
        borderRadius : 10 ,
        paddingTop : screens.width * 2 / 100 ,
    } ,

    itemRating : {
        width : screens.width * 12 / 100 ,
        height : screens.width * 6 / 100 ,
        backgroundColor : '#5ccc83' ,
        borderRadius : screens.width * 6 / 100 ,
        alignItems : 'center' ,
        justifyContent : 'center' ,
    } ,

    txtRating : {
        color : 'white' ,
        fontSize : 11 ,
        fontWeight : 'bold'
    } ,

    itemDescription : {
        paddingTop : 10
    } ,

    descriptionRow : {
        paddingHorizontal : screens.width * 3 / 100 ,
        marginBottom : 5
    } ,

    btnBook : {
        height : 35 ,
        backgroundColor : '#F8F7FD' ,
        borderTopWidth : 2 ,
        borderColor : 'rgba(0,0,0,0.1)' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        borderBottomStartRadius : 10 ,
        borderBottomEndRadius : 10 ,
    } ,
})