let playerId = game.localPlayer.clientId;
game.getPlayerById(playerId).props.state.airjumpLimit = Infinity;
game.integratedServer.getPlayerById(playerId).props.state.airjumpLimit = Infinity;
