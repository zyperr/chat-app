// import { ChatBubble } from "../../components/Chats/ChatBubble"
import "../../styles/pages/main_path/land.css";
import wave from "../../assets/wave-haikei.svg";
import AddFriend from "../../components/AddFriend";
import GetStarted from "../../components/Btn";
export const Land = () => {
  return (
    <main className="main">
      <section className="about">
        <article className="about__container">
          <h2 className="about__title">
          Whatever: Friends, Fun, and Fabulous Conversations!
          </h2>
          <p className="subtitle">
            A place that makes it easy to talk every day and hang out more
            often.
          </p>
        </article>
      </section>
      <section className="chat">
        <article className="chat__container">
          <h2 className="chat__title">Add your friends</h2>
          <p className="subtitle">
            Chat from anywhere with your friends along the world and in any
            device, on <span>Whatever</span>.
          </p>
        </article>
        <AddFriend img={"https://robohash.org/1"}/>
        <AddFriend img={"https://robohash.org/2"}/>
        <AddFriend img={"https://robohash.org/3"}/>
        <AddFriend img={"https://robohash.org/4"}/>

        <img src={wave} alt="wave" className="wave" />
      </section>
      <section className="get-started">
        <article className="get-started__container">
          <h2 className="get-started__title">Get Started</h2>
          <p className="subtitle">
            Sign up for an account and get started with <span>Whatever</span> today.
          </p>
          <GetStarted text={"Get Started"}/>
        </article>
      </section>
    </main>
  );
};
