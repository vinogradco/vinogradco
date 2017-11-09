import React from 'react';
import Loader from 'react-loaders'
import PropTypes from "prop-types";
import jsonp from "jsonp";

const getAjaxUrl = url => url.replace('/post?', '/post-json?');

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault();
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      });
      return;
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status } = this.state
    return (
      <div className={className} style={style}>
        {status != "success" && <form action={action} method="post" noValidate>
          <div>
            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              id="mce-EMAIL"
              required={true}
              placeholder={messages.inputPlaceholder}
            />
            <div className="clear newsletter-button">
              <button
                disabled={this.state.status === "sending" || this.state.status === "success"}
                onClick={this.onSubmit}
                type="submit"
                id="mc-embedded-subscribe"
              >
                {messages.btnLabel}
              </button>
            </div>
          </div>

          {status === "sending" && <Loader type="ball-pulse" className="vino-loader" />}
          {status === "error" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error }} />}
        </form>}
        {status === "success" && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success }} />}
      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "Ваш email",
    btnLabel: "Оставить email",
    sending: "",
    success: "Вы изумительны!",
    error: "Упс, похоже ваш email не действителен :("
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}
/*
const Newsletter = (props) => (
  <div className="newsletter">
    <div id="mc_embed_signup">
      <form action="//gmail.us6.list-manage.com/subscribe/post?u=3122191960b770be28eb0ac9c&amp;id=31de85dbe2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate onSubmit={props.onSubmit}>
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group newsletter-input">
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email"/>
          </div>
          <div className="clear newsletter-button">
            <button type="submit" name="subscribe" id="mc-embedded-subscribe">Оставить email</button>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response"></div>
            <div className="response" id="mce-success-response"></div>
          </div>
          <div id="hidden-mailchimp" aria-hidden="true">
            <input type="text" name="b_3122191960b770be28eb0ac9c_31de85dbe2" tabIndex="-1" value="" />
          </div>
        </div>
      </form>
    </div>
  </div>
);
*/

export default SubscribeForm;
