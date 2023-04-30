import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./common/styles/theme";
import Sidebar from "./base/components/global/SideBar";
import Topbar from "./base/components/global/TopBar";
import Dashboard from "./base/components/dashboard";
import Team from "./base/components/team";
import Contacts from "./base/components/contacts";
import Invoices from "./base/components/invoices";
import Form from "./base/components/form";
import Bar from "./base/components/bar";
import Pie from "./base/components/pie";
import Line from "./base/components/line";
import Geography from "./base/components/geography";
import Calendar from "./base/components/calender/calender";
import FAQ from "./base/components/faq";

function App() {
  const { theme, colorMode } = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/react-express-mongo" element={<Dashboard />} />
              <Route path="/react-express-mongo/team" element={<Team />} />
              <Route path="/react-express-mongo/contacts" element={<Contacts />} />
              <Route path="/react-express-mongo/invoices" element={<Invoices />} />
              <Route path="/react-express-mongo/form" element={<Form />} />
              <Route path="/react-express-mongo/bar" element={<Bar />} />
              <Route path="/react-express-mongo/pie" element={<Pie />} />
              <Route path="/react-express-mongo/line" element={<Line />} />
              <Route path="/react-express-mongo/faq" element={<FAQ />} />
              <Route path="/react-express-mongo/calendar" element={<Calendar />} />
              <Route path="/react-express-mongo/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
