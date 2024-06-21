import { Header, Banner, GetSection, PostSection } from "./components";

function App() {
  return (
    <div className=" bg-background">
      <Header />
      <div className={"mx-auto max-w-screen-xl"}>

        <Banner />
        <GetSection />
        <PostSection />
      </div>
    </div>
  );
}

export default App;
