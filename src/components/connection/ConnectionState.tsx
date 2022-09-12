import React, { useContext } from "react";
import { CallParties } from "../../types/CallParties";
import { ConnectionStatus } from "../../types/ConnectionStatus";
import ConnectedStatus from "./ConnectedStatus";
import Identity from "./Identity";

interface IConnectionStateProps {
  connectionStatus: ConnectionStatus;
  disconnect: () => void;
  instantiateIbClient: () => void;
  localIdentity: string;
  localIdentitySet: React.Dispatch<React.SetStateAction<string>>;
}

const ConnectionState: React.FC<IConnectionStateProps> = ({
  connectionStatus,
  instantiateIbClient,
  disconnect,
  localIdentity,
  localIdentitySet
}) => {
  return (
    <div className="connectionComponent">
      <Identity
        callParty={CallParties.LOCAL_SIDE}
        identity={localIdentity}
        identitySet={localIdentitySet}
      />
      <ConnectedStatus
        connectionStatus={connectionStatus}
        instantiateIbClient={instantiateIbClient}
        disconnect={disconnect}
      />
    </div>
  );
};

export default ConnectionState;
