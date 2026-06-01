export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    console.warn('This browser does not support notifications')
    return 'denied'
  }

  if (Notification.permission === 'granted') {
    return 'granted'
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission()
    return permission
  }

  return Notification.permission
}

export function showBrowserNotification(title: string, options?: NotificationOptions) {
  if (!('Notification' in window)) {
    return
  }

  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      ...options,
    })

    notification.onclick = () => {
      window.focus()
      notification.close()
    }

    return notification
  }
}

export function isNotificationSupported(): boolean {
  return 'Notification' in window
}

export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) {
    return 'denied'
  }
  return Notification.permission
}
