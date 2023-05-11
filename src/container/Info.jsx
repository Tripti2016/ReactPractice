import React from 'react'

const Info = () => {
  return (
    <div className="row">
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon1.svg" alt="" />
          </figure>
          <span>날씨</span>
        </div>
        <div className="info-btm">
          <span>맑음</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon2.svg" alt="" />
          </figure>
          <span>온도</span>
        </div>
        <div className="info-btm">
          <span>19.3°C</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon3.svg" alt="" />
          </figure>
          <span>강수량</span>
        </div>
        <div className="info-btm">
          <span>0mm</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon4.svg" alt="" />
          </figure>
          <span>최고/최저</span>
        </div>
        <div className="info-btm">
          <span>19 / 6°C</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon5.svg" alt="" />
          </figure>
          <span>습도</span>
        </div>
        <div className="info-btm">
          <span>18%</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon6.svg" alt="" />
          </figure>
          <span>풍향</span>
        </div>
        <div className="info-btm">
          <span>북동쪽</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon7.svg" alt="" />
          </figure>
          <span>풍속</span>
        </div>
        <div className="info-btm">
          <span>2.0m/s</span>
        </div>
      </div>
    </div>
    <div className="info-innr">
      <div className="info-box">
        <div className="info-top">
          <figure>
            <img src="../assets/icons/info-icon8.svg" alt="" />
          </figure>
          <span>미세먼지</span>
        </div>
        <div className="info-btm">
          <span>보통 <br />(31㎍/㎥)</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info