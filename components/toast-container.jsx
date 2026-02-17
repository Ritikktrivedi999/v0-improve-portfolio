"use client"

import { ToastContainer } from 'react-toastify'

export default function ToastContainerWrapper() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      style={{
        '--toastify-color-light': '#1e1e2e',
        '--toastify-color-dark': '#1e1e2e',
        '--toastify-color-info': '#3b82f6',
        '--toastify-color-success': '#10b981',
        '--toastify-color-warning': '#f59e0b',
        '--toastify-color-error': '#ef4444',
        '--toastify-color-transparent': 'rgba(0,0,0,0.7)',
      }}
      className="!font-sans"
      toastClassName={() =>
        "!bg-gray-800/95 !backdrop-blur-md !border !border-blue-500/30 !rounded-lg !shadow-xl !p-4 !text-white"
      }
      bodyClassName={() => "!text-sm !font-medium"}
      progressClassName="!bg-gradient-to-r !from-blue-500 !to-purple-500"
    />
  )
}
