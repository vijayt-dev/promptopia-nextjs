import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ReduxProvider from "@redux/provider";
//import Gate from "@redux/persistGate";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "@redux/store";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <ReduxProvider>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          {/* <Gate> */}
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
            {/* </PersistGate> */}
          {/* </Gate> */}
        </ReduxProvider>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
