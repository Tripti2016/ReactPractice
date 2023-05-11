import React, { useState } from 'react'
import DuanmicTab from '../components/DyanmicTab'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [password, setPassword] = useState('');

  const contactTabs1 = [
    {
      id: 0,
      title: "온라인회원",
      content: <div>
        <form>
          <div className="inner-border-box">
            <div className="login-sub-heading">
              <h3>온라인회원</h3>
              <p className="light-gray-text">마니아.파트너.협력사.GS 임직원</p>
            </div>
            <div>
              <div className="login-form-area mt-48">
                <div className="login-inputfill-inner">
                  <div className="form-group">
                    <label>아이디</label>
                    <input type="email" placeholder="아이디를 입력해주세요" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호를 입력해주세요" className="form-control" />
                  </div>
                </div>
                <div className="radio-link-outer">
                  <div className="left-radio">
                    <label className="radio-input">
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                      <p>아이디 저장</p>
                    </label>
                  </div>
                  <div className="right-links">
                    <ul>
                      <li><Link to="#">회원가입</Link></li>
                      <li><Link to="#">아이디 찾기</Link></li>
                      <li><Link to="#}">비밀번호 재설정</Link></li>

                    </ul>
                  </div>
                </div>
                <div className="login-btn mt-48">

                  <Link to="#}" className='btn'>비밀번호 재설정</Link>
                </div>
                <div className="login-bttmtext mt-48">
                  <p>기존 엘리시안 강촌/앨리시안 제주 계정이 있으신 분은 해당 아이디로 로그인하시기 바랍니다.</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    },
    {
      id: 1,
      title: "분양회원",
      content: <div>
        <form>
          <div className="inner-border-box">
            <div className="login-sub-heading">
              <h3>분양회원</h3>
              <p className="light-gray-text">분양 개인/법인</p>
            </div>
            <div>
              <div className="login-form-area mt-48">
                <div className="login-inputfill-inner">
                  <div className="form-group">
                    <label>회원번호</label>
                    <input type="number" placeholder="회원번호를 입력해주세요" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호를 입력해주세요" className="form-control" />
                  </div>
                </div>
                <div className="radio-link-outer">
                  <div className="left-radio">
                    <label className="radio-input">
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                      <p>회원번호 저장</p>
                    </label>
                  </div>
                  <div className="right-links">
                    <ul>
                      <li><Link to="#">비밀번호 재설정</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="login-btn mt-48">

                  <Link to="/" className="btn">로그인</Link>
                </div>
                <div className="login-bttmtext mt-48">
                  <p>분양회원은 회원번호로 로그인이 가능합니다. <br /> 분양 개인/법인 회원번호, 비밀번호는 채널톡으로 문의해주세요.</p>
                </div>

                <form className='password'>
                  <label>Password</label>
                  <input type="password" className="password-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                </form>

              </div>
            </div>
          </div>
        </form>
      </div>
    }
  ]
  return (
    <div className='conatct-Wrapper'>
      <div className="container">
        <div className="login__area">
          <div className="login-heading">
            <h2>로그인</h2>
            <h4>엘리시안에 오신 여러분들을 환영합니다.</h4>
          </div>
          <div className="login-tab">
            <DuanmicTab tabs={contactTabs1} /></div>
        </div>
        <div className="simple-border-text">
          <h4>SNS simple login</h4>
        </div>
        <div className="login-bttm-social">
          <ul>
            <li>
              <Link to="/">
                <img src="../assets/icons/login-facebook.svg" alt="" />
                <span>페이스북</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <img src="../assets/icons/sns.svg" alt="" />
                <span>네이버</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="../assets/icons/kakaotalk.svg" alt="" />
                <span>카카오톡</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="gs-point-area">
        <div className="container">
          <div className="gspoint-outer">
            <div className="gs-point-left">
              <h2>엘리시안 리조트 <span>GS&POINT 혜택 </span></h2>
              <p>전국 GS&POINT 제휴사와 제휴 가맹점 이용 시사용금액에 따라 포인트를 적립되고, 포인트로 다양한 혜택을 누릴 수 있는 GS&POINT</p>
              <div class="gs-btns-outer">
                <button className="btn btn-secondary-outline">멤버십 가입안내</button>
                <button className="btn btn-secondary">GS&POINT 바로가기</button>
              </div>
            </div>
            <div className="gs-point-right">
              <div className="gspoint-cirle-item">
                <h5>시설 예약 및E-SHOP 구매 시 포인트 적립 ∙ 사용 가능 </h5>
              </div>
              <div className="gspoint-cirle-item">
                <h5>우수 고객에게 각종 할인쿠폰 및 추가 포인트 적립 </h5>
              </div>
              <div className="gspoint-cirle-item">
                <h5>현금결제시 0.5% 카드결제시 0.2% 포인트 적립 </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact