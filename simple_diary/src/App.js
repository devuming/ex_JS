import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"김유민",
    content:"하이 1",
    emotion:5,
    created_date: new Date().getTime(), // 현재시간(ms)
  },
  {
    id:2,
    author:"홍길동",
    content:"하이 2",
    emotion:3,
    created_date: new Date().getTime(), // 현재시간(ms)
  },
  {
    id:3,
    author:"박빡빡",
    content:"하이 3",
    emotion:2,
    created_date: new Date().getTime(), // 현재시간(ms)
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
