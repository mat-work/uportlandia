import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../shared/Header";
import Landing from "./LandingContainer";
import Failure from "../shared/Failure";
import Receive from "./ReceiveContainer";
import Success from "../shared/Success";
import Footer from "../shared/Footer";
import { ContentLayout, BackButton } from "../shared/elements";
import { Container } from "../shared/grid";
import SERVICES from "../../constants/services";

class Insurance extends React.Component {
  render() {
    return (<ContentLayout>
      <Header title={SERVICES.TRANSPORT.entity} logo={SERVICES.TRANSPORT.icon} />
      <Container>
        <Switch>
          <Route path="/transport" exact>
            <React.Fragment>
              <BackButton url="/" />
              <Landing />
            </React.Fragment>
          </Route>
          <Route path="/transport/prerequisites" exact>
            <React.Fragment>
              <BackButton url="/museum" />
              <Failure
                heading="Services that issue claims required to get the bus ticket"
                services={SERVICES.TRANSPORT.requiredServices} />
            </React.Fragment>
          </Route>
          <Route path="/transport/receive" exact component={Receive} />
          <Route path="/transport/complete" exact>
            <React.Fragment>
              <BackButton url="/" label="Back to Home" />
              <Success id={SERVICES.TRANSPORT.id} />
            </React.Fragment>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </ContentLayout>)
  }
}

export default Insurance;
