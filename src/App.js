import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Writing from './pages/Writing';
import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      console.log(state, action);
      console.log(state.posts, action.user);
      return {
        //posts: state.posts,action,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        posts: state.posts.filter(user => user.no !== action.no),
      };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내준다
export const UserDispatch = React.createContext(null);

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
    console.log('app', userValues);
  };

  const [state, dispatch] = useReducer(reducer, posts);

  const nextNo = useRef(3);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        no: nextNo.current,
        userName,
        userPw,
        userTitle,
        userContent,
      },
    },[userName,
      userPw,
      userTitle,
      userContent]);

    const { posts } = state;

    //원래 객체를 복사하고 user를 추가하기
    // setPosts([...posts, user]);

    // onReset();
    nextNo.current += 1;
  };

  const onRemove = useCallback(no => {
    dispatch({
      type: 'REMOVE_USER',
      no,
    });
  }, []);

  // const navigate = useNavigate();

  //게시버튼 클릭시 홈으로 이동후 게시물에 추가하기
  // const handlePush = () => {
  //   alert('저장되었습니다.');
  //   // navigate('/');
  //   a();
  // };

  const handlePush = () => {
    dispatch({ type: 'CREATE_USER', posts });
    alert('저장되었습니다.');
    window.localStorage.setItem('userName', JSON.stringify(userValues));
    // navigate('/');
  };

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
              handlePush={handlePush}
              onCreate={onCreate}
              posts={posts}
              handlePush={handlePush}
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
