import "./App.scss";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="content-area">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;

{
  /* <Header>
        <Headline></Headline>
      </Header>

      <Body>
        <JokeCard>
          <Card>
            <CurrentJoke></CurrentJoke>
            <ButtonBar>
              <Button></Button>
              <Button></Button>
            </ButtonBar>
          </Card>
        </JokeCard>

        <SavedJokesCard>
          <Card>
            <SavedJokesList>
              <SavedJokeItem>
                <Button></Button>
              </SavedJokeItem>
            </SavedJokesList>
          </Card>
        </SavedJokesCard>
      </Body> */
}
