import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/ForgotPassword";
import OtpPage from "./components/OtpPage";
import ChangePassword from "./components/ChangePassword";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./utils/store";
import Layout from "./components/Layout";
import Employee from "./components/Employee";
import ViewEmployeeTable from "./components/ViewEmployeeTable";
import Device from "./components/Device";
import { Projects } from "./components/Projects";
import { MeetingRoom } from "./components/MeetingRoom";
import { Setting } from "./components/Setting";
import { AddDevice } from "./components/AddDevice";
import { EditDevice } from "./components/EditDevice";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/otppage" element={<OtpPage />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/table" element={<ViewEmployeeTable />} />
            <Route
              path="/meetingroom"
              element={
                <Layout>
                  <MeetingRoom />
                </Layout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/device"
              element={
                <Layout>
                  <Device />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
            <Route
              path="/setting"
              element={
                <Layout>
                  <Setting />
                </Layout>
              }
            />
            <Route path="/employee" element={<Employee />} />
            {/* <Route path="/addemployee" element={<Login />} /> */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
