import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ReduxProvider from "@redux/provider";
import Gate from "@redux/persistGate";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <ReduxProvider>
          <Gate>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
          </Gate>
        </ReduxProvider>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
