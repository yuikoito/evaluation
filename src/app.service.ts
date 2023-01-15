import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  login() {}
  help() {
    return ['こちらは評価管理Slack Appです', ''].join('\n');
  }
}
