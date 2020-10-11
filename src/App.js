import React from "react";
import "./style.css";

import MessageCard from './MessageCard'

export default function App() {
  return (
    <React.Fragment>
      <navbar className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">React with Props</a>
      </navbar>
     <MessageCard name="Bharat" age="27" designation="UI Developer"></MessageCard>
     <MessageCard name="Sravani" age="25" designation="Design Engineer"></MessageCard>
     <MessageCard name="Kumar" age="24" designation="Embedded Engineer"></MessageCard>

    </React.Fragment>
  );
}
