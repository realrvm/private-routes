import { AppRouter } from "@/app/providers/router-dom-provider";
import { Header } from "@/widgets/header";

function App() {
  return (
    <section>
      <Header />
      <AppRouter />
    </section>
  );
}

export default App;
