import { useState } from "react";

export default function Add() {
  return (
    <div className="box">
      <div className="title">Add Users</div>
      <div className="card-body">
        <form className="form" action="/users/add" method="post">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value="<%= name %>"
              autocomplete="off"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value="<%= email %>"
              autocomplete="off"
            />
          </div>
          <div className="form-group">
            <label>Position:</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value="<%= position %>"
              autocomplete="off"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-info" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}
