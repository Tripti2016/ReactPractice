import React from 'react'
import { Link } from 'react-router-dom'
import MySlider from './components/MySlider'
import HeadImg1 from "./assets/icons/sun.svg";
import HeadImg2 from "./assets/icons/buildings.svg";
import HeadImg3 from "./assets/icons/flagbanner.svg";
import HeadImg4 from "./assets/icons/bus.svg";
import HeadImg5 from "./assets/icons/package.svg";
import DuanmicTab from './components/DyanmicTab';
import Event from './container/Event';
import Resort1 from './container/Resort1';
import Info from './container/Info';
import InstaSlider from './components/InstaSlider';
import Accordion from './components/Accordion';
import table from './components/table.json'

const Home = () => {
    const tabs = [
        {
            id: 0,
            title: 'Event',
            content: <Event />
        },
        {
            id: 1,
            title: 'Package',
            content: <Event />,
        },
    ];
    const tabs2 = [
        {
            id: 0,
            title: '강촌',
            content: <Resort1 />,
        },
        {
            id: 1,
            title: '제주',
            content: <div className="resort-wrapper">
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
                            <Link to="contact" className="btn">
                                VIEW MORE
                                <span><img src="../assets/icons/long-arrow-gray.svg" alt="" /></span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    ]
    const tabs3 = [
        {
            id: 0,
            title: "강촌",
            content: <Info />
        },
        {
            id: 1,
            title: "제주",
            content: <Info />
        }
    ]
    const newsAccordion = [
        {
            title: <div>
                <div className="nws-left">
                    <span className="news-tg">스키</span>
                    <p>스키장 얼리버드 특가 안내</p>
                </div>
                <span>22.00.00(화)</span></div>
            , content:
                <div>
                    {table.map((tab) => (
                        <table key={tab.id}>
                            <thead >
                                <tr><th>{tab.no}</th>
                                    <th>{tab.name}</th>
                                    <th>{tab.age}</th>
                                    <th>{tab.profile}</th></tr>

                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    ))}</div>

        },
        {
            title: <div>
                <div className="nws-left">
                    <span className="news-tg">스키</span>
                    <p>스키장 얼리버드 특가 안내</p>
                </div>
                <span>22.00.00(화)</span></div>
            , content:<div>
            {table.map((tab) => (
                <table key={tab.id}>
                    <thead >
                        <tr><th>{tab.no}</th>
                            <th>{tab.name}</th>
                            <th>{tab.age}</th>
                            <th>{tab.profile}</th></tr>

                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            ))}</div>
        },
        {
            title: <div>
                <div className="nws-left">
                    <span className="news-tg">스키</span>
                    <p>스키장 얼리버드 특가 안내</p>
                </div>
                <span>22.00.00(화)</span>
            </div>, content:<div>
                    {table.map((tab) => (
                        <table key={tab.id}>
                            <thead >
                                <tr><th>{tab.no}</th>
                                    <th>{tab.name}</th>
                                    <th>{tab.age}</th>
                                    <th>{tab.profile}</th></tr>

                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    ))}</div>
        },
        {
            title: <div>
                <div className="nws-left">
                    <span className="news-tg">스키</span>
                    <p>스키장 얼리버드 특가 안내</p>
                </div>
                <span>22.00.00(화)</span>
            </div>, content: <div>
                    {table.map((tab) => (
                        <table key={tab.id}>
                            <thead >
                                <tr><th>{tab.no}</th>
                                    <th>{tab.name}</th>
                                    <th>{tab.age}</th>
                                    <th>{tab.profile}</th></tr>

                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    ))}</div>
        },
        {
            title: <div>
                <div className="nws-left">
                    <span className="news-tg">스키</span>
                    <p>스키장 얼리버드 특가 안내</p>
                </div>
                <span>22.00.00(화)</span>
            </div>, content:<div>
                    {table.map((tab) => (
                        <table key={tab.id}>
                            <thead >
                                <tr><th>{tab.no}</th>
                                    <th>{tab.name}</th>
                                    <th>{tab.age}</th>
                                    <th>{tab.profile}</th></tr>

                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    ))}</div>
        },
    ]
    return (
        <div className='home-banner'>
            {/* <!--banner sec---> */}
            <div className="banner-sec">
                <div className="ban-slider">
                    <MySlider />
                </div>
                <div className="ban-details">
                    <div className="ban-details-innr">
                        <div className="ban-left">
                            <span className="time-inn">AM 11 : 54</span>
                            <select>
                                <option>엘리시안 강촌</option>
                                <option>엘리시안 강촌</option>
                            </select>
                            <p>
                                <em><img src={HeadImg1} alt="" /></em> 12℃
                                <span>60%</span>
                            </p>
                        </div>
                        <div className="ban-right">
                            <ul>
                                <li>
                                    <figure><img src={HeadImg2} alt="" /></figure>
                                    <p>객실 예약</p>
                                </li>
                                <li>
                                    <figure>
                                        <img src={HeadImg3} alt="" />
                                    </figure>
                                    <p>골프 예약</p>
                                </li>
                                <li>
                                    <figure><img src={HeadImg4} alt="" /></figure>
                                    <p>셔틀버스 예약</p>
                                </li>
                                <li>
                                    <figure><img src={HeadImg5} alt="" /></figure>
                                    <p>패키지 구매</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--banner end---> */}
            {/* event-sec  */}
            <div className="event-sec">
                <div className="container">


                    <h2 className="sml-font black mb-52">EVENT & PACKAGE</h2>
                    <div className="tab-style">
                        <DuanmicTab tabs={tabs} />
                        <div className="view-more-innr">
                            <Link to="#;" className="view-more-btn">VIEW MORE</Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* event-sec end  */}

            {/* resort-sec  */}
            <div className="resort-sec">
                <div className="container">
                    <div className="container">
                        <h3 className="font-38 mb-52">ELESIAN RESORT</h3>
                    </div>
                    <div className="tab-style2">
                        <DuanmicTab tabs={tabs2} />

                    </div>
                </div>
            </div>

            {/* resort-sec  */}

            {/* info-sec */}
            <div className="info-sec">
                <div className="container">
                    <div className="cmn-top-hdr mb-52">
                        <h3 className="font-38 wh">WEATHER INFO</h3>
                        <Link to="#">VIEW MORE</Link>
                    </div>
                    <div className="tab-style3">
                        <DuanmicTab tabs={tabs3} />
                    </div>
                </div>
            </div>
            {/* info-sec end */}

            {/* <!-- instagram sec --> */}
            <div className="instagram-sec ">
                <div className="container">
                    <h3 className="font-38 mb-52">INSTAGRAM <span>@elysianresort</span></h3>

                    <div className="instagram-wrapper">
                        <div className="insta-left">
                            <img src="../assets/images/insta-pic.jpg" alt="" />
                        </div>
                        <div className="insta-right">
                            <h3 className="font-32">지금, 엘리시안 리조트는 어떤 모습일까요?</h3>
                            <p>사계절 아름다움이 가득한 엘리시안을 생생하게 만나보세요.</p>
                            <InstaSlider />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end instagram sec --> */}

            {/* new-sec  */}
            <div className="news-sec">
                <div className="container">
                    <div className="top-head">
                        <h3>News

                        </h3>
                        <Link to="#">View more</Link>
                    </div>
                    <div className="new-list">

                        <Accordion items={newsAccordion} />
                    </div>
                </div>
            </div>

            {/* news-sec ends  */}
        </div>
    )
}

export default Home