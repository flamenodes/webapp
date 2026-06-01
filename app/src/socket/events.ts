import type { Server as SocketIOServer } from 'socket.io'

let io: SocketIOServer | null = null

export function setSocketIO(socketServer: SocketIOServer) {
  io = socketServer
}

export function getSocketIO(): SocketIOServer | null {
  return io
}

export function emitNotification(userId: string, notification: any) {
  if (!io) {
    console.warn('Socket.IO not initialized')
    return
  }
  
  // Emit to specific user
  io.to(`user:${userId}`).emit('notification', notification)
}

export function emitAnnouncement(announcement: any) {
  if (!io) {
    console.warn('Socket.IO not initialized')
    return
  }
  
  // Broadcast to all connected clients
  io.emit('announcement', announcement)
}

export function emitServerUpdate(userId: string, server: any) {
  if (!io) {
    console.warn('Socket.IO not initialized')
    return
  }
  
  // Emit to specific user
  io.to(`user:${userId}`).emit('server:update', server)
}
