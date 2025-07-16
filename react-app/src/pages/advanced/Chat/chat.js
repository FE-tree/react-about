export function createConnection(serverUrl, roomId) {
    // 实际的实现将会连接到服务器
    return {
      connect() {
        console.log('✅ 建立连接 "' + roomId + '" 聊天室位于 ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ 断开连接 "' + roomId + '" 聊天室位于 ' + serverUrl);
      }
    };
  }
  