import React from "react";
import "./style.css";

import MessageCard from './MessageCard';
import Student from './Student';


export default function App() {
  return (
    <React.Fragment>
      <navbar className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">React with Props and States</a>
      </navbar>

      <Student></Student>

    </React.Fragment>
  );
}
