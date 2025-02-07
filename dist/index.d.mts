type NotificationType = 'info' | 'warn' | 'error';
declare class CrisNotification {
    private type;
    constructor(type: NotificationType);
    send(message: string): void;
}

export { CrisNotification, type NotificationType };
