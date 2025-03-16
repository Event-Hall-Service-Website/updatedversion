import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Check if the cookie already exists
    if (!cookies.userConsent) {
      axios.get(`${import.meta.env.VITE_API_URL}/auth/cookies`).then((res) => {
        if (!res.data.consent) {
          setOpenModal(true);
        }
      });
    }
  }, [cookies]); // Only re-run when cookies change

  const handleConsent = (consent) => {
    setCookie("userConsent", consent, { path: "/" });
    axios.post(`${import.meta.env.VITE_API_URL}/auth/cookies`, { consent });
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal}>
      <DialogContent className="max-w-md text-center p-6 z-[1000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hideCloseButton">
        {/* Force hiding the default close button */}
        <style>
          {`
            [data-state="open"] button.absolute {
              display: none !important;
            }
          `}
        </style>

        <DialogHeader>
          <DialogTitle className="text-lg font-semibold font-plus-jakarta-sans">
            Cookie Preferences
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 mt-2 font-plus-jakarta-sans">
            This website uses cookies to enhance your experience. Accept all or
            decline?
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-4 mt-4">
          <Button
            onClick={() => handleConsent("accepted")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-plus-jakarta-sans"
          >
            Accept All
          </Button>
          <Button
            onClick={() => handleConsent("declined")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-plus-jakarta-sans"
          >
            Decline
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
