import ChatBotCom from './components/ChatBotCom';
import './App.css'


function App() {
  const steps = [
    {   
      id: "1",
      message: "원하시는 버툰을 눌러주세요!",
      trigger: "2"
    },
    {
      id: "2",
      options: [
        { value: 1, label: "오시는 길", trigger: "4" },
        { value: 2, label: "가시는 길", trigger: "3" },
        { value: 3, label: "🍻 운전 '길'", trigger: "5" }
      ]
    },
    {
      id: "3",
      message: "그런 길은 없습니다.",
      trigger:6
    },
    {
      id: "4",
      message: "용산역 3번 출구 도보 130분거리",
      
    },
    {
      id: "5",
      message: "무한 👊 에서 하차 했습니다.",
      
    },
    {
      id: "6",
      options: [
        { value: 1, label: "오시는 길", trigger: "4" },
        { value: 2, label: "가시는 길", trigger: "3" },
        { value: 3, label: "🍻 운전 '길'", trigger: "5" }
      ]
    },
  ];
  
  return (
    <div className="App">
      <ChatBotCom steps={steps}/>
    </div>
  );
}

export default App;
