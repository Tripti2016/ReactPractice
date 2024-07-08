import React from 'react'
import {Link} from 'react-router-dom'


const Resort1 = () => {
  return (
  <>
    <div className="resort-wrapper">
      <div className="">
        <div className="resort-wrapper-innr">
          <div className="resort-wrapper-left">
            <img src="../assets/images/resort-pic.jpg" alt="" />
          </div>
          <div className="resort-wrapper-right">
            <h3 className="font-32">
              사계절 즐거운 휴식,<br /> 엘리시안 강촌에서 누려보세요.
            </h3>
            <h5>
              엘리시안 강촌은 콘도미니엄과 골프, 스키, 웨딩이 결합된 종합
              리조트이자 가족 휴양지입니다.
            </h5>
            <p>
              편안하고 품격 있게 휴식을 취할 수 있는 콘도미니엄과 강촌의
              아름다운 자연 속에서 최상의 라운딩을 경험할 수 있는
              골프컨트리클럽, 강촌의 겨울 풍경을 만끽하며 짜릿한 레포츠를
              즐길 수 있는 스키장, 그리고 강촌의 자연 속에서 생애 특별한
              순간을 만들 수 있는 웨딩홀과 연회/연수까지 엘리시안 강촌은
              휴양과 레저문화가 공존하는 모두를 위한 사계절
              문화놀이터입니다.
            </p>
            <Link to="/contact" className="btn">
              VIEW MORE
              <span><img src="../assets/icons/long-arrow-gray.svg" alt="" /></span> </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Resort1