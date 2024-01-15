import Container from "./components/Container";
import Button from "./components/Button";
import Alert from "./components/Alerts";
import Badge from "./components/Badges";
import Card from "./components/Card";

function App() {
  return (
    <div className="p-20 flex flex-col justify-center items-center gap-20 shadow-xl bg-stone-200">
      <h1 className="font-bold text-4xl drop-shadow-md">Components Library</h1>

      <Container title="Button Component">
        <Button
          size="sm"
          bgColor="green-500"
          textColor="white"
          onClick={() => alert("Spring is near!")}
        >
          Small Button
        </Button>
        <Button
          size="lg"
          bgColor="blue-500"
          textColor="white"
          onClick={() => alert("I wish you a beautiful day!")}
        >
          Large Button
        </Button>

        <Button size="xl" bgColor="red-300" textColor="white" disabled={true}>
          XL Disabled Button
        </Button>
      </Container>

      <Container title="Alert Component" >
        <Alert
          color="hsl(230, 80%, 60%)"
          fontColor="white"
          icon="info"
          message="Think about this and that before you do that other thing!"
        />

        <Alert
          color="hsl(40, 100%, 60%)"
          icon="warning"
          message="CAUTION! Check your terminal twice before executing the ' rm ' command"
        />

        <Alert
          color="#10101010"
          icon="success"
          message="Successful! I can now build my own components"
          fontColor="#00aa00"
        />
      </Container>
      <Container title="Badge Component">
        <Badge
          color="#57141333"
          size="small"
          icon="star"
          title="Rating"
          borderRadius="8px"
        />
        <Badge
          color="#12345615"
          size="large"
          icon="heart"
          title="Large badge"
          borderRadius="8px"
        />
        <Badge icon="cam" borderRadius="50%" />
        <Badge icon="adress" borderRadius="50%" />
      </Container>
      
      <Container title="Card Component">
        <Card
          href="https://example.com"
          imgAlt="Example Image"
          imgSrc="https://placekitten.com/300/202"
        >
          <h3 className="font-bold">Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            obcaecati modi tempore quia?
          </p>
        </Card>

        <Card
          href="https://example2.com"
          imgAlt="Example Image 2"
          imgSrc="https://placekitten.com/300/205"
        >
          <h3 className="font-bold">Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            obcaecati dolor.
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default App;
