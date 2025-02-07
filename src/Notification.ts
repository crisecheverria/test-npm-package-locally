export type NotificationType = 'info' | 'warn' | 'error';

export class CrisNotification {
    constructor(private type: NotificationType) {}

    send(message: string) {
        console.log(`%c[${this.type.toUpperCase()}]:%c ${message}`,
                    'color: white; background-color: red; padding:5px;',
                    'color: white; background-color: blue; padding:5px;')
    }
}
                    
