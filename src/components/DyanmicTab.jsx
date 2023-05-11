import React, { useState } from 'react'

const DuanmicTab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    }
    return (
        <div className='tabs'>
            <div className="tabTitle">
                <ul className='tabs-header'>
                    {tabs.map(tab => (

                        <li key={tab.id}
                            className={activeTab === tab.id ? 'activeTab' : ''}
                            onClick={() => handleTabClick(tab.id)}>{tab.title}</li>


                    ))}
                </ul>

            </div>
            <div className="tab-content">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={activeTab === tab.id ? 'active' : 'hidden'}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DuanmicTab