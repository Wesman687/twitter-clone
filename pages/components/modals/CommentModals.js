import { closeCommentModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModals() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className="w-full h-full sm:w-[600px] sm:h-[386px] 
        rounded-lg bg-black border border-gray-500 text-white
        sm:p-10 p-4"
        >
          <div className="flex space-x-3">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src="/assets/profile_pic.jpg"
            />
            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">Kylie</h1>
                <h1 className="text-gray-500">@kylie</h1>
              </div>
              <p className="mt-1">This is awesome</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@xgs</span>
              </h1>
            </div>
          </div>
          <div className="mt-11">
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="/assets/profile_pic.jpg"
              />
              <div className="w-full">
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full bg-transparent outline-none
              text-lg resize-none"
                />
                <div className="flex justify-between">
                  <div className="flex space-x-0">
                    <div className="iconsAnimation">
                      <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconsAnimation">
                      <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                  </div>
                  <button
                    className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50 "
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
