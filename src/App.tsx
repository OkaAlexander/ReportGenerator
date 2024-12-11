import { ThemeProvider } from "./views/ThemeProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
