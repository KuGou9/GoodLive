import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../redux/actions/login';
import Header from '../../components/header/Header';

class Login extends React.Component {
  render() {
    const loginHandler = () => {
      const tel = document.getElementById('tel').value;
      let flag = false;
      if (!tel && !flag) {
        flag = true;
        alert('电话不能为空');
      }
      if (tel.length !== 11 && !flag) {
        flag = true;
        alert('请输入正确的电话号码');
      }
      this.props.loginActions.login(tel);
      localStorage.setItem('token', tel + new Date());
    };
    return (
      <div>
        <Header title="登陆" />
        <div id="login-form">
          <div className="tel">
            <input type="text" id="tel" placeholder="请输入您的手机号码" />
          </div>
          <div className="code">
            <input type="text" />
            <button className="btn">获取验证码</button>
          </div>
          <button onClick={loginHandler}>登陆</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginData: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
