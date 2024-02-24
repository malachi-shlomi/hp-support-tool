import { useEffect } from "react";
import MainPage from "./copmonents/MainPage";
import { useSelector } from "react-redux";
import Modal from "./copmonents/Modal";

function App() {
  const { darkMode } = useSelector((state: any) => state.case.settings);
  const { modalMessage } = useSelector((state: any) => state.case);

  useEffect(() => {
    const htmlRoot = document.documentElement;
    darkMode
      ? htmlRoot.setAttribute('data-bs-theme', 'dark')
      : htmlRoot.removeAttribute('data-bs-theme');

    }, [darkMode]);

  return (
      <div className="App bg-red">
        <MainPage />
        {modalMessage && <Modal />}
      </div>
  );
}

export default App;
