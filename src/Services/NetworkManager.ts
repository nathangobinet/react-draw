import { AbstractNetworkManager, IAction } from '../../../memo-draw-engine/src/index';

class NetworkManager extends AbstractNetworkManager {
  update(elem: IAction): void {
    console.log(elem);
  }
}

export default NetworkManager;
