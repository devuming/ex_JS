import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeText from "./OptimizeText";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    // API에서 받아온 데이터로 초기 바인딩 데이터 생성 : API 값을 일기 데이터 구조로 변환
    const initData = res.slice(0, 20).map((it) => {
      // 500개 배열에서 20개만 slice
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1, // 1~5까지의 난수 생성 & 정수로 변환
        created_date: new Date().getTime(),
        id: dataId.current++, // dataId.current값을 id에 넣고 id 증가 시키기
      };
    });

    setData(initData);
  }; // Promise를 반환하는 비동기 함수

  useEffect(() => {
    getData();
  }, []); // App 컴포넌트 Mount 시 호출

  // 일기를 추가하는 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1; // id 증가
    setData([...data, newItem]);
  };

  // 일기 삭제 함수
  const onRemove = (targetId) => {
    // 배열 필터링 : targetId가 아닌 것만 추출
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // State에 반영
    setData(newDiaryList);
    alert(`${targetId}가 삭제되었습니다.`);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
    alert(`${targetId}가 수정되었습니다.`);
  };

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / badCount) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <OptimizeText />
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 : {goodCount}</div>
      <div>기분 나쁜 일기 : {badCount}</div>
      <div>기분 좋은 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onEdit={onEdit} onRemove={onRemove} />
    </div>
  );
}

export default App;
