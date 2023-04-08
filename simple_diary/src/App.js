import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 일기를 추가하는 함수
  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id:dataId.current
    }
    dataId.current += 1;  // id 증가
    setData([...data, newItem]);
  };

  // 일기 삭제 함수
  const onRemove = (targetId) =>{
    alert(`${targetId}가 삭제되었습니다.`);
    // 배열 필터링 : targetId가 아닌 것만 추출
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // State에 반영
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
