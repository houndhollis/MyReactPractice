import React from "react";
import './Login.css'

const Login = () => {
  return <div class="container">
  <div class="login-box">
      <div class="login-tab">
          <div id="user-tab-btn" class="user active">
              <span>로그인</span>
          </div>
          <div id="not-user-tab-btn" class="not-user">
              <span>비회원</span>
          </div>
      </div>
      <div id="login-form" class="login-form">
          <div id="member">
              <div class="member-form" id="member-form-login">
                  <div class="input-form">
                      <div class="icon-box">
                      </div>
                      <input type="text" id="input-id" placeholder="아이디" />
                  </div>
                  <div class="input-form">
                      <div class="icon-box">
                      </div>
                      <input type="password" id="input-pw-login" placeholder="비밀번호" />
                  </div>
              </div>
              <button class="login-btn" onClick={()=>alert('아직 미구현 입니다.')}>로그인</button>
          </div>
          <div id="none-member">
              <div class="member-form">
                  <div class="input-form">
                      <div class="icon-box">
                      </div>
                      <input type="text" id="input-id" placeholder="주문자 명" />
                  </div>
                  <div class="input-form">
                      <div class="icon-box">
                      </div>
                      <input type="text" maxlength="11" id="input-phone" placeholder="휴대폰 번호" />
                  </div>
                  <div class="input-form">
                      <div class="icon-box">
                      </div>
                      <input type="password" id="input-pw" placeholder="주문 비밀번호" />
                  </div>
              </div>
              <button class="login-btn-notuser">비회원 예약하기</button>
          </div>
      </div>
  </div>

  <div class="login-menu">
      <a class="find-id">아이디찾기</a>
      <a class="find-pw">비밀번호찾기</a>
      <a class="join">회원가입</a>
  </div>

  <div>
      <div class="footer-menu">
          <a class="terms-of-service">이용약관</a>
          <a class="privacy-policy">개인정보처리방침</a>
          <a class="inquiry">문의하기</a>
      </div>
      <a class="copyright">Copyright @ FOODPING Corp. All Right Reserved.</a>
  </div>
</div>
};

export default Login;
