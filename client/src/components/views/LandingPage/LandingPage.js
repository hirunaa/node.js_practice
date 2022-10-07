import React,{useEffect} from 'react'
import Axios from 'axios'

function LandingPage(props) {
    useEffect(() => {
        Axios.get('/api/hello')
        .then(response => {console.log(response.data)})
    }, [])

    const onClickHandler = () => {
        Axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                return props.history.push("/Login")
            }else{
                return alert("로그아웃 실패")
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
           <h2>시작 페이지</h2>
           <button onClick={onClickHandler}>
                로그아웃
           </button>
        </div>
    )
}

export default LandingPage