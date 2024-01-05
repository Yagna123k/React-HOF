import React, { Component } from 'react'

export default class HigherOrderFunctions extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    // display all items
    renderAllItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    //ALL DATA BASED ON USER TYPE
    renderUserItems = ()=>{
        const data = this.state.userData
        const mapRows = data.filter((item)=>{
            return item.user_type == 'Designer'
        }).map((item)=>{
            return (
            <React.Fragment key={item.id}>
                <li className='list-items'>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            )
        })
        return mapRows
    }
    renderNameItemsWithJ = ()=>{
        const data = this.state.userData
        const mapRows = data.filter((item)=>{
            return item.name.toLowerCase().startsWith('j')
        }).map((item)=>{
            return (
            <React.Fragment key={item.id}>
                <li className='list-items'>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            )
        })
        return mapRows
    }

    renderDataWithAge = ()=>{
        const data = this.state.userData
        const mapRows = data.filter((item)=>{
            return 28< item.age<=50
        }).map((item)=>{
            return (
            <React.Fragment key={item.id}>
                <li className='list-items'>
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
            )
        })
        return mapRows
    }

    renderTotalAges = ()=>{
        const data = this.state.userData
        const filters = data.filter((item)=>{
            return item.user_type == 'Designer'
        }).map((item)=>{
            return item.age
        }).reduce((total, age)=>{
            return total + age
        })
        console.log(filters)
        return (<React.Fragment>{filters}</React.Fragment>)
    }



  render() {
    return (
      <>
        <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
                <ul>{this.renderAllItems()} </ul>
            </div>
            <h1>Display Based on User Type</h1>
            <div className="display-box">
                <ul>{this.renderUserItems()} </ul>
            </div>
            <h1>DATA STARTING WITH THE LETTER J</h1>
            <div className="display-box">
                <ul>{this.renderNameItemsWithJ()} </ul>
            </div>
            <h1>DATA BASED ON AGE</h1>
            <div className="display-box">
                <ul>{this.renderDataWithAge()} </ul>
            </div>
            <h1>Total years of experience of the designers</h1>
            <div className="display-box">
                <ul>{this.renderTotalAges()} </ul>
            </div>
          </React.Fragment>
      </>
    )
  }
}
