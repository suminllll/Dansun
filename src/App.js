import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Writing from './pages/Writing';
import { useNavigate } from 'react-router-dom';
import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
} from 'react';

function reducer(state, action) {
  const posts = state.posts;

  switch (action.type) {
    case 'CREATE_USER':
      console.log(state, action);
      console.log(posts, action.user);
      return {
        posts: posts.concat(action.user),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        posts: posts.filter(user => user.no !== action.no),
      };
    default:
      return state;
  }
}

function App() {
  const [posts, setPosts] = useState([]); //[QnA] 통신으로 데이터 받아오는 state

  const [userValues, setUserValues] = useState({
    userName: '',
    userPw: '',
    userTitle: '',
    userContent: '',
  }); //글쓰기에서의 input 값을 담을 state

  const { userName, userPw, userTitle, userContent } = userValues;

  //[QnA] 통신으로 데이터 받아옴
  useEffect(() => {
    fetch('data/boardData.json')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  const handleChange = e => {
    const { value, name } = e.target;

    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const nextNo = useRef(4);

  //게시 버튼을 누르면 데이터가 로컬스토리지에 저장됨
  const handlePush = e => {
    e.preventDefault();
    //alert('저장되었습니다.');
    onCreate();
    window.localStorage.setItem('userName', JSON.stringify(userValues));
    window.location.replace('/');
  };

  // localStorage.removeItem('dataName');
  const [userData, setUserData] = useState([]);

  const onCreate = useCallback(() => {
    window.localStorage.getItem('userName');

    const user = {
      no: nextNo.current,
      userTitle,
      userName,
      userContent,
      userPw,
    };

    //원래 객체를 복사하고 user를 추가하기
    setPosts([...posts, user]);

    nextNo.current += 1;
    console.log('user', user);
    // 작성한 게시글이 저장 돼 있는 로컬스토리지에서 데이터 가져오기
  }, [userName, posts, userPw, userTitle, userContent, userData]);

  console.log('posts', posts);

  useEffect(posts => {
    setUserData({ userData: window.localStorage.getItem('userName') });

    console.log('userData', userData);
    console.log('useEffect', posts);
  }, []);

  // const onRemove = useCallback(no => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     no,
  //   });
  // }, []);

  //게시버튼 클릭시 홈으로 이동후 게시물에 추가하기

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              userValues={userValues}
              userName={userName}
              userPw={userPw}
              userTitle={userTitle}
              userContent={userContent}
              posts={posts}
            />
          }
        />
        <Route
          path="/Writing"
          element={
            <Writing
              handleChange={handleChange}
              userValues={userValues}
              userName={userName}
              userPw={userPw}
              userTitle={userTitle}
              userContent={userContent}
              handlePush={handlePush}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
