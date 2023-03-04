import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ContactMeForm from '../form/ContactMeForm';
import Modal from './Modal';

interface MessengerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Messenger: React.FC<MessengerProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <button
        onClick={toggle}
        role="button"
        aria-roledescription="Contact me "
        className="bg-dark-secondary-background/50 dark:bg-dark-secondary-background p-3 fixed z-5 bottom-5 right-5 rounded-full"
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 fill-neutral-white" />
      </button>
      <Modal
        open={isOpen}
        onClose={toggle}
        title="Contact me"
        description="You can also call me Monday to Friday 9AM - 8PM on +420 774 500 143"
      >
        <ContactMeForm />
      </Modal>
    </>
  );
};

export default Messenger;
