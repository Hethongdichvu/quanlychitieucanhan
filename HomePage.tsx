import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1>Chào mừng đến với Quản lý chi tiêu cá nhân</h1>
            <p>Quản lý chi tiêu của bạn một cách hiệu quả và hiệu suất.</p>
            <Link to="/expenses">
                <button>Đi đến Quản lý chi tiêu</button>
            </Link>
        </div>
    );
};

export default HomePage;