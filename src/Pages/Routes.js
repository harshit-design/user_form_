import {Link, Routes, Route, useNavigate, Form, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Database from './Database';
import User_form_ from './UserForm';

export default function Page_Route() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="user_form_" element={<User_form_/>}/>
                    <Route path="/Database" element={<Database/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
