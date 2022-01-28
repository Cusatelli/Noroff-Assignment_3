import React from "react";
import { Navigate } from "react-router-dom";

export default function Profile({ auth }) {
    if (!auth) { return <Navigate to="/login" />; }
    
    return (
        <div className="page profile">
            <h1>Profile Page</h1>
        </div>
    );
}
