import Fork from "./sections/03-Fork/Fork";

function App() {
  return (
    <>
      <Fork />

      <section
        id="institution-track"
        className="h-screen bg-blue-200 flex items-center justify-center text-5xl font-bold"
      >
        Institution Track
      </section>

      <section
        id="family-track"
        className="h-screen bg-green-200 flex items-center justify-center text-5xl font-bold"
      >
        Family Track
      </section>
    </>
  );
}

export default App;