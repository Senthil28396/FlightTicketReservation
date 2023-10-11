import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SuspenseWrapper from "../../wrappers/SuspenseWrapper";
const HomePage = lazy(() => import("../../pages/home/page"));
const DashboardPage = lazy(() => import("../../pages/admin/dashboard/page"));
const DashboardTripsPage = lazy(() => import("../../pages/admin/trips/page"));
const DashboardFlightPage = lazy(() =>
  import("../../pages/admin/flights/page")
);
const DashboardPassangersPage = lazy(() =>
  import("../../pages/admin/passangers/page")
);
const PassengerLoginPage = lazy(() =>
  import("../../pages/passenger/login/page")
);
const PassengerRegisterPage = lazy(() =>
  import("../../pages/passenger/register/page")
);
const TripRegisterPage = lazy(() => import("../../pages/admin/trips/add/page"));
const FlightRegisterPage = lazy(() =>
  import("../../pages/admin/flights/add/page")
);
const SearchFlightsPage = lazy(() =>
  import("../../pages/passenger/search/page")
);
const PassengerEditPage = lazy(() =>
  import("../../pages/admin/flights/edit/page")
);
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SuspenseWrapper>
              <HomePage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/passagers/login"
          element={
            <SuspenseWrapper>
              <PassengerLoginPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/passagers/signup"
          element={
            <SuspenseWrapper>
              <PassengerRegisterPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/passagers/search"
          element={
            <SuspenseWrapper>
              <SearchFlightsPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/admin/trips/:tripId/add"
          element={
            <SuspenseWrapper>
              <TripRegisterPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/admin/flights/add"
          element={
            <SuspenseWrapper>
              <FlightRegisterPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/admin/flights/:flightId/edit"
          element={
            <SuspenseWrapper>
              <PassengerEditPage />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <SuspenseWrapper>
              <DashboardPage />
            </SuspenseWrapper>
          }
        >
          <Route
            index
            element={
              <SuspenseWrapper>
                <DashboardFlightPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="trips"
            element={
              <SuspenseWrapper>
                <DashboardTripsPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="passengers"
            element={
              <SuspenseWrapper>
                <DashboardPassangersPage />
              </SuspenseWrapper>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
