import React from 'react';
import './index.css';
import axios from "axios";


function MainPage() {
    const [journals, setjournals] = React.useState([]);
    React.useEffect(
        function(){
            axios.get("https://f0700974-5bd6-486a-a776-a5954c698dff.mock.pstmn.io/journals")
    .then(function(result){
        const journals = result.data.journals;
        setjournals(journals);
    }).catch(function(error){
        console.error("에러 발생 : ",error);
    });
        },[]
    );
    
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/banner/owl-banner.png" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banner/banner1.png" />
                <h1>사용자의 공간</h1>
                </div>
                <div id="journal-list">
                    {
                        /*TypeError: Cannot read properties of undefined (reading 'map') 오류 && 이용 해결*/
                        journals && journals.map(function (journal, index) {
                            return(
                                <div className="journal-card">
                                    <div>
                                        <img className="journal-img" src={journal.imageUrl}/>
                                    </div>
                                    <div className="journal-contents">
                                        <span className='journal-name'>{journal.name}</span>
                                        <span className='journal-start-day'>{journal.startDay}</span>
                                        <span className='journal-field'>{journal.field}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPage;

/* 화면 구성 오류, 사용자의 공간 위치 수정, journal-card 구현 안됨 오류 수정 */
/* 로고, 배너 이름 혼동 수정 필요 */