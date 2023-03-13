import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import Database from './Database';

export default function Page_Route() {
    return(
        <div>
            <Routes>
                <Route path="/Database" element={<Database/>}/>
            </Routes>
        </div>
    );
}