import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import React, { Fragment, useRef } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface ModalProps {
  title?: string;
  description?: string;
  children: JSX.Element;
  open: boolean;
  onModalEnter?: () => void;
  cancelButton?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  open,
  onModalEnter,
  onClose,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      beforeEnter={onModalEnter ? onModalEnter : () => undefined}
    >
      <Dialog
        as="div"
        className={classNames(inter.variable, 'font-sans relative z-[999]')}
        initialFocus={cancelButtonRef}
        onClose={onClose ? onClose : () => undefined}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-overlay bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center items-end lg:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 lg:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 lg:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 lg:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 lg:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  'relative overflow-hidden rounded-lg text-left w-full lg:max-w-2xl bg-light-primary-background dark:bg-dark-primary-background p-6 flex flex-col gap-5',
                )}
              >
                {!!title && <Dialog.Title className="font-bold text-h2">{title}</Dialog.Title>}
                {!!description && <Dialog.Description>{description}</Dialog.Description>}
                {children}
                <XMarkIcon
                  ref={cancelButtonRef}
                  role="button"
                  aria-roledescription="Close modal"
                  className="absolute w-5 h-5 top-6 right-5 cursor-pointer"
                  onClick={onClose ? onClose : () => undefined}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
