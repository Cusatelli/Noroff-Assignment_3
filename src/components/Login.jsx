import React from "react";

export default function Login() {
    return (
        <div className="page login">
            <form action="" method="post">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="John Doe..." />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
