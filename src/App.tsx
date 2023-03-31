import ListGroup from "./components/ListGroup";

function App() {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Fort Worth",
    "Jacksonville",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington DC",
    "Boston",
    "Nashville",
    "El Paso",
    "Detroit",
    "Memphis",
    "Portland",
  ];

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={(item) => console.log(item)}
      ></ListGroup>
    </div>
  );
}
export default App;
