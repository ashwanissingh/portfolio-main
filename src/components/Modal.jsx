import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Modal = ({ title, message, buttonText, isError, setIsModalVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsModalVisible(false)}
      ></div>

      {/* Modal Box */}
      <div
        className={`relative z-10 rounded-lg shadow-lg p-8 w-full max-w-md mx-4 border ${
          isError
            ? "bg-red-200 border-red-500"
            : "bg-green-200 border-green-500"
        }`}
      >
        <div className="text-center">
          <h2
            className={`text-2xl font-semibold ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {title}
          </h2>
          <p className="text-gray-700 mt-2">{message}</p>
        </div>

        <div className="text-center mt-6">
          <button
            className={`py-2 px-6 text-white rounded-full focus:outline-none transition-colors ${
              isError
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={() => setIsModalVisible(false)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  setIsModalVisible: PropTypes.func.isRequired,
};

export default Modal;
