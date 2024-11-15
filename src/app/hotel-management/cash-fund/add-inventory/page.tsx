import { NextPage } from "next";

interface Props {}

const AddInventoryPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="toolbar-top pb-2 flex items-center justify-between text-xs">
        <div className="flex items-center justify-between px-3 w-full rounded-md">
          <h1 className="text-base font-[600] flex items-center gap-1">
            Phiếu chi tiền gửi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="icon"
            >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm48 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM376 160l80 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z" />
            </svg>
          </h1>
          <button className="sbm group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="icon !fill-[var(--room-empty-color-)] group-hover:!fill-white"
            >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            Lưu
          </button>
        </div>
      </div>
      {/* <!-- start Body Content --> */}
      <div className="bg-white cash-fund_content border !border-[var(--ht-neutral-100-)] rounded-md p-3">
        <div className="flex items-center gap-1 pb-3">
          <input type="checkbox" />
          <span>Hiển thị phiếu trên biên bản bàn giao ca</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="icon cursor-pointer"
            fontStyle="width: 12px; height: 12px;"
          >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </div>
        <div className="lg:flex md:block gap-2">
          <div className="flex-1 p-2 pb-5 border-x border-b border-[var(--ht-neutral-100-)] rounded-md">
            <h2 className="uppercase font-[500] text-[13px] border-b !border-[var(--ht-neutral-100-)] pb-2 mb-2">
              Thông tin chung
            </h2>
            <select className="custom-select btn mb-4">
              <option value="" selected>
                Tìm kiếm khách hàng...
              </option>
              <option value="">Cristiano Ronado</option>
              <option value="">Nguyễn Văn A</option>
              <option value="">Lê Thi B</option>
              <option value="">Nguyễn Trần Duy Nhất</option>
            </select>
            <p className="text-[#b2b2b2] border-b border-dashed border-[var(--ht-neutral-100-)] py-1 mb-8 ml-3">
              Người nhận
            </p>
            <p className="text-[#b2b2b2] border-b border-dashed border-[var(--ht-neutral-100-)] py-1 mb-8 ml-3">
              Địa chị
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span>Nội dung chi</span>
              <select className="btn flex-1">
                <option value="" selected>
                  Nội dung...
                </option>
                <option value="">Chi từ phòng</option>
                <optgroup label="Dịch vụ sinh hoạt">
                  <option value="">--Điện</option>
                  <option value="">--Nước</option>
                  <option value="">--Internet</option>
                  <option value="">--Truyền hình cáp</option>
                  <option value="">--Điện thoại</option>
                  <option value="">--Sửa chữa</option>
                </optgroup>
                <optgroup label="Phụ cấp">
                  <option value="">--Lương</option>
                  <option value="">--Thưởng</option>
                </optgroup>
                <optgroup label="Phụ phí">
                  <option value="">--Thuế</option>
                  <option value="">--Hoa hồng</option>
                  <option value="">--Quảng cáo</option>
                </optgroup>
                <option value="">Mua hàng</option>
                <option value="">Trả nợ nhà cung cấp</option>
                <option value="">Mua sắm đồ đạc</option>
                <option value="">Mua sắm đồ đạc</option>
                <option value="">Chi tiêu cá nhân (Host)</option>
                <option value="">Kết chuyển tiền (Host)</option>
                <option value="">Khác</option>
              </select>
              <div className="flex-1">
                <input
                  type="text"
                  className="p-2 w-full border-b outline-none focus:!border-[var(--room-empty-color-)]"
                  placeholder="Nhập ghi chú"
                />
              </div>
            </div>
            <div className="flex items-center">
              <label>Tài khoản ngân hàng</label>
              <select className="btn !py-1 !px-2 !w-auto ml-2 max-w-[350px]">
                <option>MB - NGO MANH THONG(483920584311111)</option>
              </select>
            </div>
          </div>
          <div className="flex-1 p-2 pb-5 border-x border-b border-[var(--ht-neutral-100-)] rounded-md lg:mt-0 md:mt-3">
            <h2 className="uppercase font-[500] text-[13px] border-b !border-[var(--ht-neutral-100-)] pb-2 mb-2">
              Chứng từ
            </h2>
            <p className="flex flex-col text-[#b2b2b2] border-b border-dashed border-[var(--ht-neutral-100-)] py-1 mb-4 ml-3">
              <span className="text-xs">Số phiếu chi</span>
              <span>CT001</span>
            </p>
            <div className="center !justify-between mb-4 ml-3">
              <label form="start-date">Ngày chi tiền</label>
              <input type="date" id="start-date" className="btn !w-auto ml-2" />
              {/* <!-- Lấy thời gian hiện tại làm mặt định qua js --> */}
            </div>
            <div className="center !justify-between mb-4 ml-3">
              <label>Phiếu chi tiền</label>
              <select className="btn !w-auto">
                <option value="" selected>
                  Chi khác
                </option>
              </select>
            </div>
            <select className="custom-select btn mb-4">
              <option value="" selected>
                Tìm kiếm nhân viên...
              </option>
              <option value="">Mạnh Thông</option>
              <option value="">Đình Hoài</option>
              <option value="">Ngọc Quang</option>
              <option value="">Bảo nguyên</option>
            </select>
            <div className="flex-1">
              <input
                type="text"
                className="p-2 w-full border-b outline-none focus:!border-[var(--room-empty-color-)]"
                placeholder="Số tài khoản người nhận"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end Body Content --> */}

      {/* <!-- start Toolbar Top 2--> */}
      <div className="toolbar-top rounded-t-md pb-2 flex items-center justify-between text-xs mt-3">
        <div className="flex ">
          <div className="toolbar-top-room-detail flex rounded-3xl p-1 font-[600] bg-white">
            <button className="toolbar-top-type_item active">Chi tiết</button>
            <button className="toolbar-top-type_item">Chứng từ</button>
          </div>
        </div>
      </div>
      {/* <!-- end Toolbar Top 2 --> */}

      {/* <!-- start Body Content 2 --> */}
      <div className="bg-white cash-fund_content border !border-[var(--ht-neutral-100-)] rounded-md p-3">
        <table className="w-full rounded-t-[3px] overflow-hidden">
          <thead className="relative border !border-[var(--ht-neutral-100-)] font-[500] text-[var(--color-menu-icon-)]">
            <tr className="bg-[var(--ht-neutral-100-)]">
              <td className="w-[80%] p-2">
                <p className="whitespace-nowrap">Mô tả</p>
              </td>
              <td className="w-[20%] p-2 text-center">
                <p className="whitespace-nowrap">Tổng tiền</p>
              </td>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            <tr className="group border-b !border-[var(--ht-neutral-100-)]">
              <td className="p-2 py-4">
                <div className="flex gap-2">
                  <button className="btn !w-[40px] !flex items-center justify-center !bg-[var(--room-empty-color-)] !text-white border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fontStyle="margin-top: 2px;"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      ></path>
                    </svg>
                  </button>
                  <button className="btn !w-[40px] !flex items-center justify-center  !bg-[var(--room-out-of-service-color-)] !text-white border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fontStyle="margin-top: 2px;"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      ></path>
                    </svg>
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      className="p-2 w-full border-b outline-none focus:!border-[var(--room-empty-color-)]"
                      placeholder="Nhập ghi chú"
                    />
                  </div>
                </div>
              </td>
              <td className="p-2">
                <div className="flex gap-2">
                  <select className="btn !w-auto">
                    <option value="" selected>
                      VND
                    </option>
                  </select>
                  <div className="flex-1">
                    <input
                      type="text"
                      className="p-2 w-full border-b outline-none focus:!border-[var(--room-empty-color-)]"
                      placeholder="Nhập số tiền"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-end py-3">
          <span className="py-1 px-2 rounded-md text-sm font-[500] bg-blue-500 !text-white">
            Tổng VND 0
          </span>
        </div>
      </div>
      {/* <!-- end Body Content 2--> */}
    </div>
  );
};

export default AddInventoryPage;