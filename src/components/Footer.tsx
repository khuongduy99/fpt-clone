import React from "react";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full lg:px-[150px] sm:px-2 py-2">
        <ul className="text-sm text-blue-700 py-3">
          <li className="my-2 cursor-pointer">Giới thiệu về công ty</li>
          <li className="my-2 cursor-pointer">Chính sách bảo mật</li>
          <li className="my-2 cursor-pointer">Quy chế hoạt động</li>
          <li className="my-2 cursor-pointer">Kiểm tra hóa đơn điện tử</li>
          <li className="my-2 cursor-pointer">Tra cứu thông tin bảo hành</li>
          <li className="my-2 cursor-pointer">Câu hỏi thường gặp mua hàng</li>
        </ul>
        <ul className="text-sm text-blue-700 py-3">
          <li className="my-2 cursor-pointer">Tin tuyển dụng</li>
          <li className="my-2 cursor-pointer">Tin khuyến mãi</li>
          <li className="my-2 cursor-pointer">Hướng dẫn mua online</li>
          <li className="my-2 cursor-pointer">Hướng dẫn mua trả góp</li>
          <li className="my-2 cursor-pointer">Chính sách trả góp</li>
        </ul>
        <ul className="text-sm text-blue-700 py-3">
          <li className="my-2 cursor-pointer">Hệ thống cửa hàng</li>
          <li className="my-2 cursor-pointer">Chính sách đổi trả</li>
          <li className="my-2 cursor-pointer">Hệ thống bảo hành</li>
          <li className="my-2 cursor-pointer">Giới thiệu máy đổi trả</li>
          <li className="my-2 cursor-pointer">
            Kiểm tra hàng Apple chính hãng
          </li>
        </ul>
      </div>
      <footer className="bg-gray-100 lg:px-[150px] sm:px-2 py-2">
        <div className="bg-gray-100">
          <p className="text-center text-sm">
            © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261
            - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do
            Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP
            HCM cấp ngày 02/07/2018. Điện thoại:{" "}
            <span className="text-blue-700">(028) 7302 3456.</span> Email:
            <span className="text-blue-700">fptshop@fpt.com.vn.</span> Chịu
            trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
          </p>
        </div>
      </footer>
    </>
  );
}
