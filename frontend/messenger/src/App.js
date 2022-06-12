import ChatArea from "./components/chat-area";
import ChatList from "./components/chat-list";

function App() {
  const getUserChat = (profile) => {
    console.log("App-------------->", profile);
  };
  return (
    <div className="container clearfix">
      <ChatList onUserSelected={getUserChat} />
      <ChatArea />
    </div>
  );
}

export default App;
