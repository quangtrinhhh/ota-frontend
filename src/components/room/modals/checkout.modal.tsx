"use client"

import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { useAuth } from "@/context/auth.context";
import { RequestTransaction } from "@/types/backend";
import axios from "axios";

interface IProps {
    showModal: boolean;
    closeModal: () => void;
    transactionRequest: RequestTransaction,
}

const CheckOutModal = (props: IProps) => {
    const { token } = useAuth();
    const { showModal, closeModal, transactionRequest } = props;

    const handleCheckOut = async () => {
        // setIsLoading(true)
        if (transactionRequest.price > 0) {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/invoicePayments/handleTransaction`,
                    transactionRequest,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                // Kiểm tra phản hồi từ API
                if (response.data.statusCode === 200 || response.status === 201) {
                    console.log("Gửi thành công");
                    closeModal();
                    // setIsLoading(false);
                }
            } catch (error) {
                // setIsLoading(false);
                // In thông tin lỗi khi gặp sự cố
                console.log("Lỗi khi gửi dữ liệu:", error);
            }
        } else {
            closeModal()
        }
    }

    return (
        <Dialog open={showModal} onOpenChange={closeModal}>
            <DialogContent 
                className="rounded-xl overflow-auto p-0 bg-transparent border-none">

                <div className="rounded-xl">
                    <DialogTitle 
                        className="text-white font-[500] text-base bg-[var(--room-empty-color-)] px-4 py-2 rounded-t-xl">
                        Thanh toán
                    </DialogTitle>

                    <div className="bg-white p-3">
                        <p>Bạn có chắc chắn muốn thanh toán mới !</p>

                        <footer className="modal-footer mt-3">
                            <div className="flex items-center justify-end gap-x-5 font-[500]">
                                <button
                                    onClick={closeModal}
                                    className="text-[#d147a3] w-28 py-1 rounded-md border border-[#d147a3] hover:bg-[#d147a3] hover:text-white duration-200">
                                    Huỷ
                                </button>
                                <button
                                    onClick={handleCheckOut}
                                    className="w-28 py-1 bg-white border border-[var(--navbar-color-)] text-[var(--navbar-color-)]  rounded-md hover:bg-[var(--navbar-color-)] hover:text-white duration-200">
                                    Thanh toán
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>    
                
            </DialogContent>
        </Dialog>
    )
}

export default CheckOutModal;