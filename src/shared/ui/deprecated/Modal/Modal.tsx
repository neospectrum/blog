import { FC, ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { isClosing, isMounted, close } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
