const response = require("../../../helper/Response");
var serverModel = require("../../../model/ServerModel");
const permssion = require("../../../helper/Permission");
const { WebSocketObserver } = require("../../../model/WebSocketModel");

const mcPingProtocol = require("../../../helper/MCPingProtocol");

//控制台信息获取
WebSocketObserver().listener("server/console", (data) => {
  // permssion.needLogin(req, res);
  let userName = data.WsSession.username;
  let serverName = data.body.trim();

  if (permssion.isCanServer(userName, serverName)) {
    let serverData = serverModel.ServerManager().getServer(serverName);

    response.wsSend(data.ws, "server/console", {
      serverData: serverData.dataModel,
      run: serverData.isRun(),
      sysMonery: 100 - MCSERVER.dataCenter.cacheMemoryUsage,
      sysCpu: MCSERVER.dataCenter.cacheCPU,
      CPUlog: MCSERVER.logCenter.CPU,
      RAMlog: MCSERVER.logCenter.RAM,
      FTP_ip: MCSERVER.localProperty.ftp_ip,
      FTP_port: MCSERVER.localProperty.ftp_port,
      userName: userName,
      isFtpOpen: MCSERVER.localProperty.ftp_is_allow,
      mcping: mcPingProtocol.QueryMCPingTask(serverName) || {
        current_players: "--",
        max_players: "--"
      }
    });
    // MCSERVER.log('准许用户 [' + userName + '] 获取控制台实时数据');
  }
});
