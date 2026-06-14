import type { ReactNode } from 'react';

export const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) =>
  open ? (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div className="card-glass max-w-xl rounded-3xl p-6" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
