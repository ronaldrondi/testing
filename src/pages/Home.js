import React from 'react';
import { Text } from 'react-native';
import { MyMainContainer , MyMenuRow , MyMenuItem } from '../components/Default';

class Home extends React.Component {
    constructor ( props ) {
        super ( props )
        this.state = {
            data1 : {
                title : 'Deals of the Day' ,
                data : [ //data should be able to be retrieved from API Service's response
                            { // this data is just an example of an API's response
                                id : 1 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '5.0' ,
                                like : false ,
                                type : 'Sport' ,
                                placename : 'Lapangan Futsal Patoenk' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Futsal' ,
                                books : 1000
                            } ,
                            {
                                id : 2 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '4.0' ,
                                like : false ,
                                type : 'Beauty' ,
                                placename : 'Salon Kelapa Sawit' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Make Up, Hair Do' ,
                                books : 1002
                            } ,
                            {
                                id : 3 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '3.5' ,
                                like : false ,
                                type : 'Sport' ,
                                placename : 'Lapangan Badminton Patoenk' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Futsal' ,
                                books : 999
                            }
                ]
            } ,

            data2 : {
                title : 'Popular Places in Jakarta' ,
                data : [ //data should be able to be retrieved from API Service's response
                            { // this data is just an example of an API's response
                                id : 1 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '3.6' ,
                                type : 'Sport' ,
                                placename : 'Lapangan Futsal Patoenk' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Futsal' ,
                                books : 891
                            } ,
                            {
                                id : 2 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '4.2' ,
                                type : 'Beauty' ,
                                placename : 'Salon Kelapa Sawit' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Make Up, Hair Do' ,
                                books : 1128
                            } ,
                            {
                                id : 3 ,
                                image : require('../assets/lapangan-futsal.jpg') ,
                                rating : '4.8' ,
                                type : 'Sport' ,
                                placename : 'Lapangan Badminton Patoenk' ,
                                location : 'Gandaria City, Jakarta Selatan' ,
                                detail : 'Futsal' ,
                                books : 500
                            }
                ]
            }
        }
    }

    likePressed = ( index ) => {
        let data = this.state.data1
        data.data[index].like = !data.data[index].like
        this.setState({
            data1 : data
        })
    }

    likePressed2 = ( index ) => {
        let data = this.state.data2
        data.data[index].like = !data.data[index].like
        this.setState({
            data2 : data
        })
    }

    onBookPressed = ( index ) => {
        let data = this.state.data1
        data.data[index].books += 1
        this.setState({
            data1 : data
        })
    }

    onBookPressed2 = ( index ) => {
        let data = this.state.data2
        data.data[index].books += 1
        this.setState({
            data2 : data
        })
    }

    render () {
        return (
            <MyMainContainer>
                
                <MyMenuRow title = { this.state.data1.title } data = { this.state.data1 } >
                    { this.state.data1.data.map( ( data , index ) => {
                        return (
                            <MyMenuItem dataItem = { data } onLikePressed = { () => this.likePressed( index )} onBookPressed = { () => this.onBookPressed( index ) } key = { index } />
                        )
                    } ) }
                </MyMenuRow>

                <MyMenuRow title = { this.state.data2.title } data = { this.state.data2 } >
                    { this.state.data2.data.map( ( data , index ) => {
                        return (
                            <MyMenuItem dataItem = { data } onLikePressed = { () => this.likePressed2( index ) } onBookPressed = { () => this.onBookPressed2( index ) } key = { index } />
                        )
                    } ) }
                </MyMenuRow>

            </MyMainContainer>
        )
    }
}

export default Home