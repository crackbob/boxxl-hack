let playerId = game.localPlayer.clientId;
game.getPlayerById(playerId).roleManager.roles.add("admin");
game.integratedServer.getPlayerById(playerId).roleManager.roles.add("admin");
