import React from "react";
// Hàm loading spinner xoay tròn trong khi đang lấy dữ liệu
export const Loading = () => {
    return (
        <div className="col-12 text-center mt-3 mb-3">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p className="mt-2">Loading...</p>
        </div>
    );
};