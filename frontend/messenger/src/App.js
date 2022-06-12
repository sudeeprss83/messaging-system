import ChatArea from "./components/chat-area";
import ChatList from "./components/chat-list";

function App() {
  return (
    <div className="container clearfix">
      <ChatList />
      <ChatArea />
    </div>
  );
}

export default App;
