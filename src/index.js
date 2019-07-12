import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../styles/style.css';
import Ajax from 'ajax';

const clickHandlerActionCreator = () => {
    return{
        type: "CLICK_ME"
    }
}

const fetchApiData = (dispatch) => {
    return dispatch => Ajax.get(
      'https://jsonplaceholder.typicode.com/posts/1',
      undefined,
      (response) => {
        return dispatch({
          type: 'FETCH_FINISHED',
          payload: response,
        })
      }
    )
  }

class HelloWorld extends React.Component {
    handleButtonClick = () => {
        this.props.clickHandlerActionCreator();
      }

    fetchApiData = () =>{
        this.props.fetchApiData();
    }
  render() {
    return (
      <div className="mainDiv">
        <h1>Hello World</h1>
        <p> This is a simple hello world example </p>
        <button onClick={this.handleButtonClick}> Click here</button>
        {
            this.props.message && <p> the message is {this.props.message}</p>
        }
        <button onClick={this.fetchApiData}>fetch api</button>
        { this.props.apimessage && <p>this is from api {this.props.apimessage } </p> }
      </div>
    );
  }
}

const mapStateToProps= (state) =>{
    return {
        message : state.message,
        apimessage : state.apimessage
    }
}

const mapDispachToProps = (dispatch) => {
    return bindActionCreators({
        clickHandlerActionCreator,
        fetchApiData : () => fetchApiData(dispatch)
    }, dispatch)
}


export default connect(
    mapStateToProps, mapDispachToProps,
  )(HelloWorld);