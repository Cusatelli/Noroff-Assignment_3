import React from "react";
import { Navigate } from "react-router-dom";

export default function Translate({ auth }) {
    if (!auth) { return <Navigate to="/login" />; }

    return (
        <div className="page translate">
            <h1>Translate Page</h1>
        </div>
    );
}
