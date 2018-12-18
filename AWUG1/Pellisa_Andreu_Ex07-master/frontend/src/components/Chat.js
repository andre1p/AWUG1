import React, { Component } from 'react'
let isFirstName = false;

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messagesArray: [{
        user: "",
        message: "",
        className: ""
      }]

    }
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(event) {

    event.preventDefault();
    if (isFirstName) {

      let messageFields = [{
        user: "Bird",
        message: event.target.messageField.value,
        className: "rightMessage"
      }];

      this.setState((previousState) => ({
        messagesArray: previousState.messagesArray.concat(messageFields)
      }));

      isFirstName = false;

    } else {

      let messageFields = [{
        user: "Flappy",
        message: event.target.messageField.value,
        className: "leftMessage"
      }];

      this.setState((previousState) => ({
        messagesArray: previousState.messagesArray.concat(messageFields)
      }));

      isFirstName = true;
    }

    event.target.reset();
  }
  render() {
    return (
      
      <div className = "Chat" >
      
            <div className="leftMessage">
                Hi!
              <div className="nameLeft">
                    Flappy
              </div>
            </div>

            <div className="rightMessage">
                Hi!
              <div className="nameRight">
                    Bird
              </div>
            </div>

            <div className="leftMessage">
                How are you?
              <div className="nameLeft">
                    Flappy
              </div>
            </div>

            <div className="rightMessage">
                Fine, and you?
              <div className="nameRight">
                    Bird
              </div>
            </div>

            <div className="leftMessage">
                Fine too!
              <div className="nameLeft">
                    Flappy
              </div>
            </div>

            <div className="rightMessage">
                How's life going?
              <div className="nameRight">
                    Bird
              </div>
            </div>

            <div>
          <div className="messagesContainer">
              {this.state.messagesArray.map((msg, index) =>
                <div key={index} className={msg.className}>
                  {msg.message}
                  <div className="nameLeft">{msg.user} </div>
                </div>)
              }
            </div>
          <div className="Send">
              <form onSubmit={this.submitMessage}>
                <input type="text" className="textBox" name="messageField"></input>
                <input type="submit" value="Send" className="buttonSend" />
              </form>
            </div>
        </div>
        </div>
      
    );
  }
}
